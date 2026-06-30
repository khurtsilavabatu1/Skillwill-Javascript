let transactions = [];
let nextId = 1;
let currentFilter = "all";

export function getTransactions() {
  return transactions;
}

export function setTransactions(val) {
  transactions = val;
}

export function getNextId() {
  return nextId;
}

export function setNextId(val) {
  nextId = val;
}

export function incrementNextId() {
  return nextId++;
}

export function getCurrentFilter() {
  return currentFilter;
}

export function setCurrentFilter(val) {
  currentFilter = val;
}
