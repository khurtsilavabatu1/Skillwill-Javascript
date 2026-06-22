'use strict';

////////////////////////////////////
// DOM Manipulation — Challenges
// Student Portal (challenges.html)
////////////////////////////////////

////////////////////////////////////
// Challenge #1
// createElement, appendChild, textContent, classList
////////////////////////////////////

/*
სტუდენტის პროფილის აგება — createElement და appendChild:

1. შექმენი 3 სტუდენტის პროფილის ბარათი დინამიურად createElement-ის გამოყენებით.
   სტუდენტების მონაცემები:
   - გიორგი ბერიძე, giorgi@skillwill.ge, Frontend Developer
   - ნინო ლომიძე, nino@skillwill.ge, Backend Developer
   - დათო ხარაიშვილი, dato@skillwill.ge, Full-Stack Developer

2. თითოეულ ბარათს უნდა ჰქონდეს:
   - div (კლასი: 'profile-section') — მთავარი კონტეინერი
   - div (კლასი: 'student-avatar') — სახელის პირველი ასო
   - div (კლასი: 'student-info') — ინფორმაციის კონტეინერი
   - h3 — სახელი და გვარი
   - p — ელ.ფოსტა
   - p — როლი

3. classList.add გამოიყენე კლასების დასამატებლად

4. appendChild-ით დაამატე ყველა ბარათი '#profile-container'-ში

5. '#profile-output'-ში ჩაწერე textContent: '3 პროფილი შეიქმნა'


HINT: document.createElement('div') → ახალი div ელემენტი
HINT: element.classList.add('class-name') → კლასის დამატება
HINT: parent.appendChild(child) → შვილის დამატება
HINT: element.textContent = 'text' → ტექსტის ჩაწერა
HINT: string.charAt(0) → პირველი სიმბოლო

GOOD LUCK 😀
*/

// --- Solution ---
const students = [
  { name: 'გიორგი ბერიძე', email: 'giorgi@skillwill.ge', role: 'Frontend Developer' },
  { name: 'ნინო ლომიძე', email: 'nino@skillwill.ge', role: 'Backend Developer' },
  { name: 'დათო ხარაიშვილი', email: 'dato@skillwill.ge', role: 'Full-Stack Developer' },
];

const profileContainer = document.getElementById('profile-container');

students.forEach(function (student) {
  const card = document.createElement('div');
  card.classList.add('profile-section');

  const avatar = document.createElement('div');
  avatar.classList.add('student-avatar');
  avatar.textContent = student.name.charAt(0);

  const info = document.createElement('div');
  info.classList.add('student-info');

  const nameEl = document.createElement('h3');
  nameEl.textContent = student.name;

  const emailEl = document.createElement('p');
  emailEl.textContent = student.email;

  const roleEl = document.createElement('p');
  roleEl.textContent = 'Role: ' + student.role;

  info.appendChild(nameEl);
  info.appendChild(emailEl);
  info.appendChild(roleEl);

  card.appendChild(avatar);
  card.appendChild(info);

  profileContainer.appendChild(card);
});

document.getElementById('profile-output').textContent = '3 პროფილი შეიქმნა';

////////////////////////////////////
// Challenge #2
// insertBefore, removeChild, while loop
////////////////////////////////////

/*
შეტყობინებების სისტემა — insertBefore და removeChild:

1. "Add Urgent Notification" ღილაკზე დაჭერისას:
   - შექმენი ახალი div, დაამატე კლასები 'notification' და 'urgent'
   - textContent ჩაწერე: '⚠️ Urgent #N: სასწრაფო შეტყობინება!'
     (N — მიმდინარე ნომერი, მთვლელით)
   - insertBefore-ით ჩასვი სიის თავში (firstChild-ის წინ)

2. "Add Success Notification" ღილაკზე დაჭერისას:
   - შექმენი ახალი div, დაამატე კლასები 'notification' და 'success'
   - textContent ჩაწერე: '✅ Success #N: ოპერაცია წარმატებით შესრულდა!'
   - appendChild-ით დაამატე სიის ბოლოში

3. "Remove Oldest" ღილაკზე დაჭერისას:
   - removeChild-ით წაშალე პირველი შეტყობინება (firstChild)
   - თუ სია ცარიელია, არაფერი გააკეთო

4. "Clear All" ღილაკზე დაჭერისას:
   - while ციკლით წაშალე ყველა შეტყობინება
     (while list has firstChild → removeChild)


HINT: parent.insertBefore(newNode, referenceNode) → ჩასმა referenceNode-ის წინ
HINT: parent.removeChild(child) → შვილის წაშლა
HINT: parent.firstChild → პირველი შვილი
HINT: while (parent.firstChild) { parent.removeChild(parent.firstChild); }

GOOD LUCK 😀
*/

// --- Solution ---
const notificationList = document.getElementById('notification-list');
let notificationCounter = 0;

document.getElementById('btn-add-urgent').addEventListener('click', function () {
  notificationCounter++;
  const notification = document.createElement('div');
  notification.classList.add('notification', 'urgent');
  notification.textContent = '⚠️ Urgent #' + notificationCounter + ': სასწრაფო შეტყობინება!';
  notificationList.insertBefore(notification, notificationList.firstChild);
});

