"use strict";

const API_URL = "http://localhost:3000/todos";

const addForm = document.getElementById("addForm");
const taskInput = document.getElementById("taskInput");
const typeSelect = document.getElementById("typeSelect");
const todoList = document.getElementById("todoList");
const backlogList = document.getElementById("backlogList");
const todoCount = document.getElementById("todoCount");
const backlogCount = document.getElementById("backlogCount");
const statusMessage = document.getElementById("statusMessage");

function renderTodos(todos) {
  const todoTasks = todos.filter((t) => t.type === "todo");
  const backlogTasks = todos.filter((t) => t.type === "backlog");

  todoCount.textContent = todoTasks.length;
  backlogCount.textContent = backlogTasks.length;

  todoList.innerHTML = "";
  backlogList.innerHTML = "";

  if (todoTasks.length === 0) {
    todoList.innerHTML = '<p class="empty-message">ცარიელია</p>';
  } else {
    todoTasks.forEach((task) => {
      todoList.appendChild(createTaskElement(task));
    });
  }

  if (backlogTasks.length === 0) {
    backlogList.innerHTML = '<p class="empty-message">ცარიელია</p>';
  } else {
    backlogTasks.forEach((task) => {
      backlogList.appendChild(createTaskElement(task));
    });
  }
}

function createTaskElement(task) {
  const div = document.createElement("div");
  div.className = "task-item";

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const moveBtn = document.createElement("button");
  moveBtn.className = "btn-move";
  moveBtn.textContent = task.type === "todo" ? "→ Backlog" : "→ Todo";
  moveBtn.addEventListener("click", () => changeType(task.id, task.type));

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn-delete";
  deleteBtn.textContent = "წაშლა";
  deleteBtn.addEventListener("click", () => deleteTodo(task.id));

  actions.appendChild(moveBtn);
  actions.appendChild(deleteBtn);
  div.appendChild(title);
  div.appendChild(actions);

  return div;
}

function showStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.className = "status-message " + type;
  if (type === "loading") {
    setTimeout(() => {
      if (statusMessage.classList.contains("loading")) {
        statusMessage.className = "status-message";
      }
    }, 3000);
  }
}

function hideStatus() {
  statusMessage.className = "status-message";
}

// -------- 1. fetchTodos --------

async function fetchTodos() {
  try {
    showStatus("ჩატვირთვა...", "loading");
    const response = await fetch(API_URL);
    const todos = await response.json();
    renderTodos(todos);
    hideStatus();
  } catch (error) {
    showStatus("შეცდომა: " + error.message, "error");
  }
}

// -------- 2. addTodo --------

async function addTodo(title, type) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, type }),
    });
    await fetchTodos();
  } catch (error) {
    showStatus("დამატება ვერ მოხერხდა", "error");
  }
}

// -------- 3. changeType --------

async function changeType(id, currentType) {
  try {
    const newType = currentType === "todo" ? "backlog" : "todo";
    await fetch(API_URL + "/" + id, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: newType }),
    });
    await fetchTodos();
  } catch (error) {
    showStatus("შეცვლა ვერ მოხერხდა", "error");
  }
}

// -------- 4. deleteTodo --------

async function deleteTodo(id) {
  try {
    await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    await fetchTodos();
  } catch (error) {
    showStatus("წაშლა ვერ მოხერხდა", "error");
  }
}

// -------- 5. ფორმის Event Listener --------

addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = taskInput.value.trim();
  const type = typeSelect.value;
  if (title) {
    addTodo(title, type);
    taskInput.value = "";
  }
});

// -------- 6. საწყისი ჩატვირთვა --------

fetchTodos();
