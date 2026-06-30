import {
  getTransactions,
  setTransactions,
  getNextId,
  setNextId,
} from "./state.js";

export function saveToStorage() {
  localStorage.setItem(
    "budget-tracker-data",
    JSON.stringify(getTransactions())
  );
  localStorage.setItem("budget-tracker-nextId", String(getNextId()));
}

export function loadFromStorage() {
  const data = localStorage.getItem("budget-tracker-data");
  const savedNextId = localStorage.getItem("budget-tracker-nextId");

  if (data) setTransactions(JSON.parse(data));
  if (savedNextId) setNextId(parseInt(savedNextId));
}

export function loadSampleData() {
  setTransactions([
    { id: 1, description: "ხელფასი", amount: 3500, type: "income", category: "ხელფასი", date: "2024-01-15T10:00:00" },
    { id: 2, description: "სუპერმარკეტი", amount: 285.5, type: "expense", category: "საკვები", date: "2024-01-16T14:30:00" },
    { id: 3, description: "მეტრო + ავტობუსი", amount: 48, type: "expense", category: "ტრანსპორტი", date: "2024-01-17T08:00:00" },
    { id: 4, description: "ფრილანს პროექტი", amount: 800, type: "income", category: "ფრილანსი", date: "2024-01-18T16:00:00" },
    { id: 5, description: "ელექტროენერგია", amount: 95, type: "expense", category: "კომუნალური", date: "2024-01-19T12:00:00" },
    { id: 6, description: "კინო", amount: 35, type: "expense", category: "გართობა", date: "2024-01-20T20:00:00" },
  ]);
  setNextId(7);
}
