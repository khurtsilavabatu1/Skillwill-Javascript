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

// Your code here...


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

// Your code here...


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

// Your code here...
