"use strict";

////////////////////////////////////
// 1. createElement + appendChild
////////////////////////////////////

// createElement — ახალი HTML ელემენტის შექმნა JavaScript-ით.
// appendChild — შექმნილი ელემენტის მშობელ ელემენტზე მიმაგრება (ბოლოში).
// remove() — ელემენტის წაშლა DOM-იდან.

const taskInput = document.getElementById("task-input");
const taskPriority = document.getElementById("task-priority");
const btnAddTask = document.getElementById("btn-add-task");
const taskList = document.getElementById("task-list");
const output1 = document.getElementById("output-1");

// დავალების შექმნის ფუნქცია
function createTaskItem(text, priority) {
  // ახალი <li> ელემენტის შექმნა
  const li = document.createElement("li"); //<li></li>
  li.className = "task-item";

  // პრიორიტეტის ბეჯის შექმნა
  const badge = document.createElement("span");
  badge.className = `priority-badge priority-${priority}`;
  badge.textContent =
    priority === "high" ? "High" : priority === "medium" ? "Medium" : "Low";

  // დავალების ტექსტის შექმნა
  const taskText = document.createElement("span");
  taskText.textContent = text;

  // წაშლის ღილაკის შექმნა
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerHTML = "&times;";

  // წაშლის ღილაკზე კლიკის მოვლენა — remove() მეთოდი
  deleteBtn.addEventListener("click", function () {
    li.remove();
    console.log(`წაშლილია: "${text}"`);
  });

  // ელემენტების მიმაგრება <li>-ზე
  li.appendChild(badge);
  li.appendChild(taskText);
  li.appendChild(deleteBtn);

  return li;
}

// "Add Task" ღილაკის კლიკის მოვლენა
btnAddTask.addEventListener("click", function () {
  const text = taskInput.value.trim();
  if (!text) {
    output1.textContent = "გთხოვთ შეიყვანოთ დავალების ტექსტი!";
    return;
  }

  const priority = taskPriority.value;

  // ახალი დავალების შექმნა და სიაში დამატება
  const newTask = createTaskItem(text, priority);
  taskList.appendChild(newTask);

  // კონსოლში შექმნილი ელემენტის ჩვენება
  console.log("შექმნილი ელემენტი:", newTask);
  console.log("tagName:", newTask.tagName);
  console.log("className:", newTask.className);
  console.log("childNodes:", newTask.childNodes.length);

  output1.textContent = `დამატებულია: "${text}" (პრიორიტეტი: ${priority})`;

  // ინპუტის გასუფთავება
  taskInput.value = "";
});

// უკვე არსებულ წაშლის ღილაკებზე მოვლენის დამატება
document.querySelectorAll("#task-list .delete-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const taskItem = btn.closest(".task-item");
    const taskText = taskItem.querySelector("span:nth-child(2)").textContent;
    taskItem.remove();
    console.log(`წაშლილია: "${taskText}"`);
  });
});

////////////////////////////////////
// 2. insertBefore / prepend
////////////////////////////////////

// insertBefore(newNode, referenceNode) — ახალ ელემენტს სვამს მითითებული
// ელემენტის წინ. თუ referenceNode არის null, მაშინ ბოლოში დაამატებს.
// prepend() — ელემენტს ამატებს კონტეინერის თავში (პირველ ელემენტად).
// appendChild() — ელემენტს ამატებს კონტეინერის ბოლოში.

const notificationArea = document.getElementById("notification-area");
const btnAddUrgent = document.getElementById("btn-add-urgent");
const btnAddInfo = document.getElementById("btn-add-info");
const output2 = document.getElementById("output-2");

let notificationCounter = 0;

// შეტყობინების ელემენტის შექმნის ფუნქცია
function createNotification(type, message) {
  const div = document.createElement("div");
  div.className = `notification ${type}`;
  div.textContent = message;
  return div;
}

// "Add Urgent (Top)" — insertBefore-ით თავში ამატებს
btnAddUrgent.addEventListener("click", function () {
  notificationCounter++;
  const message = `Urgent #${notificationCounter}: გადაუდებელი შეტყობინება!`;
  const newNotif = createNotification("urgent", message);

  // insertBefore — ახალ ელემენტს ამატებს პირველი შვილი ელემენტის წინ
  notificationArea.insertBefore(newNotif, notificationArea.firstChild);

  console.log("insertBefore გამოყენებულია — ელემენტი თავში დაემატა");
  output2.textContent = `insertBefore: "${message}" დაემატა თავში`;
});

// "Add Info (Bottom)" — appendChild-ით ბოლოში ამატებს
btnAddInfo.addEventListener("click", function () {
  notificationCounter++;
  const message = `Info #${notificationCounter}: ინფორმაციული შეტყობინება.`;
  const newNotif = createNotification("info", message);

  // appendChild — ბოლოში ამატებს
  notificationArea.appendChild(newNotif);

  console.log("appendChild გამოყენებულია — ელემენტი ბოლოში დაემატა");
  output2.textContent = `appendChild: "${message}" დაემატა ბოლოში`;
});

