// ========================================================
// ბიუჯეტის ტრეკერი — Challenge
// ========================================================
//
// ამოცანა: შეავსეთ ქვემოთ მოცემული ფუნქციები ისე,
// რომ ბიუჯეტის ტრეკერმა სრულად იმუშაოს.
//
// HTML ფაილი (project.html) final/ საქაღალდეშია.
// დააკოპირეთ starter/ საქაღალდეში და script src შეცვალეთ
// challenge.js-ზე.
//
// თითოეულ ფუნქციაში მითითებულია:
//   - რა უნდა გააკეთოს
//   - რომელი DOM მეთოდები გამოიყენოთ
//   - მინიშნებები
//
// საბოლოო ვერსია: final/project.js
// ========================================================

// === კატეგორიები ===
const CATEGORIES = {
  income: ["ხელფასი", "ფრილანსი", "საჩუქარი", "სხვა"],
  expense: ["საკვები", "ტრანსპორტი", "გართობა", "კომუნალური", "სხვა"],
};

// === State ===
let transactions = [];
let nextId = 1;
let currentFilter = "all";

// === DOM References ===
const form = document.getElementById("transaction-form");
const descInput = document.getElementById("desc-input");
const amountInput = document.getElementById("amount-input");
const typeSelect = document.getElementById("type-select");
const categorySelect = document.getElementById("category-select");
const transactionList = document.getElementById("transaction-list");
const incomeTotal = document.getElementById("income-total");
const expenseTotal = document.getElementById("expense-total");
const balanceTotal = document.getElementById("balance-total");
const balanceCard = document.getElementById("balance-card");
const clearAllBtn = document.getElementById("btn-clear-all");
const txCount = document.getElementById("tx-count");
const filterBtns = document.querySelectorAll(".filter-btn");

