const APP_TYPES = [
  "Social Media",
  "E-commerce",
  "Streaming Media",
  "News / Publishing",
  "Finance / Banking",
  "Productivity",
  "Messaging",
  "Health / Fitness",
  "Travel / Booking",
  "Education",
  "Developer Tools",
  "Marketplace",
  "Food Delivery",
  "Maps / Navigation",
  "Admin / Dashboard",
];

const INTENTS = [
  "Onboarding",
  "Browse",
  "Search",
  "Discover",
  "Detail / View",
  "Create",
  "Edit",
  "Interact",
  "Transact",
  "Monitor",
  "Configure",
  "System Feedback",
];

const APP_TYPE_HELPERS = {
  "Social Media": "Feeds, identity, creation, and interaction patterns.",
  "E-commerce":
    "Shopping flows across discovery, product evaluation, and checkout.",
  "Streaming Media":
    "Media browsing, playback, subscriptions, and watch states.",
  "News / Publishing":
    "Reading, discovery, editorial navigation, and publishing flows.",
  "Finance / Banking":
    "Payments, setup, account oversight, and transaction patterns.",
  Productivity:
    "Planning, collaboration, editing, and work management interfaces.",
  Messaging: "Messaging and communication patterns.",
  "Health / Fitness":
    "Tracking, wellness, movement, and personal progress interfaces.",
  "Travel / Booking":
    "Trip planning, booking, itinerary management, and airline flows.",
  Education: "Learning, progress, and instructional flows.",
  "Developer Tools": "Build, configure, inspect, and debug experiences.",
  Marketplace:
    "Supply, demand, and transaction patterns in two-sided products.",
  "Food Delivery":
    "Ordering, account, checkout, and delivery lifecycle patterns.",
  "Maps / Navigation":
    "Wayfinding, route search, map detail, and settings patterns.",
  "Admin / Dashboard": "Monitoring, controls, and operational system surfaces.",
};

const INTENT_HELPERS = {
  Onboarding: "Entry points, account setup, and first-time product guidance.",
  Browse: "Scanning content, inventory, feeds, and collections.",
  Search: "Targeted retrieval, query entry, and results exploration.",
  Discover: "Recommendation surfaces and exploratory pathways.",
  "Detail / View": "Focused item, article, place, or content detail screens.",
  Create: "Creation flows for content, pages, playlists, and outputs.",
  Edit: "Modification, revision, and update interfaces.",
  Interact: "Engagement, collaboration, feedback, and conversation patterns.",
  Transact: "Purchase, payment, booking, and checkout moments.",
  Monitor: "Status, progress, analytics, and ongoing oversight surfaces.",
  Configure: "Preferences, settings, and account/system configuration.",
  "System Feedback": "States that communicate confirmation, errors, or system status.",
};

const FOLDER_TO_APP_TYPE = {
  SocialMedia: "Social Media",
  "E-Commerce": "E-commerce",
  StreamingMedia: "Streaming Media",
  "News-Publishing": "News / Publishing",
  "Finance-Banking": "Finance / Banking",
  Productivity: "Productivity",
  Messaging: "Messaging",
  "Health-Fitness": "Health / Fitness",
  "Travel-Booking": "Travel / Booking",
  Education: "Education",
  "Developer-Tools": "Developer Tools",
  Marketplace: "Marketplace",
  FoodDelivery: "Food Delivery",
  "Maps-Navigation": "Maps / Navigation",
  "Admin-Dashboard": "Admin / Dashboard",
};