////////////////////////////////////
// 3. remove / removeChild
////////////////////////////////////

// remove() — ელემენტი თავის თავს წაშლის DOM-იდან.
// removeChild(child) — მშობელი ელემენტი წაშლის მითითებულ შვილ ელემენტს.
// ორივე ერთსა და იმავეს აკეთებს, მაგრამ სინტაქსი განსხვავდება.

const removeList = document.getElementById("remove-list");
const btnRemoveFirst = document.getElementById("btn-remove-first");
const btnRemoveLast = document.getElementById("btn-remove-last");
const btnClearAll = document.getElementById("btn-clear-all");
const output3 = document.getElementById("output-3");

// "Remove First" — removeChild-ით პირველი ელემენტის წაშლა
btnRemoveFirst.addEventListener("click", function () {
  const firstItem = removeList.firstElementChild;
  if (firstItem) {
    const text = firstItem.textContent;
    // removeChild — მშობელი ელემენტი წაშლის შვილს
    removeList.removeChild(firstItem);
    console.log(`removeChild: წაშლილია პირველი — "${text}"`);
    output3.textContent = `removeChild: წაშლილია პირველი — "${text}"`;
  } else {
    output3.textContent = "სია ცარიელია!";
  }
});

// "Remove Last" — remove()-ით ბოლო ელემენტის წაშლა
btnRemoveLast.addEventListener("click", function () {
  const lastItem = removeList.lastElementChild;
  if (lastItem) {
    const text = lastItem.textContent;
    // remove() — ელემენტი თავის თავს წაშლის
    lastItem.remove();
    console.log(`remove(): წაშლილია ბოლო — "${text}"`);
    output3.textContent = `remove(): წაშლილია ბოლო — "${text}"`;
  } else {
    output3.textContent = "სია ცარიელია!";
  }
});

// "Clear All" — while ციკლით ყველა ელემენტის წაშლა
btnClearAll.addEventListener("click", function () {
  let count = 0;
  // while ციკლი — სანამ შვილი ელემენტები არსებობს, წაშალე პირველი
  while (removeList.firstChild) {
    removeList.removeChild(removeList.firstChild);
    count++;
  }
  console.log(`Clear All: წაშლილია ${count} ელემენტი`);
  output3.textContent = `Clear All: წაშლილია ყველა ელემენტი (${count})`;
});

////////////////////////////////////
// 4. replaceChild / replaceWith
////////////////////////////////////

// replaceChild(newChild, oldChild) — მშობელი ელემენტი ძველ შვილს ახლით ანაცვლებს.
// replaceWith(newElement) — ელემენტი თავის თავს ანაცვლებს ახალი ელემენტით.
// replaceWith უფრო თანამედროვე და მოსახერხებელი მეთოდია.

const btnUpdateCard = document.getElementById("btn-update-card");
const output4 = document.getElementById("output-4");

btnUpdateCard.addEventListener("click", function () {
  const oldCard = document.getElementById("old-card");

  if (!oldCard) {
    output4.textContent = "ბარათი უკვე განახლებულია!";
    return;
  }

  // ახალი ბარათის სრულად შექმნა
  const newCard = document.createElement("div");
  newCard.id = "old-card";
  newCard.className = "profile-card";
  newCard.style.background = "#e8f5e9";

  const avatar = document.createElement("div");
  avatar.className = "profile-avatar";
  avatar.style.background = "#2e7d32";
  avatar.textContent = "G";

  const info = document.createElement("div");
  info.className = "profile-info";

  const name = document.createElement("h3");
  name.textContent = "Giorgi Lomidze";
  name.style.color = "#1b5e20";

  const role = document.createElement("p");
  role.textContent = "Senior Full Stack Developer";

  const email = document.createElement("p");
  email.textContent = "giorgi@skillwill.ge";

  info.appendChild(name);
  info.appendChild(role);
  info.appendChild(email);

  newCard.appendChild(avatar);
  newCard.appendChild(info);

  // replaceWith — ძველ ბარათს ახლით ანაცვლებს
  oldCard.replaceWith(newCard);

  console.log("replaceWith: ძველი ბარათი ახლით შეიცვალა");
  console.log("ახალი ელემენტი:", newCard);
  output4.textContent =
    "replaceWith: ბარათი წარმატებით განახლდა! (Nino -> Giorgi)";
});

////////////////////////////////////
// 5. cloneNode
////////////////////////////////////

// cloneNode(deep) — ელემენტის კოპირება (კლონირება).
// cloneNode(false) — მხოლოდ ელემენტის კოპირება (შვილების გარეშე).
// cloneNode(true) — ღრმა კოპირება (ყველა შვილი ელემენტით).
// მნიშვნელოვანი: კლონს იგივე id ექნება, ამიტომ id უნდა შეცვალო!