// ─────────────────────────────────────────────────────────
// ჩელენჯი 1: createTransactionEl(tx)
// ─────────────────────────────────────────────────────────
// შექმენით ტრანზაქციის ელემენტი ნულიდან.
//
// tx ობიექტის სტრუქტურა:
//   { id: 1, description: "ხელფასი", amount: 3500,
//     type: "income", category: "ხელფასი", date: "..." }
//
// უნდა დააბრუნოთ ასეთი სტრუქტურის div:
//
//   <div class="tx-row income" data-id="1">
//     <div class="tx-info">
//       <span class="tx-desc">ხელფასი</span>
//       <span class="tx-category">ხელფასი</span>
//     </div>
//     <span class="tx-amount">+3500.00₾</span>
//     <button class="btn-delete">×</button>
//   </div>
//
// გამოიყენეთ: createElement, classList.add, setAttribute,
//             textContent, append
//
// მინიშნება:
//   - თანხის ფორმატი: income → "+3500.00₾", expense → "-285.50₾"
//   - toFixed(2) ორ ათწილადს დაამატებს
// ─────────────────────────────────────────────────────────
function createTransactionEl(tx) {
  // TODO: შექმენით row (div), დაამატეთ classList და data-id

  // TODO: შექმენით info div, desc span, category span

  // TODO: append-ით დაამატეთ desc და cat info-ს

  // TODO: შექმენით amount span ფორმატირებული ტექსტით

  // TODO: შექმენით delete button ტექსტით "×"

  // TODO: append-ით დაამატეთ info, amount, deleteBtn row-ს

  // TODO: დააბრუნეთ row
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 2: addTransaction(e)
// ─────────────────────────────────────────────────────────
// ფორმის submit-ის დამუშავება.
//
// ნაბიჯები:
//   1. e.preventDefault() — გვერდის გადატვირთვის შეჩერება
//   2. ფორმის ველებიდან წაიკითხეთ description, amount, type, category
//   3. შექმენით tx ობიექტი id-ით (nextId++)
//   4. transactions მასივის თავში ჩასვით (unshift)
//   5. createTransactionEl(tx)-ით შექმენით ელემენტი
//   6. transactionList.prepend()-ით სიის თავში დაამატეთ
//   7. updateSummary(), saveToStorage() გამოიძახეთ
//   8. form.reset() — ფორმის გასუფთავება
//
// გამოიყენეთ: prepend, remove()
//
// მინიშნება:
//   - parseFloat(amountInput.value) — ტექსტს რიცხვად გადაიყვანს
//   - empty state-ს (.empty-state) წაშლა prepend-ის წინ:
//     const emptyMsg = transactionList.querySelector(".empty-state");
//     if (emptyMsg) emptyMsg.remove();
// ─────────────────────────────────────────────────────────
function addTransaction(e) {
  // TODO: e.preventDefault()

  // TODO: შექმენით tx ობიექტი ფორმის მნიშვნელობებიდან

  // TODO: transactions.unshift(tx)

  // TODO: empty state-ის წაშლა თუ არსებობს

  // TODO: prepend-ით ახალი ელემენტის დამატება

  // TODO: updateSummary(), saveToStorage(), form.reset(), updateCategoryOptions()
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 3: deleteTransaction(id)
// ─────────────────────────────────────────────────────────
// ტრანზაქციის წაშლა ID-ით.
//
// ნაბიჯები:
//   1. querySelector-ით იპოვეთ ელემენტი data-id-ით
//   2. remove()-ით წაშალეთ DOM-იდან
//   3. filter-ით წაშალეთ მასივიდან
//   4. updateSummary(), updateCount(), saveToStorage()
//   5. თუ მასივი ცარიელია — showEmpty()
//
// გამოიყენეთ: querySelector, remove()
//
// მინიშნება:
//   - სელექტორი: '[data-id="' + id + '"]'
// ─────────────────────────────────────────────────────────
function deleteTransaction(id) {
  // TODO
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 4: renderTransactions(txArray)
// ─────────────────────────────────────────────────────────
// მთელი სიის ხელახალი რენდერი.
//
// ნაბიჯები:
//   1. while ციკლით წაშალეთ transactionList-ის ყველა child
//   2. თუ txArray ცარიელია — showEmpty() + return
//   3. შექმენით DocumentFragment
//   4. forEach-ით ყველა tx-ზე createTransactionEl გამოიძახეთ
//      და fragment-ში appendChild-ით ჩაამატეთ
//   5. transactionList.appendChild(fragment)
//
// გამოიყენეთ: removeChild, DocumentFragment, appendChild
//
// მინიშნება:
//   - while (transactionList.firstChild) { ... }
//   - document.createDocumentFragment()
//   - DocumentFragment-ის გამოყენება ეფექტურია,
//     რადგან DOM-ში მხოლოდ ერთხელ ხდება ჩასმა (1 reflow)
// ─────────────────────────────────────────────────────────
function renderTransactions(txArray) {
  // TODO
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 5: updateSummary()
// ─────────────────────────────────────────────────────────
// ბალანსის ბარათების განახლება.
//
// ნაბიჯები:
//   1. filter + reduce — გამოთვალეთ ჯამური income და expense
//   2. textContent — განაახლეთ incomeTotal, expenseTotal, balanceTotal
//   3. classList — ბალანსის ფერი: positive თუ >= 0, negative თუ < 0
//
// გამოიყენეთ: textContent, classList.remove, classList.add
//
// მინიშნება:
//   - income ფორმატი: "+3500.00₾"
//   - expense ფორმატი: "-285.50₾"
//   - balance: "+" პრეფიქსი მხოლოდ >= 0 შემთხვევაში
// ─────────────────────────────────────────────────────────
function updateSummary() {
  // TODO
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 6: filterTransactions(type)
// ─────────────────────────────────────────────────────────
// ტიპის მიხედვით ფილტრაცია ("all", "income", "expense").
//
// ნაბიჯები:
//   1. currentFilter = type
//   2. filterBtns.forEach — classList.toggle("active", ...)
//   3. Array.filter — გაფილტრეთ transactions (ან სრული თუ "all")
//   4. renderTransactions(filtered)
//
// გამოიყენეთ: classList.toggle
//
// მინიშნება:
//   - btn.classList.toggle("active", btn.dataset.filter === type)
//   - toggle-ის მეორე არგუმენტი boolean-ია (force)
// ─────────────────────────────────────────────────────────
function filterTransactions(type) {
  // TODO
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 7: clearAll()
// ─────────────────────────────────────────────────────────
// ყველა ტრანზაქციის წაშლა.
//
// ნაბიჯები:
//   1. confirm() — დადასტურება
//   2. while + removeChild — სიის გასუფთავება
//   3. transactions = [], nextId = 1
//   4. updateSummary(), saveToStorage(), showEmpty(), updateCount(0)
// ─────────────────────────────────────────────────────────
function clearAll() {
  // TODO
}

// ─────────────────────────────────────────────────────────
// ჩელენჯი 8: updateCategoryOptions()
// ─────────────────────────────────────────────────────────
// ტიპის ცვლილებისას კატეგორიის select-ის განახლება.
//
// ნაბიჯები:
//   1. typeSelect.value-დან აიღეთ ტიპი
//   2. CATEGORIES[type]-დან აიღეთ კატეგორიები
//   3. while + removeChild — ძველი option-ების წაშლა
//   4. forEach — ახალი option-ების შექმნა და appendChild
//
// გამოიყენეთ: createElement, appendChild, removeChild
// ─────────────────────────────────────────────────────────
function updateCategoryOptions() {
  // TODO
}

// ═══════════════════════════════════════════════════════════
// ქვემოთ მოცემული ფუნქციები უკვე მზადაა — არ შეცვალოთ!
// ═══════════════════════════════════════════════════════════

function showEmpty() {
  const div = document.createElement("div");
  div.classList.add("empty-state");

  const p = document.createElement("p");
  p.textContent = "ტრანზაქციები არ არის";

  const small = document.createElement("small");
  small.textContent = "დაამატეთ ახალი ტრანზაქცია ზემოთ მოცემული ფორმით";

  div.append(p, small);
  transactionList.appendChild(div);
}

function updateCount(count) {
  const c = count !== undefined ? count : transactions.length;
  txCount.textContent = c > 0 ? "ნაჩვენებია " + c + " ტრანზაქცია" : "";
}

function saveToStorage() {
  localStorage.setItem("budget-tracker-data", JSON.stringify(transactions));
  localStorage.setItem("budget-tracker-nextId", String(nextId));
}

function loadFromStorage() {
  const data = localStorage.getItem("budget-tracker-data");
  const savedNextId = localStorage.getItem("budget-tracker-nextId");

  if (data) transactions = JSON.parse(data);
  if (savedNextId) nextId = parseInt(savedNextId);
}

function loadSampleData() {
  transactions = [
    { id: 1, description: "ხელფასი", amount: 3500, type: "income", category: "ხელფასი", date: "2024-01-15T10:00:00" },
    { id: 2, description: "სუპერმარკეტი", amount: 285.5, type: "expense", category: "საკვები", date: "2024-01-16T14:30:00" },
    { id: 3, description: "მეტრო + ავტობუსი", amount: 48, type: "expense", category: "ტრანსპორტი", date: "2024-01-17T08:00:00" },
    { id: 4, description: "ფრილანს პროექტი", amount: 800, type: "income", category: "ფრილანსი", date: "2024-01-18T16:00:00" },
    { id: 5, description: "ელექტროენერგია", amount: 95, type: "expense", category: "კომუნალური", date: "2024-01-19T12:00:00" },
    { id: 6, description: "კინო", amount: 35, type: "expense", category: "გართობა", date: "2024-01-20T20:00:00" },
  ];
  nextId = 7;
}

// ─── Event Delegation — წაშლის ღილაკი ────────────────────
transactionList.addEventListener("click", function (e) {
  if (!e.target.classList.contains("btn-delete")) return;

  const row = e.target.closest("[data-id]");
  if (!row) return;

  deleteTransaction(parseInt(row.getAttribute("data-id")));
});

// === Event Listeners ===
form.addEventListener("submit", addTransaction);
typeSelect.addEventListener("change", updateCategoryOptions);

filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterTransactions(btn.dataset.filter);
  });
});

clearAllBtn.addEventListener("click", clearAll);

// === Init ===
loadFromStorage();

if (transactions.length === 0) {
  loadSampleData();
  saveToStorage();
}

updateCategoryOptions();
renderTransactions(transactions);
updateSummary();