const FOLDER_FILE_MAP = {
  "E-Commerce": [
    "Browse_Amazon.PNG",
    "Detail_Shein.PNG",
    "Discover_Shein.PNG",
    "Interact_Amazon.PNG",
    "Monitor_Etsy.jpg",
    "Onboarding_Shopify.PNG",
    "Search_Amazon.PNG",
    "Transact_Shein.jpg",
  ],
  "Finance-Banking": [
    "Configure_Paypal.png",
    "Monitor_Robinhood.png",
    "Onboarding_Venmo.jpg",
    "Transact_Venmo.png",
  ],
  FoodDelivery: [
    "Browse_UberEats.jpg",
    "Configure_DoorDash.PNG",
    "Detail_UberEats.PNG",
    "Edit_DoorDash.PNG",
    "Monitor_UberEats.jpeg",
    "Onboarding_Grubhub.PNG",
    "Transact_Grubhub.PNG",
  ],
  "Health-Fitness": [
    "Discover_AppleHealth.PNG",
    "Edit_AppleHealth.PNG",
    "Monitor_AppleHealth.PNG",
    "Onboarding_Strava.webp",
  ],
  "Maps-Navigation": [
    "Configure_GoogleMaps.PNG",
    "Detail_AppleMaps.jpg",
    "Discover_GoogleMaps.PNG",
    "Edit_GoogleMap.PNG",
    "Search_AppleMaps.jpg",
  ],
  "News-Publishing": [
    "Browse_Medium.PNG",
    "Configure_NewYorkTimes.jpg",
    "Create_Medium.PNG",
    "Detail_NewYorkTime.PNG",
    "Discover_GoogleNews.jpeg",
    "Onboarding_NewYorkTime.PNG",
    "Search_Medium.PNG",
    "SystemFeedback_GoogleNews.webp",
  ],
  Productivity: [
    "Configure_Slack.PNG",
    "Create_Notion.PNG",
    "Discover_Slack.PNG",
    "Edit_Notion.PNG",
    "Interact_Notion.PNG",
    "Monitor_Asana.webp",
    "Onboarding_Duolingo.webp",
    "Search_Sheets.PNG",
    "SystemFeedback_Notion.PNG",
  ],
  SocialMedia: [
    "Browse_Instagram.PNG",
    "Create_Instagram1.PNG",
    "Create_Instagram2.PNG",
    "Interact_X.PNG",
    "Monitor_Linkedin.png",
    "Onboarding_TikTok.PNG",
    "Onboarding_TikTok2.PNG",
    "Search_Instagram.PNG",
    "SystemFeedback_Instagram.PNG",
  ],
  StreamingMedia: [
    "Browse_Netflix.PNG",
    "Create_Spotify.jpg",
    "Detail_Youtube.PNG",
    "Discover_Spotify.PNG",
    "Interact_Youtube.PNG",
    "Monitor_Youtube.avif",
    "Search_Youtube.PNG",
  ],
  "Travel-Booking": [
    "Configure_Delta.PNG",
    "Detail_Delta.jpg",
    "Edit_Southwest.avif",
    "Onboarding_Southwest.jpg",
    "Search_Southwest.PNG",
  ],
};

const STATE = {
  selectedAppType: "All",
  selectedIntent: "All",
  search: "",
  sort: "default",
  modalIndex: -1,
  modalItems: [],
  filtersOpen: false,
  primaryTaxonomy: "appType",
};

const elements = {
  searchInput: document.getElementById("search-input"),
  appTypeChips: document.getElementById("app-type-chips"),
  intentChips: document.getElementById("intent-chips"),
  sortSelect: document.getElementById("sort-select"),
  clearButton: document.getElementById("clear-filters-button"),
  emptyClearButton: document.getElementById("empty-clear-button"),
  sidebarNav: document.getElementById("sidebar-nav"),
  sidebarLabel: document.getElementById("sidebar-label"),
  contentRoot: document.getElementById("content-root"),
  emptyState: document.getElementById("empty-state"),
  stats: document.getElementById("stats"),
  modal: document.getElementById("image-modal"),
  modalImage: document.getElementById("modal-image"),
  modalCloseButton: document.getElementById("modal-close-button"),
  modalPrevButton: document.getElementById("modal-prev-button"),
  modalNextButton: document.getElementById("modal-next-button"),
  filterPanel: document.getElementById("filter-panel"),
  filterToggleButton: document.getElementById("filter-toggle-button"),
  filterToggleIcon: document.getElementById("filter-toggle-icon"),
  filterToggleMeta: document.getElementById("filter-toggle-meta"),
  taxonomyAppTypeButton: document.getElementById("taxonomy-app-type"),
  taxonomyIntentButton: document.getElementById("taxonomy-intent"),
};

