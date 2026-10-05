const events = [
  {
    title: "光織影舞 ×《小熊維尼》100週年",
    date: "9/25-10/11",
    category: "展覽",
    summary: "嘉義年度亮點展覽，結合光影與故事體驗。",
    url: "https://travel.chiayi.gov.tw/DancingofLightandShadows2026/index.html",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【鑲嵌玻璃手作體驗】在夜間啤酒吧相遇─酒瓶老玻璃飾品",
    date: "10/3",
    category: "手作",
    summary: "在夜間啤酒吧體驗玻璃飾品手作與創作氛圍。",
    url: "https://www.accupass.com/event/2608240930192565590310",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "《奔城・逐光》2026 首席舞集年度舞展",
    date: "10/3",
    category: "舞台",
    summary: "年度舞展演出，展現舞台與光影的融合。",
    url: "https://reurl.cc/YmQbEo",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉義美賣圖鑑｜聽的美賣喔 — Hermit X 二屾 Ershen",
    date: "10/3",
    category: "市集",
    summary: "美賣與設計作品結合的創新市集體驗。",
    url: "https://www.accupass.com/event/2608030712173899996600",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "唐美雲歌仔戲團-兒童歌仔戲 《收妖日記：愛嚇人的黑嚕嚕》",
    date: "10/3",
    category: "戲劇",
    summary: "兒童歌仔戲與創意劇場，適合親子共賞。",
    url: "https://www.facebook.com/share/v/1DJuPhyfi9/",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "民雄-打貓嘉年華",
    date: "10/3",
    category: "嘉年華",
    summary: "熱鬧的嘉年華活動，適合親子與朋友聚會。",
    url: "https://www.facebook.com/share/p/19sNXeikhL/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "𝗥𝗔𝗦𝗔・文義復興 → 三宅站",
    date: "10/3",
    category: "文創",
    summary: "文化復興與創作空間的文藝活動。",
    url: "https://forms.gle/mPutuhHYLHGJbCp68",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "第六屆有事青年節",
    date: "10/3-4",
    category: "青年",
    summary: "青年節活動與創作交流。",
    url: "https://www.facebook.com/share/p/1JtyCEYBGC/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "日本TAMAKKO-ZA和太鼓劇團《龍馬太鼓》",
    date: "10/4",
    category: "音樂",
    summary: "和太鼓表演與日式音樂文化體驗。",
    url: "https://ticket.com.tw/application/UTK02/UTK0201_.aspx?PRODUCT_ID=P1DJKBJM",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "UG抵嘉—🅱️級分の夜間遊覽-王彙筑",
    date: "10/9",
    category: "導覽",
    summary: "城市夜遊與文化導覽體驗。",
    url: "https://forms.gle/dY2FMSkAEjLjWNFg8",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "UG抵嘉—🅱️級分の夜間遊覽-王逸嘉",
    date: "10/10",
    category: "導覽",
    summary: "文化導覽與夜間城市探索。",
    url: "https://forms.gle/dY2FMSkAEjLjWNFg8",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "狂美《璀璨經典百老匯II》交響音樂會",
    date: "10/17",
    category: "音樂",
    summary: "交響音樂會，經典百老匯風格演出。",
    url: "https://www.opentix.life/event/2062049163975860225",
    image: "https://images.unsplash.com/photo-1501675150688-16a77583013d?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【拼貼手作體驗】便攜拼貼徽章鏡(走讀嘉義蒐集靈感)",
    date: "10/18",
    category: "手作",
    summary: "走讀嘉義與拼貼藝術的體驗活動。",
    url: "https://www.accupass.com/event/2608210742521642837893",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "【工藝走讀】香港拼貼藝術家是怎麼看嘉義的？",
    date: "10/31",
    category: "文化",
    summary: "工藝與城市文化的跨域走讀活動。",
    url: "https://www.accupass.com/event/2608260912401031359939",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉義美賣圖鑑｜喝的美賣喔 — 露室茶坊",
    date: "10/31",
    category: "市集",
    summary: "茶飲與創意活動的城市美學體驗。",
    url: "https://www.accupass.com/event/2608090411442350343980",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "《正義大寶 Jam》2026 嘉義爵士音樂會",
    date: "12/2",
    category: "音樂",
    summary: "爵士音樂盛會，適合夜晚散步與音樂賞析。",
    url: "https://www.accupass.com/event/2609201419551900164429",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "大福興宮月老祖廟建廟360週年-白沙屯拱天宮媽祖蒞嘉贊境",
    date: "10/9-10",
    category: "宗教文化",
    summary: "祖廟文化與宗教活動，感受嘉義城市文化底蘊。",
    url: "#",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "樂野產業嘉年華",
    date: "10/10",
    category: "嘉年華",
    summary: "地方產業與慶典體驗，熱鬧又充滿地方特色。",
    url: "https://www.facebook.com/share/p/1F22ZWb8bX/",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "諸羅搖滾音樂祭",
    date: "10/10-11",
    category: "音樂",
    summary: "搖滾音樂祭，適合青年與樂迷一起參與。",
    url: "https://www.facebook.com/share/p/1SWMrZnsVn/",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "番路鄉柿子節暨水資源宣導活動",
    date: "10/10-11",
    category: "地方節慶",
    summary: "柿子節與在地農業文化活動。",
    url: "https://www.facebook.com/share/p/1EwuvVopMk/",
    image: "https://images.unsplash.com/photo-1464226184884-fa52ac9e2404?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "那那大師 × 顏訥｜B面故事 • 秘密告白KTV",
    date: "10/17",
    category: "音樂",
    summary: "創新型音樂表演與故事式舞台體驗。",
    url: "https://www.facebook.com/share/p/1PYNtwuNNj/",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "115年度現場徵才活動－優職嘉義 幸福就業",
    date: "10/17",
    category: "職涯",
    summary: "工作與職涯交流活動，適合求職者參加。",
    url: "https://www.facebook.com/share/p/1CCMRvygFK/",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "嘉城新浪音樂節 × 移民節",
    date: "10/17",
    category: "音樂",
    summary: "音樂與城市文化融合活動。",
    url: "https://www.chiayi.gov.tw/News_Content.aspx?n=1165&s=953781",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "山樣子",
    date: "10/24-25",
    category: "文化",
    summary: "在地文化與自然景觀結合的活動。",
    url: "#",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "2026出櫃藝術節《舞魂不打烊》戶外派對",
    date: "11/14",
    category: "派對",
    summary: "戶外派對與表演藝術活動。",
    url: "https://www.accupass.com/event/2609231252028441597690",
    image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "阿里山muni音樂季及獨立樂團創作大賞",
    date: "11/14-15",
    category: "音樂",
    summary: "音樂季與獨立樂團創作大賞。",
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
    chip.className = "chip" + (state.selectedCategory === category ? " active" : "");
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

    const text = `${event.title} ${event.summary} ${event.category}`.toLowerCase();
    const matchesQuery = text.includes(state.query.toLowerCase());

    return matchesCategory && matchesQuery;
  });
}

function renderEvents() {
  const filtered = getFilteredEvents();
  resultCount.textContent = `${filtered.length} 個活動`;

  eventGrid.innerHTML = "";
  filtered.forEach((event) => {
    const card = document.createElement("article");
    card.className = "event-card";

    card.innerHTML = `
      <div class="event-cover">
        <img src="${event.image}" alt="${event.title}" />
      </div>
      <div class="event-body">
        <span class="event-date">${event.date}</span>
        <h3 class="event-title">${event.title}</h3>
        <p class="event-summary">${event.summary}</p>
        <div class="event-meta">
          <span class="event-tag">${event.category}</span>
          <a class="event-link" href="${event.url}" target="_blank" rel="noreferrer">查看詳情</a>
        </div>
      </div>
    `;

    eventGrid.appendChild(card);
  });
}

function render() {
  renderChips();
  renderEvents();
}

searchInput.addEventListener("input", (e) => {
  state.query = e.target.value.trim();
  renderEvents();
});

render();