document.getElementById('btn-add-success').addEventListener('click', function () {
  notificationCounter++;
  const notification = document.createElement('div');
  notification.classList.add('notification', 'success');
  notification.textContent = '✅ Success #' + notificationCounter + ': ოპერაცია წარმატებით შესრულდა!';
  notificationList.appendChild(notification);
});

document.getElementById('btn-remove-oldest').addEventListener('click', function () {
  if (notificationList.firstChild) {
    notificationList.removeChild(notificationList.firstChild);
  }
});

document.getElementById('btn-clear-all').addEventListener('click', function () {
  while (notificationList.firstChild) {
    notificationList.removeChild(notificationList.firstChild);
  }
});

////////////////////////////////////
// Challenge #3
// DocumentFragment, createElement (table),
// removeChild (last row)
////////////////////////////////////

/*
კურსების ცხრილი — DocumentFragment და ცხრილის მანიპულაცია:

1. "Build Schedule" ღილაკზე დაჭერისას:
   - შექმენი DocumentFragment
   - courses მასივიდან თითოეული კურსისთვის შექმენი tr ელემენტი
   - თითოეულ tr-ში შექმენი 4 td (კურსი, ლექტორი, დღე, საათები)
   - appendChild-ით დაამატე td-ები tr-ში, tr-ები fragment-ში
   - fragment appendChild-ით დაამატე tbody-ში
   - '#table-output'-ში ჩაწერე: 'ცხრილი აიგო: N კურსი'

   კურსების მონაცემები:
   [
     ['JavaScript საფუძვლები', 'გიორგი ლომიძე', 'ორშაბათი', 2],
     ['React Framework', 'ნინო ბერიძე', 'სამშაბათი', 3],
     ['Node.js Backend', 'დათო ხარაიშვილი', 'ოთხშაბათი', 2],
     ['TypeScript', 'მარიამ კაპანაძე', 'ხუთშაბათი', 2],
     ['საპროექტო სამუშაო', 'ლევან გიგაური', 'პარასკევი', 4]
   ]

2. "Add Course" ღილაკზე დაჭერისას:
   - შექმენი ახალი tr, 4 td-ით
   - მონაცემები: 'ახალი კურსი', 'ლექტორი', 'შაბათი', 1
   - appendChild-ით დაამატე tbody-ს ბოლოში
   - განაახლე output: 'სულ: N კურსი'

3. "Remove Last Row" ღილაკზე დაჭერისას:
   - tbody.lastElementChild-ით იპოვე ბოლო tr
   - removeChild-ით წაშალე
   - თუ tbody ცარიელია, არაფერი გააკეთო
   - განაახლე output: 'სულ: N კურსი'


HINT: document.createDocumentFragment() → ფრაგმენტი (ბატჩ ჩასმა)
HINT: document.createElement('tr') → ცხრილის რიგი
HINT: document.createElement('td') → ცხრილის უჯრა
HINT: tbody.lastElementChild → ბოლო tr ელემენტი
HINT: tbody.children.length → რიგების რაოდენობა

GOOD LUCK 😀
*/

// --- Solution ---
const courseTable = document.getElementById('course-table');
const tbody = courseTable.querySelector('tbody');
const tableOutput = document.getElementById('table-output');

const courses = [
  ['JavaScript საფუძვლები', 'გიორგი ლომიძე', 'ორშაბათი', 2],
  ['React Framework', 'ნინო ბერიძე', 'სამშაბათი', 3],
  ['Node.js Backend', 'დათო ხარაიშვილი', 'ოთხშაბათი', 2],
  ['TypeScript', 'მარიამ კაპანაძე', 'ხუთშაბათი', 2],
  ['საპროექტო სამუშაო', 'ლევან გიგაური', 'პარასკევი', 4],
];

function updateTableOutput() {
  const rowCount = tbody.children.length;
  tableOutput.textContent = 'სულ: ' + rowCount + ' კურსი';
}

document.getElementById('btn-build-table').addEventListener('click', function () {
  const fragment = document.createDocumentFragment();

  courses.forEach(function (course) {
    const tr = document.createElement('tr');

    course.forEach(function (cellData) {
      const td = document.createElement('td');
      td.textContent = cellData;
      tr.appendChild(td);
    });

    fragment.appendChild(tr);
  });

  tbody.appendChild(fragment);
  tableOutput.textContent = 'ცხრილი აიგო: ' + courses.length + ' კურსი';
});

document.getElementById('btn-add-row').addEventListener('click', function () {
  const tr = document.createElement('tr');
  const rowData = ['ახალი კურსი', 'ლექტორი', 'შაბათი', 1];

  rowData.forEach(function (cellData) {
    const td = document.createElement('td');
    td.textContent = cellData;
    tr.appendChild(td);
  });

  tbody.appendChild(tr);
  updateTableOutput();
});

document.getElementById('btn-remove-last-row').addEventListener('click', function () {
  if (tbody.lastElementChild) {
    tbody.removeChild(tbody.lastElementChild);
    updateTableOutput();
  }
});
