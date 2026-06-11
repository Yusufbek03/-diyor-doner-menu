var TG_BOT_TOKEN = "8797441270:AAGyJ8CIxeHJ-CO1DAerQGF_BKfcg-TfSUg";
var TG_CHAT_ID = "8817975742";

var MENU = [
  {cat:"Doner-house", icon:"\uD83E\uDD5A", items:[
    {name:"LAVASH STANDARD", detail:null, price:28000, tag:"mashhur"},
    {name:"LAVASH (ACHCHIQ)", detail:null, price:30000},
    {name:"LAVASH SIRLI", detail:null, price:32000},
    {name:"TANDIR LAVASH", detail:null, price:35000},
    {name:"LAVASH MAX", detail:null, price:35000, tag:"yangi"},
    {name:"DONER", detail:null, price:27000, tag:"mashhur"},
    {name:"HOT-DOG", detail:null, price:10000},
    {name:"HOT-DOG 2X", detail:null, price:13000},
    {name:"HOT-DOG CANADA", detail:null, price:15000},
    {name:"HOT-DOG CANADA 2X", detail:null, price:18000},
    {name:"HOT-DOG CHICKEN", detail:null, price:17000},
    {name:"HOT-DOG GO\u2019SHTLI", detail:null, price:18000},
    {name:"KFC (ACHCHIQ)", detail:"250 gr", price:35000, tag:"mashhur"},
    {name:"KFC (FILE)", detail:"120 gr", price:20000},
    {name:"KFC (FILE)", detail:"180 gr", price:30000},
    {name:"GAMBURGER", detail:null, price:25000},
    {name:"CHIZBURGER", detail:null, price:28000},
    {name:"FRI", detail:null, price:15000},
    {name:"XALAPENO", detail:null, price:2000},
    {name:"BULOCHKA", detail:null, price:2000},
    {name:"SIR", detail:null, price:4000},
    {name:"CHESNOCHNIY (OQ)", detail:null, price:3000},
    {name:"TOMATNIY (QIZIL)", detail:null, price:3000},
    {name:"SIRNIY SOUS", detail:null, price:4000}
  ]},
  {cat:"Pizza", icon:"\uD83C\uDF55", items:[
    {name:"MARGARITA", detail:"25 sm", price:45000, tag:"mashhur"},
    {name:"MARGARITA", detail:"35 sm", price:60000},
    {name:"TOVUQLI", detail:"25 sm", price:65000},
    {name:"TOVUQLI", detail:"35 sm", price:75000},
    {name:"GO\u2019SHTLI", detail:"25 sm", price:65000},
    {name:"GO\u2019SHTLI", detail:"35 sm", price:95000},
    {name:"QO\u2019ZIQORINLI", detail:"25 sm", price:65000},
    {name:"QO\u2019ZIQORINLI", detail:"35 sm", price:75000},
    {name:"PEPERONI", detail:"25 sm", price:65000, tag:"yangi"},
    {name:"PEPERONI", detail:"35 sm", price:75000},
    {name:"ASSORTI", detail:"25 sm", price:70000},
    {name:"ASSORTI", detail:"35 sm", price:99000}
  ]},
  {cat:"Milkshake", icon:"\uD83E\uDD64", items:[
    {name:"MILKSHAKE", detail:"330 ml", price:15000},
    {name:"MILKSHAKE", detail:"400 ml", price:18000},
    {name:"MILKSHAKE BANAN", detail:"330 ml", price:18000},
    {name:"MILKSHAKE BANAN", detail:"400 ml", price:23000},
    {name:"MILKSHAKE KIWI", detail:"330 ml", price:18000},
    {name:"MILKSHAKE KIWI", detail:"400 ml", price:23000},
    {name:"MILKSHAKE SNIKERS", detail:"330 ml", price:20000, tag:"mashhur"},
    {name:"MILKSHAKE SNIKERS", detail:"400 ml", price:25000},
    {name:"MILKSHAKE BOUNTY", detail:"330 ml", price:20000},
    {name:"MILKSHAKE BOUNTY", detail:"400 ml", price:25000},
    {name:"MILKSHAKE OREO", detail:"330 ml", price:20000},
    {name:"MILKSHAKE OREO", detail:"400 ml", price:25000}
  ]},
  {cat:"Cocktail", icon:"\uD83C\uDF79", items:[
    {name:"COCKTAIL MONIN", detail:"300 ml", price:20000},
    {name:"COCKTAIL MONIN", detail:"400 ml", price:25000}
  ]},
  {cat:"Coffee", icon:"\u2615", items:[
    {name:"ESPRESSO", detail:null, price:13000},
    {name:"AMERICANO", detail:null, price:15000},
    {name:"FLAT WHITE", detail:null, price:20000},
    {name:"LATTE", detail:null, price:20000},
    {name:"CAPPUCCINO", detail:null, price:20000},
    {name:"MOCCACINO", detail:null, price:25000},
    {name:"MATCHA LATTE", detail:null, price:20000, tag:"yangi"}
  ]},
  {cat:"Ice Coffee", icon:"\uD83E\uDDCA", items:[
    {name:"ICE AMERICANO", detail:null, price:15000},
    {name:"ICE LATTE", detail:null, price:20000},
    {name:"ICE CAPPUCCINO", detail:null, price:20000},
    {name:"ICE MATCHA LATTE", detail:null, price:20000}
  ]},
  {cat:"Fresh", icon:"\uD83C\uDF4A", items:[
    {name:"APELSIN", detail:"300 ml", price:30000, tag:"mashhur"},
    {name:"APELSIN", detail:"400 ml", price:40000},
    {name:"OLMA", detail:"300 ml", price:20000},
    {name:"OLMA", detail:"400 ml", price:25000},
    {name:"SABZI", detail:"300 ml", price:10000},
    {name:"SABZI", detail:"400 ml", price:12000},
    {name:"LAVLAGI", detail:"300 ml", price:10000},
    {name:"LAVLAGI", detail:"400 ml", price:15000},
    {name:"OLMA + LAVLAGI", detail:"300 ml", price:20000},
    {name:"OLMA + LAVLAGI", detail:"400 ml", price:25000},
    {name:"APELSIN + SABZI", detail:"300 ml", price:20000},
    {name:"APELSIN + SABZI", detail:"400 ml", price:30000},
    {name:"APELSIN + OLMA", detail:"300 ml", price:25000},
    {name:"APELSIN + OLMA", detail:"400 ml", price:35000},
    {name:"APELSIN + OLMA + SABZI", detail:"300 ml", price:25000},
    {name:"APELSIN + OLMA + SABZI", detail:"400 ml", price:30000},
    {name:"APELSIN + SABZI + LAVLAGI", detail:"300 ml", price:20000},
    {name:"APELSIN + SABZI + LAVLAGI", detail:"400 ml", price:30000}
  ]},
  {cat:"Smuzi", icon:"\uD83E\uDD5D", items:[
    {name:"OLMA + BANAN", detail:"300 ml", price:15000},
    {name:"BANAN + QULUPNAY", detail:"300 ml", price:20000},
    {name:"BANAN + TVOROG + OVSYANKA + SUT", detail:"300 ml", price:20000}
  ]},
  {cat:"Detoks", icon:"\uD83C\uDF3F", items:[
    {name:"OLMA + BODRING + SELDEREY + LIMON + IMBIR", detail:"300 ml", price:25000},
    {name:"OLMA + KIWI + ISMALOQ", detail:"300 ml", price:20000},
    {name:"APELSIN + SELDEREY + LIMON + IMBIR", detail:"300 ml", price:30000}
  ]}
];