const DATA = buildLibraryData();

init();

function init() {
  renderHeaderStats();
  renderFilterChips();
  bindEvents();
  updateFilterPanelUI();
  updateTaxonomyUI();
  render();
}

function buildLibraryData() {
  const items = [];
  let addedAtCounter = 0;

  Object.entries(FOLDER_FILE_MAP).forEach(([folder, files]) => {
    const appType = FOLDER_TO_APP_TYPE[folder];

    files.forEach((fileName) => {
      const item = parseFileToItem(folder, fileName, addedAtCounter);
      if (appType && item) {
        items.push(item);
        addedAtCounter += 1;
      }
    });
  });

  return items;
}

function parseFileToItem(folder, fileName, addedAt) {
  const match = fileName.match(/^([A-Za-z]+)_([A-Za-z0-9]+)\.(.+)$/);

  if (!match) return null;

  const [, rawIntent, rawAppName] = match;
  const appType = FOLDER_TO_APP_TYPE[folder];
  const intent = normalizeIntent(rawIntent);
  const appName = normalizeAppName(rawAppName);
  const image = `apptypesimages/${folder}/${fileName}`;

  return {
    id: `${folder}-${fileName}`.replace(/[^\w-]/g, "-").toLowerCase(),
    appName,
    appType,
    intent,
    title: buildScreenTitle(intent, appName, fileName),
    image,
    sourceUrl: "",
    platform: inferPlatform(appName, appType),
    tags: buildTags(appName, appType, intent),
    addedAt,
    alt: `${appName} ${intent} screenshot in ${appType}`,
  };
}

function normalizeIntent(rawIntent) {
  const intentMap = {
    Onboarding: "Onboarding",
    Browse: "Browse",
    Search: "Search",
    Discover: "Discover",
    Detail: "Detail / View",
    Create: "Create",
    Edit: "Edit",
    Interact: "Interact",
    Transact: "Transact",
    Monitor: "Monitor",
    Configure: "Configure",
    SystemFeedback: "System Feedback",
  };

  return intentMap[rawIntent] || rawIntent;
}

function normalizeAppName(rawAppName) {
  const appNameMap = {
    Amazon: "Amazon",
    Shein: "SHEIN",
    Etsy: "Etsy",
    Shopify: "Shopify",
    Paypal: "PayPal",
    Robinhood: "Robinhood",
    Venmo: "Venmo",
    UberEats: "Uber Eats",
    DoorDash: "DoorDash",
    Grubhub: "Grubhub",
    AppleHealth: "Apple Health",
    Strava: "Strava",
    GoogleMaps: "Google Maps",
    GoogleMap: "Google Maps",
    AppleMaps: "Apple Maps",
    Medium: "Medium",
    NewYorkTimes: "New York Times",
    NewYorkTime: "New York Times",
    GoogleNews: "Google News",
    Notion: "Notion",
    Slack: "Slack",
    Asana: "Asana",
    Duolingo: "Duolingo",
    Sheets: "Google Sheets",
    Instagram1: "Instagram",
    Instagram2: "Instagram",
    Instagram: "Instagram",
    TikTok: "TikTok",
    TikTok2: "TikTok",
    X: "X",
    Linkedin: "LinkedIn",
    Netflix: "Netflix",
    Spotify: "Spotify",
    Youtube: "YouTube",
    Delta: "Delta",
    Southwest: "Southwest",
  };

  return appNameMap[rawAppName] || rawAppName;
}

