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


// --- ნაწილი 2: querySelector ---


// --- ნაწილი 3: querySelectorAll ---


// --- ნაწილი 4: getElementsByClassName ---


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


// --- ნაწილი 2: innerHTML vs textContent ---


// --- ნაწილი 3: style ---