var cart = {};
var itemIdMap = {};
var currentSort = "default";
var searchQuery = "";

// --- LOCALSTORAGE ---
function saveCart() {
  try { localStorage.setItem("diyor_cart", JSON.stringify(cart)); } catch(e) {}
}
function loadCart() {
  try {
    var saved = localStorage.getItem("diyor_cart");
    if (saved) cart = JSON.parse(saved);
  } catch(e) { cart = {}; }
}

// --- THEME ---
function initTheme() {
  var saved = localStorage.getItem("diyor_theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-icon").textContent = "\uD83C\uDF19";
  }
}
function toggleTheme() {
  var isDark = document.documentElement.getAttribute("data-theme") === "dark";
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    document.getElementById("theme-icon").textContent = "\u2600\uFE0F";
    localStorage.setItem("diyor_theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("theme-icon").textContent = "\uD83C\uDF19";
    localStorage.setItem("diyor_theme", "dark");
  }
}

// --- HELPERS ---
function makeId(cat, name, detail) {
  return cat + "||" + name + "||" + (detail || "");
}
function escId(id) {
  return id.replace(/[^a-zA-Z0-9]/g, "_");
}
function fmt(n) {
  return n.toLocaleString("ru-RU") + " so\u02BBm";
}

// --- SEARCH ---
function onSearch() {
  searchQuery = document.getElementById("search-input").value.toLowerCase().trim();
  var clearBtn = document.getElementById("search-clear");
  if (searchQuery.length > 0) {
    clearBtn.classList.add("visible");
  } else {
    clearBtn.classList.remove("visible");
  }
  rebuildMenu();
}
function clearSearch() {
  document.getElementById("search-input").value = "";
  searchQuery = "";
  document.getElementById("search-clear").classList.remove("visible");
  rebuildMenu();
}

