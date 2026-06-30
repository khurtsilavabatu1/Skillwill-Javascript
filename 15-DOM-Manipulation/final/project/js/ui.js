import { CATEGORIES } from "./config.js";
import {
  getTransactions,
  getCurrentFilter,
  setCurrentFilter,
} from "./state.js";
import {
  transactionList,
  incomeTotal,
  expenseTotal,
  balanceTotal,
  balanceCard,
  txCount,
  filterBtns,
  typeSelect,
  categorySelect,
} from "./dom.js";

export function createTransactionEl(tx) {
  const row = document.createElement("div");
  row.classList.add("tx-row", tx.type);
  row.setAttribute("data-id", tx.id);

  const info = document.createElement("div");
  info.classList.add("tx-info");

  const desc = document.createElement("span");
  desc.classList.add("tx-desc");
  desc.textContent = tx.description;

  const cat = document.createElement("span");
  cat.classList.add("tx-category");
  cat.textContent = tx.category;

  info.append(desc, cat);

  const amount = document.createElement("span");
  amount.classList.add("tx-amount");
  amount.textContent =
    (tx.type === "income" ? "+" : "-") + tx.amount.toFixed(2) + "₾";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.textContent = "×";

  row.append(info, amount, deleteBtn);
  return row;
}

export function renderTransactions(txArray) {
  while (transactionList.firstChild) {
    transactionList.removeChild(transactionList.firstChild);
  }

  if (txArray.length === 0) {
    showEmpty();
    updateCount(0);
    return;
  }

  const fragment = document.createDocumentFragment();
  txArray.forEach(function (tx) {
    fragment.appendChild(createTransactionEl(tx));
  });
  transactionList.appendChild(fragment);
  updateCount(txArray.length);
}

export function updateSummary() {
  const transactions = getTransactions();

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

  incomeTotal.textContent = "+" + income.toFixed(2) + "₾";
  expenseTotal.textContent = "-" + expense.toFixed(2) + "₾";
  balanceTotal.textContent =
    (balance >= 0 ? "+" : "") + balance.toFixed(2) + "₾";

  balanceCard.classList.remove("positive", "negative");
  balanceCard.classList.add(balance >= 0 ? "positive" : "negative");
}

export function filterTransactions(type) {
  setCurrentFilter(type);

  filterBtns.forEach(function (btn) {
    btn.classList.toggle("active", btn.dataset.filter === type);
  });

  const transactions = getTransactions();
  const filtered =
    type === "all"
      ? transactions
      : transactions.filter(function (tx) {
          return tx.type === type;
        });

  renderTransactions(filtered);
}

export function updateCategoryOptions() {
  const type = typeSelect.value;
  const cats = CATEGORIES[type];

  while (categorySelect.firstChild) {
    categorySelect.removeChild(categorySelect.firstChild);
  }

  cats.forEach(function (text) {
    const opt = document.createElement("option");
    opt.value = text;
    opt.textContent = text;
    categorySelect.appendChild(opt);
  });
}

export function showEmpty() {
  const div = document.createElement("div");
  div.classList.add("empty-state");

  const p = document.createElement("p");
  p.textContent = "ტრანზაქციები არ არის";

  const small = document.createElement("small");
  small.textContent = "დაამატეთ ახალი ტრანზაქცია ზემოთ მოცემული ფორმით";

  div.append(p, small);
  transactionList.appendChild(div);
}

export function updateCount(count) {
  const transactions = getTransactions();
  const c = count !== undefined ? count : transactions.length;
  txCount.textContent = c > 0 ? "ნაჩვენებია " + c + " ტრანზაქცია" : "";
}
