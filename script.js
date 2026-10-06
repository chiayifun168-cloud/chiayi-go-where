const sheetConfig = {
  enabled: true,
  url: "https://script.google.com/macros/s/AKfycbxM6b5b-XuGsWbV96RvpiGrbZ-qaaOOSW2fMehoFcup9ffYt93LSN0cmzDBEbCRarvM/exec"
};
const events = [
  {
    title: "光織影舞 ×《小熊維尼》100週年",
    date: "9/25 - 10/11",
    category: "展覽",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "嘉義年度亮點展覽，結合光影與故事體驗，適合全家一起走進童話世界。",
    url: "https://travel.chiayi.gov.tw/DancingofLightandShadows2026/index.html",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【鑲嵌玻璃手作體驗】在夜間啤酒吧相遇",
    date: "10/3",
    category: "手作",
    location: "嘉義市",
    region: "嘉義市",
    tab: "明日",
    summary: "在夜間啤酒吧體驗玻璃飾品手作與創作氛圍，輕鬆放鬆一晚。",
    url: "https://www.accupass.com/event/2608240930192565590310",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "《奔城・逐光》2026 首席舞集年度舞展",
    date: "10/3",
    category: "舞台",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "年度舞展演出，展現舞台與光影的融合，精彩又充滿張力。",
    url: "https://reurl.cc/YmQbEo",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉義美賣圖鑑｜聽的美賣喔 — Hermit X 二屾 Ershen",
    date: "10/3",
    category: "市集",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "美賣與設計作品結合的創新市集，適合慢慢逛、慢慢買。",
    url: "https://www.accupass.com/event/2608030712173899996600",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "唐美雲歌仔戲團-兒童歌仔戲《收妖日記：愛嚇人的黑嚕嚕》",
    date: "10/3",
    category: "戲劇",
    location: "嘉義市",
    region: "嘉義市",
    tab: "明日",
    summary: "兒童歌仔戲與創意劇場，適合親子共賞，充滿笑聲與驚喜。",
    url: "https://www.facebook.com/share/v/1DJuPhyfi9/",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "民雄-打貓嘉年華",
    date: "10/3",
    category: "嘉年華",
    location: "民雄鄉",
    region: "民雄鄉",
    tab: "熱門",
    summary: "熱鬧的嘉年華活動，適合親子與朋友聚會和城市慶典氛圍。",
    url: "https://www.facebook.com/share/p/19sNXeikhL/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "𝗥𝗔𝗦𝗔・文義復興 → 三宅站",
    date: "10/3",
    category: "文創",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "文化復興與創作空間的文藝活動，帶你走進城市的故事。",
    url: "https://forms.gle/mPutuhHYLHGJbCp68",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "第六屆有事青年節",
    date: "10/3-4",
    category: "青年",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "青年節活動與創作交流，適合喜歡互動與設計的朋友。",
    url: "https://www.facebook.com/share/p/1JtyCEYBGC/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "日本TAMAKKO-ZA和太鼓劇團《龍馬太鼓》",
    date: "10/4",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "明日",
    summary: "和太鼓表演與日式音樂文化體驗，帶來強烈節奏與氛圍。",
    url: "https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=P1DJKBJM",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "UG抵嘉—🅱️級分の夜間遊覽-王彙筑",
    date: "10/9",
    category: "導覽",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "城市夜遊與文化導覽體驗，讓你重新認識嘉義的夜晚。",
    url: "https://forms.gle/dY2FMSkAEjLjWNFg8",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "UG抵嘉—🅱️級分の夜間遊覽-王逸嘉",
    date: "10/10",
    category: "導覽",
    location: "嘉義市",
    region: "嘉義市",
    tab: "明日",
    summary: "文化導覽與夜間城市探索，聚焦在地故事與街角人文。",
    url: "https://forms.gle/dY2FMSkAEjLjWNFg8",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "狂美《璀璨經典百老匯II》交響音樂會",
    date: "10/17",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "交響音樂會，經典百老匯風格演出，適合享受安靜又震撼的夜晚。",
    url: "https://www.opentix.life/event/2062049163975860225",
    image: "https://images.unsplash.com/photo-1501675150688-16a77583013d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【拼貼手作體驗】便攜拼貼徽章鏡",
    date: "10/18",
    category: "手作",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "走讀嘉義與拼貼藝術的體驗活動，輕鬆帶走一份城市靈感。",
    url: "https://www.accupass.com/event/2608210742521642837893",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【工藝走讀】香港拼貼藝術家是怎麼看嘉義的？",
    date: "10/31",
    category: "文化",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "工藝與城市文化的跨域走讀活動，結合文化觀察與創作分享。",
    url: "https://www.accupass.com/event/2608260912401031359939",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉義美賣圖鑑｜喝的美賣喔 — 露室茶坊",
    date: "10/31",
    category: "市集",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "茶飲與創意活動的城市美學體驗，適合一邊逛一邊品味。",
    url: "https://www.accupass.com/event/2608090411442350343980",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "《正義大寶 Jam》2026 嘉義爵士音樂會",
    date: "12/2",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "爵士音樂盛會，適合夜晚散步與音樂賞析，帶來熱鬧節奏。",
    url: "https://www.accupass.com/event/2609201419551900164429",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "大福興宮月老祖廟建廟360週年",
    date: "10/9-10",
    category: "宗教文化",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "祖廟文化與宗教活動，感受嘉義城市文化底蘊與虔誠空間。",
    url: "#",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "樂野產業嘉年華",
    date: "10/10",
    category: "嘉年華",
    location: "竹崎鄉",
    region: "阿里山",
    tab: "明日",
    summary: "地方產業與慶典體驗，熱鬧又充滿地方特色與好吃好玩的空間。",
    url: "https://www.facebook.com/share/p/1F22ZWb8bX/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "諸羅搖滾音樂祭",
    date: "10/10-11",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "搖滾音樂祭，適合青年與樂迷一起參與，熱血奔放。",
    url: "https://www.facebook.com/share/p/1SWMrZnsVn/",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "番路鄉柿子節暨水資源宣導活動",
    date: "10/10-11",
    category: "地方節慶",
    location: "番路鄉",
    region: "番路鄉",
    tab: "週末",
    summary: "柿子節與在地農業文化活動，讓你感受自然與地方的連結。",
    url: "https://www.facebook.com/share/p/1EwuvVopMk/",
    image: "https://images.unsplash.com/photo-1464226184884-fa52ac9e2404?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "那那大師 × 顏訥｜B面故事 • 秘密告白KTV",
    date: "10/17",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "週末",
    summary: "創新型音樂表演與故事式舞台體驗，適合想要不一樣夜晚的人。",
    url: "https://www.facebook.com/share/p/1PYNtwuNNj/",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "115年度現場徵才活動－優職嘉義 幸福就業",
    date: "10/17",
    category: "職涯",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "工作與職涯交流活動，適合求職者一同了解現場機會。",
    url: "https://www.facebook.com/share/p/1CCMRvygFK/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉城新浪音樂節 × 移民節",
    date: "10/17",
    category: "音樂",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "音樂與城市文化融合活動，陪你感受嘉義的城市節奏。",
    url: "https://www.chiayi.gov.tw/News_Content.aspx?n=1165&s=953781",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "山樣子",
    date: "10/24-25",
    category: "文化",
    location: "阿里山",
    region: "阿里山",
    tab: "週末",
    summary: "在地文化與自然景觀結合的活動，適合想走出去的人。",
    url: "#",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "2026出櫃藝術節《舞魂不打烊》戶外派對",
    date: "11/14",
    category: "派對",
    location: "嘉義市",
    region: "嘉義市",
    tab: "熱門",
    summary: "戶外派對與表演藝術活動，適合晚間放鬆與音樂享受。",
    url: "https://www.accupass.com/event/2609231252028441597690",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "阿里山muni音樂季及獨立樂團創作大賞",
    date: "11/14-15",
    category: "音樂",
    location: "阿里山",
    region: "阿里山",
    tab: "週末",
    summary: "音樂季與獨立樂團創作大賞，適合喜歡原創音樂的人。",
    url: "https://www.facebook.com/share/p/1LGCyKtSUu/",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
  }
];

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

render();