// --- SORT ---
function setSort(mode) {
  currentSort = mode;
  document.querySelectorAll(".sort-btn").forEach(function(b) { b.classList.remove("active"); });
  document.getElementById("sort-" + mode).classList.add("active");
  rebuildMenu();
}

// --- BUILD MENU ---
function buildMenu() {
  var nav = document.getElementById("cat-nav");
  var main = document.getElementById("menu-main");

  nav.innerHTML = "";
  main.innerHTML = "";

  MENU.forEach(function(section, si) {
    var items = section.items.slice();

    if (searchQuery) {
      items = items.filter(function(item) {
        return item.name.toLowerCase().indexOf(searchQuery) !== -1 ||
               (item.detail && item.detail.toLowerCase().indexOf(searchQuery) !== -1);
      });
    }

    if (currentSort === "asc") {
      items.sort(function(a, b) { return a.price - b.price; });
    } else if (currentSort === "desc") {
      items.sort(function(a, b) { return b.price - a.price; });
    }

    if (items.length === 0 && searchQuery) return;

    var pill = document.createElement("button");
    pill.className = "cat-pill" + (si === 0 ? " active" : "");
    pill.textContent = section.icon + " " + section.cat;
    pill.setAttribute("data-idx", si);
    pill.addEventListener("click", function() {
      document.querySelectorAll(".cat-pill").forEach(function(p) { p.classList.remove("active"); });
      pill.classList.add("active");
      var target = document.getElementById("sec-" + si);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    nav.appendChild(pill);

    var sec = document.createElement("div");
    sec.className = "category-section";
    sec.id = "sec-" + si;

    var heading = document.createElement("div");
    heading.className = "cat-heading";
    heading.innerHTML = '<span class="cat-icon">' + section.icon + '</span><h2>' + section.cat + '</h2><span class="cat-count">' + items.length + '</span>';
    sec.appendChild(heading);

    var grid = document.createElement("div");
    grid.className = "items-grid";

    items.forEach(function(item, idx) {
      var id = makeId(section.cat, item.name, item.detail);
      itemIdMap[id] = item;
      var safeId = escId(id);

      var card = document.createElement("div");
      card.className = "item-card";
      card.id = "card-" + safeId;
      card.style.animationDelay = (idx * 0.03) + "s";

      var info = document.createElement("div");
      info.className = "item-info";
      var nameEl = document.createElement("div");
      nameEl.className = "item-name";
      nameEl.textContent = item.name;
      info.appendChild(nameEl);
      if (item.detail) {
        var detEl = document.createElement("div");
        detEl.className = "item-detail";
        detEl.textContent = item.detail;
        info.appendChild(detEl);
      }
      if (item.tag) {
        var badgeEl = document.createElement("span");
        badgeEl.className = "item-badge " + item.tag;
        badgeEl.textContent = item.tag === "mashhur" ? "\uD83D\uDD25 Mashhur" : "\uD83C\uDD95 Yangi";
        info.appendChild(badgeEl);
      }

      var right = document.createElement("div");
      right.className = "item-right";

      var priceEl = document.createElement("div");
      priceEl.className = "item-price";
      priceEl.textContent = fmt(item.price);
      right.appendChild(priceEl);

      var ctrl = document.createElement("div");
      ctrl.id = "ctrl-" + safeId;

      var addBtn = document.createElement("button");
      addBtn.className = "add-btn";
      addBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Qo\u2019shish';
      addBtn.addEventListener("click", (function(itemId) {
        return function() { addItem(itemId); };
      })(id));
      ctrl.appendChild(addBtn);

      right.appendChild(ctrl);
      card.appendChild(info);
      card.appendChild(right);
      grid.appendChild(card);
    });

    if (items.length === 0 && !searchQuery) {
      var emptyCard = document.createElement("div");
      emptyCard.className = "item-card";
      emptyCard.innerHTML = '<div class="item-info"><div class="item-name" style="color:var(--text3)">Bu kategoriyada taomlar yo\u02BBq</div></div>';
      grid.appendChild(emptyCard);
    }

    sec.appendChild(grid);
    main.appendChild(sec);
  });

  setupScrollSpy();
}

function rebuildMenu() {
  buildMenu();
}

// --- CART ---
function addItem(id) {
  if (!cart[id]) cart[id] = 0;
  cart[id]++;
  saveCart();
  updateCtrl(id);
  updateCartBadge();
  showToast("Savatga qo\u2019shildi");
}

function removeItem(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] <= 0) delete cart[id];
  saveCart();
  updateCtrl(id);
  updateCartBadge();
  renderCartDrawer();
}

