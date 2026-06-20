"use strict";

////////////////////////////////////
// DOM Basics — Challenges
// Student Dashboard (challenges.html)
////////////////////////////////////

////////////////////////////////////
// Challenge #1
// getElementById, querySelector,
// querySelectorAll, getElementsByClassName
////////////////////////////////////

/*
ნაწილი 1 — getElementById:

1. იპოვე 'welcome-heading' და შეუცვალე textContent:
   'გამარჯობა, [შენი სახელი]!'

2. იპოვე 'student-avatar' და შეუცვალე textContent
   შენი სახელის პირველ ასოზე (მაგ: 'G')

3. იპოვე 'student-status', შეუცვალე textContent: 'Status: Active'


ნაწილი 2 — querySelector:

4. იპოვე '.student-name-display' და შეუცვალე textContent
   შენს სახელზე

5. იპოვე '.student-email' და შეუცვალე: 'yourname@skillwill.ge'

6. იპოვე '.student-role' და შეუცვალე: 'Role: Frontend Developer'


ნაწილი 3 — querySelectorAll:

7. იპოვე ყველა '.course-card', დალოგე რამდენია სულ

8. იპოვე ყველა '.course-progress'. for ციკლით გაიარე —
   ვისი textContent შეიცავს '100%', იმის parentElement-ს
   დაამატე კლასი 'completed'


ნაწილი 4 — getElementsByClassName:

9. იპოვე ყველა 'skill-badge'. for ციკლით გაიარე —
   ვისაც classList.contains('frontend'), დაამატე კლასი 'active'


HINT: getElementById('id') → ერთი ელემენტი ან null
HINT: querySelector('.class') → პირველი ემთხვევა
HINT: querySelectorAll('.class') → NodeList (forEach, length)
HINT: getElementsByClassName('class') → HTMLCollection (for ციკლი)
HINT: element.parentElement → მშობელი ელემენტი

GOOD LUCK 😀
*/

// --- ნაწილი 1: getElementById ---
document.getElementById("welcome-heading").textContent = "გამარჯობა, გიორგი!";
document.getElementById("student-avatar").textContent = "G";
document.getElementById("student-status").textContent = "Status: Active";

// --- ნაწილი 2: querySelector ---
document.querySelector(".student-name-display").textContent = "გიორგი ლომიძე";
document.querySelector(".student-email").textContent = "giorgi@skillwill.ge";
document.querySelector(".student-role").textContent =
  "Role: Frontend Developer";

// --- ნაწილი 3: querySelectorAll ---
const allCourses = document.querySelectorAll(".course-card");
console.log("Total courses:", allCourses.length);

const progressElements = document.querySelectorAll(".course-progress");
for (let i = 0; i < progressElements.length; i++) {
  if (progressElements[i].textContent.includes("100%")) {
    progressElements[i].parentElement.classList.add("completed");
  }
}

// --- ნაწილი 4: getElementsByClassName ---
const allBadges = document.getElementsByClassName("skill-badge");
for (let i = 0; i < allBadges.length; i++) {
  if (allBadges[i].classList.contains("frontend")) {
    allBadges[i].classList.add("active");
  }
}

////////////////////////////////////
// Challenge #2
// getElementsByTagName, innerHTML,
// textContent, style
////////////////////////////////////

/*
ნაწილი 1 — getElementsByTagName:

1. იპოვე 'schedule-table' getElementById-ით.
   getElementsByTagName-ით ამოიღე tbody, შემდეგ მისი tr-ები.

2. for ციკლით გაიარე რიგები, ყოველი რიგის td უჯრებიდან
   ამოიღე duration (მე-4 სვეტი, ინდექსი 3) და დაჯამე.
   ყველაზე გრძელი გაკვეთილის რიგს შეუცვალე
   style.backgroundColor = '#e8f5e9'

3. იპოვე 'output-schedule' და ჩაწერე textContent-ით:
   'Total: X hours this week'


ნაწილი 2 — innerHTML vs textContent:

4. იპოვე '#announcements' querySelector-ით.
   innerHTML = '' — წაშალე empty-state ტექსტი.

5. innerHTML += გამოიყენე 2 განცხადების დასამატებლად:
   - <div class="announcement urgent">📝 პროექტის deadline: პარასკევი!</div>
   - <div class="announcement success">✅ JavaScript Basics დასრულდა!</div>


ნაწილი 3 — style:

6. იპოვე 'theme-box' და შეუცვალე:
   - style.backgroundColor = '#1a237e'
   - style.color = '#ffffff'
   - style.fontWeight = 'bold'
   - textContent = 'Dark Theme Activated! 🌙'


HINT: getElementsByTagName('tbody')[0] → პირველი tbody
HINT: row.getElementsByTagName('td') → რიგის უჯრები
HINT: Number(cell.textContent) → ტექსტი რიცხვად
HINT: innerHTML პარსავს HTML-ს, textContent — არა (უსაფრთხო)
HINT: style.backgroundColor — camelCase!

GOOD LUCK 😀
*/

// --- ნაწილი 1: getElementsByTagName ---
// const table = document.getElementById('schedule-table');
// const tbody = table.getElementsByTagName('tbody')[0];
// const rows = tbody.getElementsByTagName('tr');

// let totalHours = 0;
// let longestDuration = 0;
// let longestIndex = 0;

// for (let i = 0; i < rows.length; i++) {
//   const cells = rows[i].getElementsByTagName('td');
//   const duration = Number(cells[3].textContent);
//   totalHours += duration;
//   if (duration > longestDuration) {
//     longestDuration = duration;
//     longestIndex = i;
//   }
// }

// rows[longestIndex].style.backgroundColor = '#e8f5e9';

// document.getElementById('output-schedule').textContent =
//   `Total: ${totalHours} hours this week`;

// --- ნაწილი 2: innerHTML vs textContent ---
// const announcements = document.querySelector('#announcements');
// announcements.innerHTML = '';
// announcements.innerHTML += '<div class="announcement urgent">📝 პროექტის deadline: პარასკევი!</div>';
// announcements.innerHTML += '<div class="announcement success">✅ JavaScript Basics დასრულდა!</div>';

// --- ნაწილი 3: style ---
// const themeBox = document.getElementById('theme-box');
// themeBox.style.backgroundColor = '#1a237e';
// themeBox.style.color = '#ffffff';
// themeBox.style.fontWeight = 'bold';
// themeBox.textContent = 'Dark Theme Activated! 🌙';