function buildScreenTitle(intent, appName, fileName) {
  const titleMap = {
    "Browse-Amazon": "Amazon browsing grid",
    "Detail-SHEIN": "SHEIN product detail",
    "Discover-SHEIN": "SHEIN home discovery feed",
    "Interact-Amazon": "Amazon reviews and interaction",
    "Monitor-Etsy": "Etsy order monitoring",
    "Onboarding-Shopify": "Shopify onboarding setup",
    "Search-Amazon": "Amazon search results",
    "Transact-SHEIN": "SHEIN checkout flow",

    "Configure-PayPal": "PayPal account configuration",
    "Monitor-Robinhood": "Robinhood account monitoring",
    "Onboarding-Venmo": "Venmo onboarding",
    "Transact-Venmo": "Venmo payment flow",

    "Browse-Uber Eats": "Uber Eats browse feed",
    "Configure-DoorDash": "DoorDash settings",
    "Detail-Uber Eats": "Uber Eats restaurant detail",
    "Edit-DoorDash": "DoorDash order editing",
    "Monitor-Uber Eats": "Uber Eats order tracking",
    "Onboarding-Grubhub": "Grubhub onboarding",
    "Transact-Grubhub": "Grubhub checkout",

    "Discover-Apple Health": "Apple Health dashboard discovery",
    "Edit-Apple Health": "Apple Health editing flow",
    "Monitor-Apple Health": "Apple Health monitoring",
    "Onboarding-Strava": "Strava onboarding",

    "Configure-Google Maps": "Google Maps configuration",
    "Detail-Apple Maps": "Apple Maps location detail",
    "Discover-Google Maps": "Google Maps discovery",
    "Edit-Google Maps": "Google Maps route editing",
    "Search-Apple Maps": "Apple Maps search",

    "Browse-Medium": "Medium reading browse",
    "Configure-New York Times": "New York Times preferences",
    "Create-Medium": "Medium article creation",
    "Detail-New York Times": "New York Times article detail",
    "Discover-Google News": "Google News discovery feed",
    "Onboarding-New York Times": "New York Times onboarding",
    "Search-Medium": "Medium search flow",
    "System Feedback-Google News": "Google News feedback state",

    "Configure-Slack": "Slack configuration",
    "Create-Notion": "Notion page creation",
    "Discover-Slack": "Slack discovery view",
    "Edit-Notion": "Notion editing",
    "Interact-Notion": "Notion collaboration interaction",
    "Monitor-Asana": "Asana project monitoring",
    "Onboarding-Duolingo": "Duolingo onboarding",
    "Search-Google Sheets": "Google Sheets search",
    "System Feedback-Notion": "Notion feedback state",

    "Browse-Instagram": "Instagram feed browse",
    "Create-Instagram": "Instagram creation flow",
    "Interact-X": "X interaction pattern",
    "Monitor-LinkedIn": "LinkedIn monitoring surface",
    "Onboarding-TikTok": "TikTok onboarding",
    "Search-Instagram": "Instagram search",
    "System Feedback-Instagram": "Instagram system feedback",

    "Browse-Netflix": "Netflix browse screen",
    "Create-Spotify": "Spotify playlist creation",
    "Detail-YouTube": "YouTube video detail",
    "Discover-Spotify": "Spotify discovery",
    "Interact-YouTube": "YouTube engagement view",
    "Monitor-YouTube": "YouTube playback monitoring",
    "Search-YouTube": "YouTube search",

    "Configure-Delta": "Delta settings",
    "Detail-Delta": "Delta flight detail",
    "Edit-Southwest": "Southwest trip editing",
    "Onboarding-Southwest": "Southwest onboarding",
    "Search-Southwest": "Southwest flight search",
  };

  const normalizedAppName =
    appName === "Instagram" && fileName.includes("2") ? "Instagram" : appName;
  const key = `${intent}-${normalizedAppName}`;

  return titleMap[key] || `${appName} ${intent} screen`;
}

