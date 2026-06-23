// ========================================================
// ბიუჯეტის ტრეკერი — DOM Manipulation Project
// ========================================================
//
// გამოყენებული DOM მეთოდები:
// ─────────────────────────────────────────────────
// createElement     → ტრანზაქციის ელემენტის აგება
// textContent       → ტექსტის დაყენება
// classList          → კლასების მართვა (add, remove, toggle)
// setAttribute      → ატრიბუტების დაყენება (data-id)
// append            → რამდენიმე ელემენტის ერთდროულად დამატება
// appendChild       → DocumentFragment-ში ელემენტების ჩამატება
// prepend           → ახალი ტრანზაქციის ზემოთ ჩასმა
// remove()          → ერთი ტრანზაქციის წაშლა
// removeChild       → while ციკლით ყველაფრის გასუფთავება
// DocumentFragment  → ბეჩ რენდერინგი (ფილტრაცია)
//
// დამატებით:
// ─────────────────────────────────────────────────
// Event Delegation  → წაშლის ღილაკის მოვლენა
// Array methods     → filter, reduce, unshift, forEach
// localStorage      → მონაცემების შენახვა ბრაუზერში
// ========================================================

// === კატეგორიები ტიპის მიხედვით ===
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

// ─── createElement + textContent + classList + append ─────────
// ტრანზაქციის ერთი რიგის აგება ნულიდან
function createTransactionEl(tx) {
  const row = document.createElement("div");
  row.classList.add("tx-row", tx.type);
  row.setAttribute("data-id", tx.id);

  // ინფორმაციის ბლოკი
  const info = document.createElement("div");
  info.classList.add("tx-info");

  const desc = document.createElement("span");
  desc.classList.add("tx-desc");
  desc.textContent = tx.description;

  const cat = document.createElement("span");
  cat.classList.add("tx-category");
  cat.textContent = tx.category;

  // append — რამდენიმე ელემენტის ერთდროულად დამატება
  info.append(desc, cat);

  // თანხა
  const amount = document.createElement("span");
  amount.classList.add("tx-amount");
  amount.textContent =
    (tx.type === "income" ? "+" : "-") + tx.amount.toFixed(2) + "₾";

  // წაშლის ღილაკი
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.textContent = "×";

  row.append(info, amount, deleteBtn);
  return row;
}

// ─── prepend — ახალი ტრანზაქციის დამატება სიის თავში ─────────
function addTransaction(e) {
  e.preventDefault();

  const tx = {
    id: nextId++,
    description: descInput.value.trim(),
    amount: parseFloat(amountInput.value),
    type: typeSelect.value,
    category: categorySelect.value,
    date: new Date().toISOString(),
  };

  transactions.unshift(tx);

  // თუ ფილტრი აქტიურია, სრული ხელახალი რენდერი
  if (currentFilter !== "all") {
    currentFilter = "all";
    filterBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.filter === "all");
    });
    renderTransactions(transactions);
  } else {
    // remove() — empty state-ის წაშლა თუ არსებობს
    const emptyMsg = transactionList.querySelector(".empty-state");
    if (emptyMsg) emptyMsg.remove();

    // prepend — ახალი ელემენტი სიის თავში
    transactionList.prepend(createTransactionEl(tx));
    updateCount(transactions.length);
  }

  updateSummary();
  saveToStorage();
  form.reset();
  updateCategoryOptions();
}

// ─── remove() — ერთი ტრანზაქციის წაშლა ──────────────────────
function deleteTransaction(id) {
  const el = transactionList.querySelector('[data-id="' + id + '"]');
  if (el) el.remove();

  transactions = transactions.filter(function (tx) {
    return tx.id !== id;
  });

  updateSummary();
  updateCount();
  saveToStorage();

  if (transactions.length === 0) showEmpty();
}

// ─── DocumentFragment + while/removeChild — ბეჩ რენდერინგი ───
// ფილტრაციისას მთელი სია თავიდან იხატება
function renderTransactions(txArray) {
  // while + removeChild — სიის სრული გასუფთავება
  while (transactionList.firstChild) {
    transactionList.removeChild(transactionList.firstChild);
  }

  if (txArray.length === 0) {
    showEmpty();
    updateCount(0);
    return;
  }

  // DocumentFragment — ყველა ელემენტი ჯერ ფრაგმენტში გროვდება,
  // შემდეგ ერთი appendChild-ით DOM-ში ჩაჯდება (1 reflow)
  const fragment = document.createDocumentFragment();
  txArray.forEach(function (tx) {
    fragment.appendChild(createTransactionEl(tx));
  });
  transactionList.appendChild(fragment);
  updateCount(txArray.length);
}

