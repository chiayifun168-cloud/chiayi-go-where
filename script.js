const sheetConfig = {
  enabled: true,
  url: "https://script.google.com/macros/s/AKfycbxM6b5b-XuGsWbV96RvpiGrbZ-qaaOOSW2fMehoFcup9ffYt93LSN0cmzDBEbCRarvM/exec"
};

const fallbackEvents = [];

let events = [];

const categoryOrder = [
  "全部",
  "展覽",
  "手作",
  "舞台",
  "音樂",
  "市集",
  "戲劇",
  "導覽",
  "文化",
  "青年",
  "嘉年華",
  "地方節慶",
  "職涯",
  "派對",
  "宗教文化",
  "文創"
];

const state = {
  selectedCategory: "全部",
  selectedRegion: "全部",
  selectedTab: "熱門",
  query: ""
};

const eventGrid = document.getElementById("eventGrid");
const searchInput = document.getElementById("searchInput");
const categoryChips = document.getElementById("categoryChips");
const resultCount = document.getElementById("resultCount");

async function loadEvents() {
  try {
    if (sheetConfig.enabled && sheetConfig.url) {
      const response = await fetch(sheetConfig.url, { cache: "no-store" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const data = await response.json();
      const rows = data.data || data || [];

      if (Array.isArray(rows) && rows.length > 0) {
        events = rows.map(item => ({
          date: item.date || "",
          title: item.title || "新活動",
          url: item.url || "#",
          category: item.category || "展覽",
          location: item.location || "嘉義市",
          region: item.region || "嘉義市",
          tab: item.tab || "熱門",
          summary: item.summary || "活動資訊即將更新。",
          image: item.image || "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80"
        }));
        console.log("✅ Google Sheets 資料已加載:", events.length, "個活動");
        return;
      }
    }
  } catch (error) {
    console.warn("⚠️ Google Sheets 加載失敗，使用備用資料:", error);
  }

  events = fallbackEvents;
  console.log("📌 使用備用資料");
}

function renderChips() {
  categoryChips.innerHTML = "";

  categoryOrder.forEach((category) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `chip ${state.selectedCategory === category ? "active" : ""}`;
    chip.textContent = category;

    chip.addEventListener("click", () => {
      state.selectedCategory = category;
      render();
    });

    categoryChips.appendChild(chip);
  });
}

function getFilteredEvents() {
  return events.filter((event) => {
    const matchesCategory =
      state.selectedCategory === "全部" || event.category === state.selectedCategory;

    const matchesRegion =
      state.selectedRegion === "全部" || event.region === state.selectedRegion;

    const matchesTab =
      state.selectedTab === "熱門" ? event.tab === "熱門" : true;

    const matchesTabExtra =
      state.selectedTab === "明日" ? event.tab === "明日" : true;

    const matchesTabWeekend =
      state.selectedTab === "週末" ? event.tab === "週末" : true;

    const combinedText = `${event.title} ${event.summary} ${event.category} ${event.location} ${event.region}`.toLowerCase();
    const matchesQuery = combinedText.includes(state.query.toLowerCase());

    const selectedTabMatches =
      (state.selectedTab === "熱門" && matchesTab) ||
      (state.selectedTab === "明日" && matchesTabExtra) ||
      (state.selectedTab === "週末" && matchesTabWeekend);

    return matchesCategory && matchesRegion && selectedTabMatches && matchesQuery;
  });
}

function renderEvents() {
  const filtered = getFilteredEvents();
  resultCount.textContent = `${filtered.length} 個活動`;

  eventGrid.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "沒有符合條件的活動，試試別的關鍵字、區域或分類。";
    eventGrid.appendChild(empty);
    return;
  }

  filtered.forEach((event) => {
    const card = document.createElement("article");
    card.className = "event-card";

    const linkTarget = event.url !== "#" ? "_blank" : "_self";
    const cardLink = event.url !== "#" ? event.url : "#";

    card.innerHTML = `
      <div class="event-cover">
        <span class="event-badge">${event.category}</span>
        <img src="${event.image}" alt="${event.title}" />
      </div>
      <div class="event-body">
        <span class="event-date">${event.date}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-summary">${event.summary}</p>
        <div class="event-meta">${event.location}</div>
        <div class="event-footer">
          <span class="event-tag">${event.category}</span>
          <a class="event-link" href="${cardLink}" target="${linkTarget}" rel="noreferrer">查看詳情</a>
        </div>
      </div>
    `;

    eventGrid.appendChild(card);
  });
}

function syncSelection() {
  const chips = document.querySelectorAll(".chip");
  chips.forEach((chip) => {
    const isActive = chip.textContent.trim() === state.selectedCategory;
    chip.classList.toggle("active", isActive);
  });

  const categoryCards = document.querySelectorAll(".category-card");
  categoryCards.forEach((card) => {
    const isActive = card.dataset.category === state.selectedCategory;
    card.classList.toggle("active", isActive);
  });

  const regionButtons = document.querySelectorAll(".region-btn");
  regionButtons.forEach((btn) => {
    const isActive = btn.dataset.region === state.selectedRegion;
    btn.classList.toggle("active", isActive);
  });

  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach((btn) => {
    const isActive = btn.dataset.tab === state.selectedTab;
    btn.classList.toggle("active", isActive);
  });
}

function render() {
  renderChips();
  renderEvents();
  syncSelection();
}

document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => {
    state.selectedCategory = card.dataset.category;
    render();
  });
});

document.querySelectorAll(".region-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.selectedRegion = btn.dataset.region;
    render();
  });
});

document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    state.selectedTab = btn.dataset.tab;
    render();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim();
  renderEvents();
  syncSelection();
});

loadEvents().then(() => {
  render();
});