function inferPlatform(appName, appType) {
  const webApps = new Set([
    "Amazon",
    "SHEIN",
    "Etsy",
    "Shopify",
    "PayPal",
    "Robinhood",
    "Medium",
    "New York Times",
    "Google News",
    "Notion",
    "Slack",
    "Asana",
    "Google Sheets",
    "Netflix",
    "YouTube",
  ]);

  const mobileApps = new Set([
    "TikTok",
    "Instagram",
    "X",
    "LinkedIn",
    "Amazon",
    "SHEIN",
    "Etsy",
    "Shopify",
    "PayPal",
    "Robinhood",
    "Venmo",
    "Uber Eats",
    "DoorDash",
    "Grubhub",
    "Apple Health",
    "Strava",
    "Google Maps",
    "Apple Maps",
    "Google News",
    "Spotify",
    "Delta",
    "Southwest",
    "Duolingo",
  ]);

  if (webApps.has(appName)) return "Web";
  if (mobileApps.has(appName)) return "iOS";
  if (appType === "Admin / Dashboard" || appType === "Developer Tools") {
    return "Web";
  }
  return "";
}

function buildTags(appName, appType, intent) {
  return [
    appName.toLowerCase(),
    appType.toLowerCase(),
    intent.toLowerCase(),
    "product pattern",
    "reference",
  ];
}

function renderHeaderStats() {
  const appTypesWithContent = new Set(DATA.map((item) => item.appType)).size;
  const intentsWithContent = new Set(DATA.map((item) => item.intent)).size;

  elements.stats.innerHTML = `
    <span class="stat-badge">${DATA.length} screenshots</span>
    <span class="stat-badge">${appTypesWithContent} app types</span>
    <span class="stat-badge">${intentsWithContent} intents</span>
  `;
}

function renderFilterChips() {
  elements.appTypeChips.innerHTML = buildChipMarkup(
    ["All", ...APP_TYPES],
    STATE.selectedAppType,
    "appType",
  );
  elements.intentChips.innerHTML = buildChipMarkup(
    ["All", ...INTENTS],
    STATE.selectedIntent,
    "intent",
  );
  updateFilterSummary();
}

function buildChipMarkup(values, activeValue, kind) {
  return values
    .map((value) => {
      const isActive = value === activeValue;
      const safeValue = escapeHtml(value);
      return `
        <button
          type="button"
          class="chip ${isActive ? "active" : ""}"
          data-chip-kind="${kind}"
          data-chip-value="${safeValue}"
          aria-pressed="${isActive ? "true" : "false"}"
        >
          ${safeValue}
        </button>
      `;
    })
    .join("");
}

function bindEvents() {
  elements.searchInput.addEventListener("input", (event) => {
    STATE.search = event.target.value.trim();
    render();
  });

  elements.sortSelect.addEventListener("change", (event) => {
    STATE.sort = event.target.value;
    render();
  });

  elements.filterToggleButton.addEventListener("click", () => {
    STATE.filtersOpen = !STATE.filtersOpen;
    updateFilterPanelUI();
  });

  elements.appTypeChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-chip-kind='appType']");
    if (!chip) return;
    STATE.selectedAppType = chip.dataset.chipValue;
    render();
  });

  elements.intentChips.addEventListener("click", (event) => {
    const chip = event.target.closest("[data-chip-kind='intent']");
    if (!chip) return;
    STATE.selectedIntent = chip.dataset.chipValue;
    render();
  });

  elements.taxonomyAppTypeButton.addEventListener("click", () => {
    if (STATE.primaryTaxonomy === "appType") return;
    STATE.primaryTaxonomy = "appType";
    updateTaxonomyUI();
    render();
  });

  elements.taxonomyIntentButton.addEventListener("click", () => {
    if (STATE.primaryTaxonomy === "intent") return;
    STATE.primaryTaxonomy = "intent";
    updateTaxonomyUI();
    render();
  });

  elements.clearButton.addEventListener("click", clearFilters);
  elements.emptyClearButton.addEventListener("click", clearFilters);

  elements.contentRoot.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-open-modal-index]");
    if (!trigger) return;

    const index = Number(trigger.dataset.openModalIndex);
    if (Number.isNaN(index)) return;

    openModal(index);
  });

  elements.sidebarNav.addEventListener("click", (event) => {
    const link = event.target.closest("[data-sidebar-target]");
    if (!link) return;
    const id = link.dataset.sidebarTarget;
    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.modalCloseButton.addEventListener("click", closeModal);
  elements.modalPrevButton.addEventListener("click", () => stepModal(-1));
  elements.modalNextButton.addEventListener("click", () => stepModal(1));

  elements.modal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-modal='true']")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", handleGlobalKeydown);
  document.addEventListener("scroll", handleScroll, { passive: true });
}

