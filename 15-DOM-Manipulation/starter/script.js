'use strict';

////////////////////////////////////
// DOM Manipulation — Starter File
// შეავსე ქვემოთ მოცემული სექციები
////////////////////////////////////

////////////////////////////////////
// 1. createElement + appendChild
////////////////////////////////////

// TODO: აიღე რეფერენსები ელემენტებზე:
//   - #task-input (ინპუტი)
//   - #task-priority (სელექტი)
//   - #btn-add-task (ღილაკი)
//   - #task-list (სია)
//   - #output-1 (აუთფუთი)

// TODO: შექმენი ფუნქცია createTaskItem(text, priority), რომელიც:
//   1. შექმნის ახალ <li> ელემენტს (className: 'task-item')
//   2. შექმნის პრიორიტეტის <span> ბეჯს (className: 'priority-badge priority-${priority}')
//   3. შექმნის ტექსტის <span>-ს
//   4. შექმნის წაშლის <button>-ს (className: 'delete-btn', innerHTML: '&times;')
//   5. წაშლის ღილაკზე კლიკისას li.remove() გამოიძახოს
//   6. appendChild-ით ყველაფერი li-ში ჩასვას
//   7. დააბრუნოს li ელემენტი

// TODO: "Add Task" ღილაკზე კლიკისას:
//   1. წაიკითხე ინპუტის მნიშვნელობა
//   2. შექმენი ახალი task createTaskItem-ით
//   3. appendChild-ით დაამატე task-list-ში
//   4. გაასუფთავე ინპუტი

// TODO: უკვე არსებულ delete ღილაკებზე დაამატე event listener
//   (querySelectorAll('#task-list .delete-btn'))

////////////////////////////////////
// 2. insertBefore / prepend
////////////////////////////////////

// TODO: აიღე რეფერენსები:
//   - #notification-area
//   - #btn-add-urgent
//   - #btn-add-info
//   - #output-2

// TODO: შექმენი ფუნქცია createNotification(type, message)
//   რომელიც ქმნის div-ს className: `notification ${type}` და textContent

// TODO: "Add Urgent (Top)" ღილაკზე:
//   — insertBefore(newNotif, notificationArea.firstChild) გამოიყენე

// TODO: "Add Info (Bottom)" ღილაკზე:
//   — appendChild გამოიყენე

////////////////////////////////////
// 3. remove / removeChild
////////////////////////////////////

// TODO: აიღე რეფერენსები:
//   - #remove-list
//   - #btn-remove-first, #btn-remove-last, #btn-clear-all
//   - #output-3

// TODO: "Remove First" — removeChild(list.firstElementChild) გამოიყენე

// TODO: "Remove Last" — lastElementChild.remove() გამოიყენე

// TODO: "Clear All" — while ციკლით ყველა შვილი წაშალე

////////////////////////////////////
// 4. replaceChild / replaceWith
////////////////////////////////////

// TODO: აიღე რეფერენსი #btn-update-card -ზე

// TODO: კლიკისას:
//   1. შექმენი სრულიად ახალი profile-card ელემენტი
//   2. replaceWith()-ით ძველი ბარათი ახლით შეცვალე

////////////////////////////////////
// 5. cloneNode
////////////////////////////////////

// TODO: აიღე რეფერენსები:
//   - #template-card
//   - #btn-clone
//   - #clone-container

// TODO: კლიკისას:
//   1. cloneNode(true) — ღრმა კლონი
//   2. კლონს შეუცვალე id (უნიკალური უნდა იყოს!)
//   3. კლონის შიგთავსი მოდიფიცირე
//   4. appendChild-ით დაამატე clone-container-ში

////////////////////////////////////
// 6. DocumentFragment
////////////////////////////////////

// TODO: აიღე რეფერენსები:
//   - #btn-generate-students
//   - #fragment-container

// ქართული სახელების მასივი
// const georgianNames = ['გიორგი', 'ნინო', 'დათო', 'ანა', 'მარიამ',
//   'ლუკა', 'სოფო', 'ნიკა', 'ელენე', 'გიგა'];
// const georgianSurnames = ['ბერიძე', 'კაპანაძე', 'გელაშვილი', 'ლომიძე',
//   'ჯავახიშვილი', 'ხურცილავა', 'მეგრელიშვილი', 'წერეთელი', 'ჩხეიძე', 'ნოზაძე'];

// TODO: კლიკისას:
//   1. შექმენი DocumentFragment: document.createDocumentFragment()
//   2. for ციკლით 20 student-card შექმენი
//   3. თითოეული card-ისთვის: student-index span + სახელის span
//   4. card-ები fragment-ში დაამატე (არა DOM-ში!)
//   5. ბოლოს fragment ერთბაშად დაამატე DOM-ში: container.appendChild(fragment)