function updateCtrl(id) {
  var safeId = escId(id);
  var ctrl = document.getElementById("ctrl-" + safeId);
  var card = document.getElementById("card-" + safeId);
  if (!ctrl) return;
  var qty = cart[id] || 0;

  ctrl.innerHTML = "";
  if (qty === 0) {
    var addBtn = document.createElement("button");
    addBtn.className = "add-btn";
    addBtn.innerHTML = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Qo\u2019shish';
    addBtn.addEventListener("click", (function(itemId) {
      return function() { addItem(itemId); };
    })(id));
    ctrl.appendChild(addBtn);
    if (card) card.classList.remove("in-cart");
  } else {
    var wrap = document.createElement("div");
    wrap.className = "qty-ctrl";

    var minusBtn = document.createElement("button");
    minusBtn.className = "qty-btn";
    minusBtn.textContent = "\u2212";
    minusBtn.addEventListener("click", (function(itemId) {
      return function() { removeItem(itemId); };
    })(id));
    wrap.appendChild(minusBtn);

    var numEl = document.createElement("span");
    numEl.className = "qty-num";
    numEl.textContent = qty;
    wrap.appendChild(numEl);

    var plusBtn = document.createElement("button");
    plusBtn.className = "qty-btn";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", (function(itemId) {
      return function() { addItem(itemId); };
    })(id));
    wrap.appendChild(plusBtn);

    ctrl.appendChild(wrap);
    if (card) card.classList.add("in-cart");
  }
}

function updateCartBadge() {
  var total = 0;
  var keys = Object.keys(cart);
  for (var i = 0; i < keys.length; i++) {
    total += cart[keys[i]];
  }
  var badge = document.getElementById("cart-count");
  badge.textContent = total;
  badge.classList.add("bump");
  setTimeout(function() { badge.classList.remove("bump"); }, 200);
}