function updateFilterPanelUI() {
  const isOpen = STATE.filtersOpen;
  elements.filterPanel.classList.toggle("hidden", !isOpen);
  elements.filterToggleButton.setAttribute("aria-expanded", String(isOpen));
  elements.filterToggleIcon.textContent = isOpen ? "−" : "+";
}

function updateFilterSummary() {
  const appTypeLabel =
    STATE.selectedAppType === "All" ? "All app types" : STATE.selectedAppType;
  const intentLabel =
    STATE.selectedIntent === "All" ? "All intents" : STATE.selectedIntent;
  elements.filterToggleMeta.textContent = `${appTypeLabel} • ${intentLabel}`;
}

function updateTaxonomyUI() {
  const isAppType = STATE.primaryTaxonomy === "appType";

  elements.taxonomyAppTypeButton.classList.toggle("active", isAppType);
  elements.taxonomyIntentButton.classList.toggle("active", !isAppType);

  elements.taxonomyAppTypeButton.setAttribute(
    "aria-selected",
    String(isAppType),
  );
  elements.taxonomyIntentButton.setAttribute(
    "aria-selected",
    String(!isAppType),
  );

  elements.sidebarLabel.textContent = isAppType ? "App Types" : "Intents";
}

function clearFilters() {
  STATE.selectedAppType = "All";
  STATE.selectedIntent = "All";
  STATE.search = "";
  STATE.sort = "default";
  STATE.modalItems = [];
  STATE.modalIndex = -1;

  elements.searchInput.value = "";
  elements.sortSelect.value = "default";

  render();
}

function render() {
  renderFilterChips();

  const filtered = getFilteredItems();
  const sections = buildSections(filtered);

  STATE.modalItems = flattenSectionItems(sections);
  STATE.modalIndex = STATE.modalItems.length
    ? Math.min(STATE.modalIndex, STATE.modalItems.length - 1)
    : -1;

  renderSidebar(sections);
  renderContent(sections);
  toggleEmptyState(filtered.length === 0);

  updateSidebarOnScroll();
}