// ─── textContent + classList — ბალანსის განახლება ─────────────
function updateSummary() {
  const income = transactions
    .filter(function (tx) {
      return tx.type === "income";
    })
    .reduce(function (sum, tx) {
      return sum + tx.amount;
    }, 0);

  const expense = transactions
    .filter(function (tx) {
      return tx.type === "expense";
    })
    .reduce(function (sum, tx) {
      return sum + tx.amount;
    }, 0);

  const balance = income - expense;

  // textContent — ტექსტის განახლება
  incomeTotal.textContent = "+" + income.toFixed(2) + "₾";
  expenseTotal.textContent = "-" + expense.toFixed(2) + "₾";
  balanceTotal.textContent =
    (balance >= 0 ? "+" : "") + balance.toFixed(2) + "₾";

  // classList — ბალანსის ფერის ცვლილება
  balanceCard.classList.remove("positive", "negative");
  balanceCard.classList.add(balance >= 0 ? "positive" : "negative");
}

// ─── classList.toggle — ფილტრაცია ─────────────────────────────
function filterTransactions(type) {
  currentFilter = type;

  // classList.toggle — აქტიური ღილაკის მონიშვნა
  filterBtns.forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.filter === type);
  });

  // Array.filter — ტიპის მიხედვით გაფილტვრა
  const filtered =
    type === "all"
      ? transactions
      : transactions.filter(function (tx) {
          return tx.type === type;
        });

  // DocumentFragment — გაფილტრული სიის ხელახალი რენდერი
  renderTransactions(filtered);
}

// ─── while + removeChild — ყველას წაშლა ──────────────────────
function clearAll() {
  if (!confirm("ნამდვილად გსურთ ყველა ტრანზაქციის წაშლა?")) return;

  while (transactionList.firstChild) {
    transactionList.removeChild(transactionList.firstChild);
  }

  transactions = [];
  nextId = 1;
  updateSummary();
  saveToStorage();
  showEmpty();
  updateCount(0);
}

// ─── removeChild + appendChild — კატეგორიების განახლება ───────
// ტიპის ცვლილებისას კატეგორიების სია იცვლება
function updateCategoryOptions() {
  const type = typeSelect.value;
  const cats = CATEGORIES[type];

  // while + removeChild — ძველი option-ების წაშლა
  while (categorySelect.firstChild) {
    categorySelect.removeChild(categorySelect.firstChild);
  }

  // createElement + appendChild — ახალი option-ების დამატება
  cats.forEach(function (text) {
    const opt = document.createElement("option");
    opt.value = text;
    opt.textContent = text;
    categorySelect.appendChild(opt);
  });
}

// ─── createElement + append — ცარიელი მდგომარეობა ────────────
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

// ─── textContent — მთვლელის განახლება ─────────────────────────
function updateCount(count) {
  const c = count !== undefined ? count : transactions.length;
  txCount.textContent = c > 0 ? "ნაჩვენებია " + c + " ტრანზაქცია" : "";
}

// ─── localStorage — შენახვა/ჩატვირთვა ────────────────────────
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

// === სატესტო მონაცემები (პირველ გაშვებაზე) ===
function loadSampleData() {
  transactions = [
    {
      id: 1,
      description: "ხელფასი",
      amount: 3500,
      type: "income",
      category: "ხელფასი",
      date: "2024-01-15T10:00:00",
    },
    {
      id: 2,
      description: "სუპერმარკეტი",
      amount: 285.5,
      type: "expense",
      category: "საკვები",
      date: "2024-01-16T14:30:00",
    },
    {
      id: 3,
      description: "მეტრო + ავტობუსი",
      amount: 48,
      type: "expense",
      category: "ტრანსპორტი",
      date: "2024-01-17T08:00:00",
    },
    {
      id: 4,
      description: "ფრილანს პროექტი",
      amount: 800,
      type: "income",
      category: "ფრილანსი",
      date: "2024-01-18T16:00:00",
    },
    {
      id: 5,
      description: "ელექტროენერგია",
      amount: 95,
      type: "expense",
      category: "კომუნალური",
      date: "2024-01-19T12:00:00",
    },
    {
      id: 6,
      description: "კინო",
      amount: 35,
      type: "expense",
      category: "გართობა",
      date: "2024-01-20T20:00:00",
    },
  ];
  nextId = 7;
}

// ─── Event Delegation — წაშლის ღილაკი ────────────────────────
// ერთი listener მთელ სიაზე — ახალ ელემენტებზეც მუშაობს
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
