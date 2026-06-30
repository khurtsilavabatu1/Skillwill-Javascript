import {
  getTransactions,
  setTransactions,
  incrementNextId,
  getCurrentFilter,
  setCurrentFilter,
  setNextId,
} from "./state.js";
import {
  form,
  descInput,
  amountInput,
  typeSelect,
  categorySelect,
  transactionList,
  filterBtns,
} from "./dom.js";
import {
  createTransactionEl,
  renderTransactions,
  updateSummary,
  updateCategoryOptions,
  updateCount,
  showEmpty,
} from "./ui.js";
import { saveToStorage } from "./storage.js";

export function addTransaction(e) {
  e.preventDefault();

  const tx = {
    id: incrementNextId(),
    description: descInput.value.trim(),
    amount: parseFloat(amountInput.value),
    type: typeSelect.value,
    category: categorySelect.value,
    date: new Date().toISOString(),
  };

  const transactions = getTransactions();
  transactions.unshift(tx);

  if (getCurrentFilter() !== "all") {
    setCurrentFilter("all");
    filterBtns.forEach(function (btn) {
      btn.classList.toggle("active", btn.dataset.filter === "all");
    });
    renderTransactions(transactions);
  } else {
    const emptyMsg = transactionList.querySelector(".empty-state");
    if (emptyMsg) emptyMsg.remove();

    transactionList.prepend(createTransactionEl(tx));
    updateCount(transactions.length);
  }

  updateSummary();
  saveToStorage();
  form.reset();
  updateCategoryOptions();
}

export function deleteTransaction(id) {
  const el = transactionList.querySelector('[data-id="' + id + '"]');
  if (el) el.remove();

  const filtered = getTransactions().filter(function (tx) {
    return tx.id !== id;
  });
  setTransactions(filtered);

  updateSummary();
  updateCount();
  saveToStorage();

  if (getTransactions().length === 0) showEmpty();
}

export function clearAll() {
  if (!confirm("ნამდვილად გსურთ ყველა ტრანზაქციის წაშლა?")) return;

  while (transactionList.firstChild) {
    transactionList.removeChild(transactionList.firstChild);
  }

  setTransactions([]);
  setNextId(1);
  updateSummary();
  saveToStorage();
  showEmpty();
  updateCount(0);
}