function getFilteredItems() {
  const query = STATE.search.toLowerCase();

  let items = DATA.filter((item) => {
    const appTypeMatch =
      STATE.selectedAppType === "All" || item.appType === STATE.selectedAppType;

    const intentMatch =
      STATE.selectedIntent === "All" || item.intent === STATE.selectedIntent;

    const searchMatch =
      !query ||
      [
        item.appName,
        item.appType,
        item.intent,
        item.title,
        item.platform,
        ...(item.tags || []),
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(query);

    return appTypeMatch && intentMatch && searchMatch;
  });

  items = sortItems(items, STATE.sort);

  return items;
}

function sortItems(items, sortMode) {
  const sorted = [...items];

  if (sortMode === "alphabetical") {
    sorted.sort((a, b) => {
      const appTypeCompare =
        APP_TYPES.indexOf(a.appType) - APP_TYPES.indexOf(b.appType);
      if (appTypeCompare !== 0) return appTypeCompare;
      const intentCompare =
        INTENTS.indexOf(a.intent) - INTENTS.indexOf(b.intent);
      if (intentCompare !== 0) return intentCompare;
      return a.appName.localeCompare(b.appName);
    });
  } else if (sortMode === "most-screenshots") {
    const countByAppType = sorted.reduce((acc, item) => {
      acc[item.appType] = (acc[item.appType] || 0) + 1;
      return acc;
    }, {});

    sorted.sort((a, b) => {
      const byCount =
        (countByAppType[b.appType] || 0) - (countByAppType[a.appType] || 0);
      if (byCount !== 0) return byCount;
      const appTypeCompare =
        APP_TYPES.indexOf(a.appType) - APP_TYPES.indexOf(b.appType);
      if (appTypeCompare !== 0) return appTypeCompare;
      const intentCompare =
        INTENTS.indexOf(a.intent) - INTENTS.indexOf(b.intent);
      if (intentCompare !== 0) return intentCompare;
      return a.appName.localeCompare(b.appName);
    });
  } else if (sortMode === "recent") {
    sorted.sort((a, b) => b.addedAt - a.addedAt);
  } else {
    sorted.sort((a, b) => {
      const appTypeCompare =
        APP_TYPES.indexOf(a.appType) - APP_TYPES.indexOf(b.appType);
      if (appTypeCompare !== 0) return appTypeCompare;
      const intentCompare =
        INTENTS.indexOf(a.intent) - INTENTS.indexOf(b.intent);
      if (intentCompare !== 0) return intentCompare;
      return a.addedAt - b.addedAt;
    });
  }

  return sorted;
}

function buildSections(items) {
  return STATE.primaryTaxonomy === "appType"
    ? buildAppTypeSections(items)
    : buildIntentSections(items);
}

function buildAppTypeSections(items) {
  const sections = [];

  APP_TYPES.forEach((appType) => {
    const sectionItems = items.filter((item) => item.appType === appType);
    if (!sectionItems.length) return;

    const subgroups = INTENTS.map((intent) => ({
      label: intent,
      items: sectionItems.filter((item) => item.intent === intent),
    })).filter((group) => group.items.length);

    sections.push({
      id: getSectionId("appType", appType),
      label: appType,
      helper: APP_TYPE_HELPERS[appType] || "",
      count: sectionItems.length,
      metaCount: subgroups.length,
      metaLabel: "intent",
      subgroups,
    });
  });

  return sections;
}

function buildIntentSections(items) {
  const sections = [];

  INTENTS.forEach((intent) => {
    const sectionItems = items.filter((item) => item.intent === intent);
    if (!sectionItems.length) return;

    const subgroups = APP_TYPES.map((appType) => ({
      label: appType,
      items: sectionItems.filter((item) => item.appType === appType),
    })).filter((group) => group.items.length);

    sections.push({
      id: getSectionId("intent", intent),
      label: intent,
      helper: INTENT_HELPERS[intent] || "",
      count: sectionItems.length,
      metaCount: subgroups.length,
      metaLabel: "app type",
      subgroups,
    });
  });

  return sections;
}

function flattenSectionItems(sections) {
  const flat = [];

  sections.forEach((section) => {
    section.subgroups.forEach((group) => {
      flat.push(...group.items);
    });
  });

  return flat;
}

function renderSidebar(sections) {
  elements.sidebarNav.innerHTML = sections
    .map((section, index) => {
      return `
        <a
          href="#${section.id}"
          class="sidebar-link ${index === 0 ? "active" : ""}"
          data-sidebar-target="${section.id}"
        >
          ${escapeHtml(section.label)}
        </a>
      `;
    })
    .join("");
}

function renderContent(sections) {
  if (!sections.length) {
    elements.contentRoot.innerHTML = "";
    return;
  }

  let html = "";

  sections.forEach((section) => {
    html += `
      <section class="app-section" id="${section.id}" data-section-id="${section.id}">
        <div class="app-section-header">
          <div>
            <p class="app-section-kicker">${section.count} screenshot${
              section.count === 1 ? "" : "s"
            }</p>
            <h2>${escapeHtml(section.label)}</h2>
            <p class="app-section-description">${escapeHtml(section.helper)}</p>
          </div>
          <div class="app-section-stats">
            <span>${section.metaCount} ${section.metaLabel}${
              section.metaCount === 1 ? "" : "s"
            }</span>
          </div>
        </div>
        <div class="intent-groups">
          ${section.subgroups.map((group) => renderSubgroup(group)).join("")}
        </div>
      </section>
    `;
  });

  elements.contentRoot.innerHTML = html;
}

function renderSubgroup(group) {
  const firstIndex = STATE.modalItems.findIndex(
    (item) => item.id === group.items[0].id,
  );

  return `
    <section class="intent-group">
      <div class="intent-group-header">
        <div>
          <h3>${escapeHtml(group.label)}</h3>
        </div>
        <p class="intent-group-count">${group.items.length} screen${
          group.items.length === 1 ? "" : "s"
        }</p>
      </div>

      <div class="card-grid">
        ${group.items
          .map((item, index) =>
            renderCard(item, firstIndex === -1 ? index : firstIndex + index),
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCard(item, modalIndex) {
  const tagMarkup = item.tags
    .slice(0, 3)
    .map((tag) => `<span class="card-tag">${escapeHtml(tag)}</span>`)
    .join("");

  return `
    <article class="shot-card">
      <button
        type="button"
        class="shot-trigger"
        data-open-modal-index="${modalIndex}"
        aria-label="Open ${escapeHtml(item.title)}"
      >
        <div class="shot-image-wrap">
          <img src="${escapeAttribute(item.image)}" alt="${escapeAttribute(
            item.alt,
          )}" loading="lazy" />
        </div>

        <div class="shot-card-body">
          <div class="shot-card-topline">
            <span class="shot-app-name">${escapeHtml(item.appName)}</span>
            ${
              item.platform
                ? `<span class="shot-platform">${escapeHtml(item.platform)}</span>`
                : ""
            }
          </div>

          <h4 class="shot-title">${escapeHtml(item.title)}</h4>

          <p class="shot-meta">
            <span>${escapeHtml(item.intent)}</span>
            <span aria-hidden="true">•</span>
            <span>${escapeHtml(item.appType)}</span>
          </p>

          <div class="shot-tags">${tagMarkup}</div>
        </div>
      </button>
    </article>
  `;
}

function toggleEmptyState(isEmpty) {
  elements.emptyState.classList.toggle("hidden", !isEmpty);
}

function getSectionId(mode, value) {
  return `section-${mode}-${value.toLowerCase().replace(/[^\w]+/g, "-")}`;
}

function handleScroll() {
  updateSidebarOnScroll();
}

function updateSidebarOnScroll() {
  const sectionLinks = [
    ...elements.sidebarNav.querySelectorAll("[data-sidebar-target]"),
  ];
  if (!sectionLinks.length) return;

  const sections = sectionLinks
    .map((link) => {
      const id = link.dataset.sidebarTarget;
      return document.getElementById(id);
    })
    .filter(Boolean);

  const headerOffset = 160;
  let activeId = sections[0]?.id || "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top - headerOffset <= 0) {
      activeId = section.id;
    }
  });

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.sidebarTarget === activeId);
  });
}

function openModal(index) {
  if (!STATE.modalItems.length) return;

  STATE.modalIndex = Math.max(0, Math.min(index, STATE.modalItems.length - 1));
  updateModal();
  elements.modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  elements.modalCloseButton.focus();
}

function closeModal() {
  elements.modal.classList.add("hidden");
  document.body.style.overflow = "";
}

function stepModal(direction) {
  if (!STATE.modalItems.length) return;

  STATE.modalIndex =
    (STATE.modalIndex + direction + STATE.modalItems.length) %
    STATE.modalItems.length;
  updateModal();
}

function updateModal() {
  const item = STATE.modalItems[STATE.modalIndex];
  if (!item) return;

  elements.modalImage.src = item.image;
  elements.modalImage.alt = item.alt;
}

function handleGlobalKeydown(event) {
  const modalOpen = !elements.modal.classList.contains("hidden");

  if (modalOpen) {
    if (event.key === "Escape") {
      closeModal();
      return;
    }

    if (event.key === "ArrowLeft") {
      stepModal(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      stepModal(1);
      return;
    }

    if (event.key === "Tab") {
      trapModalFocus(event);
    }
  }
}

function trapModalFocus(event) {
  const focusable = elements.modal.querySelectorAll(
    'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
  );

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}
