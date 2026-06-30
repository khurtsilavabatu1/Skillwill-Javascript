import { getTransactions } from "./state.js";
import {
  form,
  typeSelect,
  transactionList,
  filterBtns,
  clearAllBtn,
} from "./dom.js";
import {
  renderTransactions,
  updateSummary,
  updateCategoryOptions,
  filterTransactions,
} from "./ui.js";
import { addTransaction, deleteTransaction, clearAll } from "./transactions.js";
import { loadFromStorage, loadSampleData, saveToStorage } from "./storage.js";

// ─── Event Delegation — წაშლის ღილაკი ────────────────────
transactionList.addEventListener("click", function (e) {
  console.log(e);

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

if (getTransactions().length === 0) {
  loadSampleData();
  saveToStorage();
}

updateCategoryOptions();
renderTransactions(getTransactions());
updateSummary();