function cartTotal() {
  var sum = 0;
  var keys = Object.keys(cart);
  for (var i = 0; i < keys.length; i++) {
    var item = itemIdMap[keys[i]];
    if (item) sum += item.price * cart[keys[i]];
  }
  return sum;
}

function openCart() {
  renderCartDrawer();
  document.getElementById("overlay").classList.add("open");
  document.getElementById("drawer").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  document.getElementById("overlay").classList.remove("open");
  document.getElementById("drawer").classList.remove("open");
  document.body.style.overflow = "";
}

function renderCartDrawer() {
  var body = document.getElementById("cart-body");
  var keys = Object.keys(cart);
  body.innerHTML = "";

  if (keys.length === 0) {
    var empty = document.createElement("div");
    empty.className = "cart-empty";
    empty.innerHTML = '<div class="cart-empty-icon">\uD83D\uDED2</div><div>Savat bo\u02BBsh</div><div style="margin-top:0.4rem;font-size:0.8rem;color:var(--text3)">Menyudan taomlar qo\u02BBshing</div>';
    body.appendChild(empty);
    document.getElementById("order-btn").disabled = true;
    document.getElementById("cart-total").textContent = "0 so\u02BBm";
    return;
  }

  document.getElementById("order-btn").disabled = false;

  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var item = itemIdMap[id];
    var qty = cart[id];
    if (!item) continue;

    var row = document.createElement("div");
    row.className = "cart-item";

    var info = document.createElement("div");
    info.className = "cart-item-info";
    var nameEl = document.createElement("div");
    nameEl.className = "cart-item-name";
    nameEl.textContent = item.name;
    info.appendChild(nameEl);
    if (item.detail) {
      var sizeEl = document.createElement("div");
      sizeEl.className = "cart-item-size";
      sizeEl.textContent = item.detail;
      info.appendChild(sizeEl);
    }
    row.appendChild(info);

    var controlsWrap = document.createElement("div");
    controlsWrap.style.cssText = "display:flex;align-items:center;gap:10px";

    var controls = document.createElement("div");
    controls.className = "cart-item-controls";

    var minusBtn = document.createElement("button");
    minusBtn.className = "qty-btn";
    minusBtn.style.cssText = "width:24px;height:24px;font-size:0.9rem";
    minusBtn.textContent = "\u2212";
    minusBtn.addEventListener("click", (function(itemId) {
      return function() { removeItem(itemId); renderCartDrawer(); };
    })(id));
    controls.appendChild(minusBtn);

    var numEl = document.createElement("span");
    numEl.className = "qty-num";
    numEl.textContent = qty;
    controls.appendChild(numEl);

    var plusBtn = document.createElement("button");
    plusBtn.className = "qty-btn";
    plusBtn.style.cssText = "width:24px;height:24px;font-size:0.9rem";
    plusBtn.textContent = "+";
    plusBtn.addEventListener("click", (function(itemId) {
      return function() { addItem(itemId); renderCartDrawer(); };
    })(id));
    controls.appendChild(plusBtn);

    controlsWrap.appendChild(controls);

    var priceEl = document.createElement("div");
    priceEl.className = "cart-item-price";
    priceEl.textContent = fmt(item.price * qty);
    controlsWrap.appendChild(priceEl);

    row.appendChild(controlsWrap);
    body.appendChild(row);
  }

  document.getElementById("cart-total").textContent = fmt(cartTotal());
}

// --- ORDER MODAL ---
function openOrderModal() {
  var keys = Object.keys(cart);
  if (!keys.length) return;

  var list = document.getElementById("modal-items-list");
  list.innerHTML = "";

  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var item = itemIdMap[id];
    var qty = cart[id];
    if (!item) continue;

    var row = document.createElement("div");
    row.className = "modal-item-row";
    var left = document.createElement("span");
    left.textContent = item.name + (item.detail ? " (" + item.detail + ")" : "") + " \u00D7 " + qty;
    var right = document.createElement("span");
    right.textContent = fmt(item.price * qty);
    row.appendChild(left);
    row.appendChild(right);
    list.appendChild(row);
  }

  var totalRow = document.createElement("div");
  totalRow.className = "modal-total";
  totalRow.innerHTML = '<span>Jami</span><span>' + fmt(cartTotal()) + '</span>';
  list.appendChild(totalRow);

  document.getElementById("modal-overlay").classList.add("open");
}

function closeOrderModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

// --- TELEGRAM ---
function sendToTelegram(text) {
  var url = "https://api.telegram.org/bot" + TG_BOT_TOKEN + "/sendMessage";
  var payload = {
    chat_id: TG_CHAT_ID,
    text: text,
    parse_mode: "HTML"
  };

  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
}

function buildTelegramMessage() {
  var keys = Object.keys(cart);
  var tableVal = document.getElementById("table-number").value;
  var tableText = tableVal === "takeaway" ? "Olib ketish" : ("Stol " + tableVal);

  var msg = "\uD83C\uDF7D <b>Yangi buyurtma — Diyor Döner</b>\n";
  msg += "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n";
  msg += "\uD83D\uDCCD <b>" + tableText + "</b>\n\n";

  for (var i = 0; i < keys.length; i++) {
    var id = keys[i];
    var item = itemIdMap[id];
    var qty = cart[id];
    if (!item) continue;

    msg += "\u2022 " + item.name;
    if (item.detail) msg += " (" + item.detail + ")";
    msg += " \u00D7 " + qty;
    msg += "  \u2192  " + fmt(item.price * qty) + "\n";
  }

  msg += "\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n";
  msg += "\uD83D\uDCB0 <b>Jami: " + fmt(cartTotal()) + "</b>\n";

  return msg;
}

// --- CONFIRM ORDER ---
function confirmOrder() {
  var tableVal = document.getElementById("table-number").value;
  if (!tableVal) {
    showToast("Stol raqamini tanlang!");
    return;
  }

  var msg = buildTelegramMessage();

  var confirmBtn = document.querySelector(".modal-confirm");
  confirmBtn.textContent = "Yuborilmoqda...";
  confirmBtn.disabled = true;

  sendToTelegram(msg).then(function() {
    confirmBtn.textContent = "Buyurtma berish \u2713";
    confirmBtn.disabled = false;
    closeOrderModal();
    closeCart();
    var keys = Object.keys(cart);
    for (var i = 0; i < keys.length; i++) {
      updateCtrl(keys[i]);
    }
    cart = {};
    saveCart();
    updateCartBadge();
    document.getElementById("table-number").value = "";
    document.getElementById("success-screen").classList.add("show");
    showToast("Buyurtma Telegramga yuborildi!");
  }).catch(function() {
    confirmBtn.textContent = "Buyurtma berish \u2713";
    confirmBtn.disabled = false;
    closeOrderModal();
    closeCart();
    var keys = Object.keys(cart);
    for (var i = 0; i < keys.length; i++) {
      updateCtrl(keys[i]);
    }
    cart = {};
    saveCart();
    updateCartBadge();
    document.getElementById("table-number").value = "";
    document.getElementById("success-screen").classList.add("show");
  });
}

function resetAll() {
  document.getElementById("success-screen").classList.remove("show");
}

// --- TOAST ---
var toastTimer;
function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function() { t.classList.remove("show"); }, 1800);
}

// --- SCROLL SPY ---
function setupScrollSpy() {
  var sections = document.querySelectorAll(".category-section");
  var pills = document.querySelectorAll(".cat-pill");
  if (!sections.length || !pills.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var idx = entry.target.id.replace("sec-", "");
        pills.forEach(function(p, i) { p.classList.toggle("active", i == idx); });
        var pill = pills[idx];
        if (pill) pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  sections.forEach(function(s) { observer.observe(s); });
}

// --- INIT ---
initTheme();
loadCart();
buildMenu();
updateCartBadge();

Object.keys(cart).forEach(function(id) {
  updateCtrl(id);
});
