"use strict";

// ========================================
//    Todo App - ჩელენჯი
// ========================================
//
// სერვერის გაშვება (challenge/ ფოლდერიდან):
//   npx json-server --watch db.json
//
// სერვერი გაეშვება: http://localhost:3000
// todos endpoint: http://localhost:3000/todos
//

const API_URL = "http://localhost:3000/todos";

// DOM ელემენტები
const addForm = document.getElementById("addForm");
const taskInput = document.getElementById("taskInput");
const typeSelect = document.getElementById("typeSelect");
const todoList = document.getElementById("todoList");
const backlogList = document.getElementById("backlogList");
const todoCount = document.getElementById("todoCount");
const backlogCount = document.getElementById("backlogCount");
const statusMessage = document.getElementById("statusMessage");

// ============ მზა ფუნქცია — ნიმუშად ============

// renderTodos: იღებს todos მასივს და DOM-ში ათავსებს
// ეს ფუნქცია მზადაა — შენ მხოლოდ სწორად უნდა გამოიძახო
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

// createTaskElement: ქმნის ერთი ტასკის HTML ელემენტს
// ეს ფუნქცია მზადაა
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

// showStatus: სტატუს მესიჯის ჩვენება/დამალვა
// ეს ფუნქცია მზადაა
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

// ============ შენ უნდა დაწერო ============

// -------- 1. fetchTodos --------
// აღწერა: სერვერიდან ყველა todo-ს წამოღება და ეკრანზე ჩვენება
//
// ნაბიჯები:
// 1. showStatus("ჩატვირთვა...", "loading") გამოიძახე
// 2. fetch-ით მიმართე API_URL-ს (GET მოთხოვნა)
// 3. response გადააქციე json-ად
// 4. renderTodos გამოიძახე მიღებულ მონაცემებზე
// 5. hideStatus() გამოიძახე
// 6. შეცდომის შემთხვევაში: showStatus("შეცდომა: " + error.message, "error")
//
// გამოიყენე: async/await + try/catch

async function fetchTodos() {
  // შენი კოდი აქ
}

// -------- 2. addTodo --------
// აღწერა: ახალი ტასკის დამატება სერვერზე
//
// პარამეტრები: title (string), type (string: "todo" ან "backlog")
//
// ნაბიჯები:
// 1. fetch-ით გააგზავნე POST მოთხოვნა API_URL-ზე
// 2. headers-ში მიუთითე: "Content-Type": "application/json"
// 3. body-ში გააგზავნე: { title, type } (არ დაგავიწყდეს JSON.stringify!)
// 4. წარმატების შემდეგ fetchTodos() გამოიძახე (თავიდან ჩატვირთე სია)
// 5. შეცდომის შემთხვევაში: showStatus("დამატება ვერ მოხერხდა", "error")
//
// გამოიყენე: async/await + try/catch

async function addTodo(title, type) {
  // შენი კოდი აქ
}

// -------- 3. changeType --------
// აღწერა: ტასკის ტიპის შეცვლა (todo → backlog ან backlog → todo)
//
// პარამეტრები: id (number), currentType (string: "todo" ან "backlog")
//
// ნაბიჯები:
// 1. გამოთვალე newType: თუ currentType === "todo" მაშინ "backlog", თუარადა "todo"
// 2. fetch-ით გააგზავნე PATCH მოთხოვნა: API_URL + "/" + id
//    (მაგ: "http://localhost:3000/todos/3")
// 3. headers-ში მიუთითე: "Content-Type": "application/json"
// 4. body-ში გააგზავნე: { type: newType }
// 5. წარმატების შემდეგ fetchTodos() გამოიძახე
// 6. შეცდომის შემთხვევაში: showStatus("შეცვლა ვერ მოხერხდა", "error")
//
// გამოიყენე: async/await + try/catch

async function changeType(id, currentType) {
  // შენი კოდი აქ
}

// -------- 4. deleteTodo --------
// აღწერა: ტასკის წაშლა სერვერიდან
//
// პარამეტრები: id (number)
//
// ნაბიჯები:
// 1. fetch-ით გააგზავნე DELETE მოთხოვნა: API_URL + "/" + id
// 2. წარმატების შემდეგ fetchTodos() გამოიძახე
// 3. შეცდომის შემთხვევაში: showStatus("წაშლა ვერ მოხერხდა", "error")
//
// გამოიყენე: async/await + try/catch

async function deleteTodo(id) {
  // შენი კოდი აქ
}

// -------- 5. ფორმის Event Listener --------
// აღწერა: ფორმის submit-ზე ახალი ტასკის დამატება
//
// ნაბიჯები:
// 1. addForm-ზე დაამატე "submit" event listener
// 2. event.preventDefault() გამოიძახე (გვერდის გადატვირთვის თავიდან ასაცილებლად)
// 3. taskInput.value.trim()-ით აიღე ტექსტი
// 4. typeSelect.value-ით აიღე ტიპი
// 5. თუ ტექსტი ცარიელი არაა, გამოიძახე addTodo(title, type)
// 6. ფორმის გასუფთავება: taskInput.value = ""

// შენი კოდი აქ

// -------- 6. საწყისი ჩატვირთვა --------
// აღწერა: გვერდის ჩატვირთვისას fetchTodos გამოიძახე

// შენი კოდი აქ