const templateCard = document.getElementById("template-card");
const btnClone = document.getElementById("btn-clone");
const cloneContainer = document.getElementById("clone-container");
const output5 = document.getElementById("output-5");

let cloneCounter = 0;

btnClone.addEventListener("click", function () {
  cloneCounter++;

  // cloneNode(true) — ღრმა კლონირება (ყველა შვილი ელემენტით)
  const clone = templateCard.cloneNode(true);

  // კლონის id-ის შეცვლა (id უნიკალური უნდა იყოს!)
  clone.id = `clone-card-${cloneCounter}`;

  // კლონის შიგთავსის მოდიფიკაცია
  clone.querySelector(".card-icon").textContent = cloneCounter;
  clone.querySelector(".card-body h4").textContent = `Clone #${cloneCounter}`;
  clone.querySelector(".card-body p").textContent =
    `ეს არის კლონი #${cloneCounter}, რომელიც cloneNode(true)-ით შეიქმნა.`;

  // კლონის დამატება კონტეინერში
  cloneContainer.appendChild(clone);

  console.log(`cloneNode(true): შეიქმნა კლონი #${cloneCounter}`);
  console.log("კლონის id:", clone.id);
  console.log("კლონი === ორიგინალი?", clone === templateCard); // false
  output5.textContent = `cloneNode(true): შეიქმნა კლონი #${cloneCounter} (id: ${clone.id})`;
});

////////////////////////////////////
// 6. DocumentFragment
////////////////////////////////////

// DocumentFragment — "უხილავი" კონტეინერი, რომელიც DOM-ში არ ჩნდება.
// გამოიყენება მრავალი ელემენტის ერთდროულად დამატებისთვის (ბატჩ ჩასმა).
// უპირატესობა: DOM-ს მხოლოდ ერთხელ ანახლებს, რაც performance-ს აუმჯობესებს.

const btnGenerateStudents = document.getElementById("btn-generate-students");
const fragmentContainer = document.getElementById("fragment-container");
const output6 = document.getElementById("output-6");

// ქართული სახელების მასივი
const georgianNames = [
  "გიორგი",
  "ნინო",
  "დათო",
  "ანა",
  "მარიამ",
  "ლუკა",
  "სოფო",
  "ნიკა",
  "ელენე",
  "გიგა",
];

// ქართული გვარების მასივი
const georgianSurnames = [
  "ბერიძე",
  "კაპანაძე",
  "გელაშვილი",
  "ლომიძე",
  "ჯავახიშვილი",
  "ხურცილავა",
  "მეგრელიშვილი",
  "წერეთელი",
  "ჩხეიძე",
  "ნოზაძე",
];

btnGenerateStudents.addEventListener("click", function () {
  // კონტეინერის გასუფთავება
  fragmentContainer.innerHTML = "";

  // DocumentFragment-ის შექმნა
  const fragment = document.createDocumentFragment();

  console.log("DocumentFragment შეიქმნა:", fragment);
  console.log("fragment.nodeType:", fragment.nodeType); // 11
  console.log("fragment.nodeName:", fragment.nodeName); // #document-fragment

  // დროის გაზომვა — performance-ის დემონსტრაცია
  const startTime = performance.now();

  // 20 სტუდენტის ბარათის შექმნა
  for (let i = 1; i <= 20; i++) {
    const card = document.createElement("div");
    card.className = "student-card";

    // ინდექსის ბეჯი
    const indexBadge = document.createElement("span");
    indexBadge.className = "student-index";
    indexBadge.textContent = i;

    // სტუდენტის სახელი (შემთხვევითი სახელი + გვარი)
    const nameSpan = document.createElement("span");
    const randomName =
      georgianNames[Math.floor(Math.random() * georgianNames.length)];
    const randomSurname =
      georgianSurnames[Math.floor(Math.random() * georgianSurnames.length)];
    nameSpan.textContent = `${randomName} ${randomSurname}`;

    card.appendChild(indexBadge);
    card.appendChild(nameSpan);

    // ბარათის დამატება fragment-ში (არა DOM-ში!)
    fragment.appendChild(card);
  }
  console.log(fragment);
  
  // მთლიანი fragment-ის ერთბაშად დამატება DOM-ში
  fragmentContainer.appendChild(fragment);

  const endTime = performance.now();
  const duration = (endTime - startTime).toFixed(2);

  console.log(`DocumentFragment: 20 სტუდენტი დაემატა ${duration}ms-ში`);
  console.log("fragment ბოლოს ცარიელია:", fragment.childNodes.length === 0);
  output6.textContent = `DocumentFragment: 20 სტუდენტი შეიქმნა და DOM-ში დაემატა ${duration}ms-ში`;
});
