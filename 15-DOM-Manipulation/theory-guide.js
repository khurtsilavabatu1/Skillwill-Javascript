////////////////////////////////////
// DOM Element Manipulation
// Comprehensive Theory Guide with Examples
////////////////////////////////////

'use strict';

/*
═══════════════════════════════════════════════════════════════
1. createElement
═══════════════════════════════════════════════════════════════

document.createElement('tagName') creates a new HTML element
in memory. The element is NOT yet part of the visible DOM tree.
You must explicitly insert it for it to appear on the page.
*/

// Creating different types of elements
const div = document.createElement('div');
const paragraph = document.createElement('p');
const listItem = document.createElement('li');
const button = document.createElement('button');
const image = document.createElement('img');

console.log(div); // <div></div>
console.log(typeof div); // "object"
console.log(div instanceof HTMLDivElement); // true
console.log(button instanceof HTMLButtonElement); // true

// Created element is not in the DOM yet
const banner = document.createElement('div');
console.log(banner.parentNode); // null


/*
═══════════════════════════════════════════════════════════════
2. ELEMENT PROPERTIES BEFORE INSERTION
═══════════════════════════════════════════════════════════════

After creating an element, configure it fully before inserting
into the DOM. The browser only renders once when the complete
element is inserted. Key properties:
- textContent / innerHTML — element content
- id / className / classList.add() — identity and classes
- setAttribute() — any HTML attribute
- style — inline CSS properties
*/

// textContent and innerHTML
const heading = document.createElement('h1');
heading.textContent = 'Welcome to Tbilisi';
console.log(heading.textContent); // "Welcome to Tbilisi"

const card = document.createElement('div');
card.innerHTML = '<h2>Giorgi Beridze</h2><p>Tour Guide</p>';

// id, className, classList
const notification = document.createElement('div');
notification.id = 'main-notification';
notification.className = 'alert'; // sets the ENTIRE class attribute
notification.classList.add('alert--success', 'visible');
console.log(notification.className); // "alert alert--success visible"

// setAttribute for any attribute
const link = document.createElement('a');
link.setAttribute('href', 'https://tbilisi.gov.ge');
link.setAttribute('target', '_blank');
link.setAttribute('data-city', 'Tbilisi');
link.textContent = 'Visit Tbilisi';
console.log(link.getAttribute('data-city')); // "Tbilisi"

// Inline styles
const badge = document.createElement('span');
badge.textContent = 'New';
badge.style.backgroundColor = '#e74c3c';
badge.style.color = 'white';
badge.style.padding = '4px 8px';

// Practical: fully configured before insertion
const userCard = document.createElement('article');
userCard.id = 'user-nino';
userCard.classList.add('card', 'card--featured');
userCard.setAttribute('data-role', 'instructor');
userCard.innerHTML = '<h3>Nino Kvaratskhelia</h3><p>Instructor in Batumi</p>';
userCard.style.border = '2px solid #2ecc71';


/*
═══════════════════════════════════════════════════════════════
3. appendChild
═══════════════════════════════════════════════════════════════

parent.appendChild(child) adds an element as the LAST child
of the parent. Returns the appended node.

IMPORTANT: If the child is already in the DOM, appendChild
MOVES it — it does NOT copy. An element can only exist in
one place in the DOM at a time.
*/

// Basic appendChild
const list = document.createElement('ul');
const item1 = document.createElement('li');
item1.textContent = 'Tbilisi';
list.appendChild(item1);
console.log(list.innerHTML); // "<li>Tbilisi</li>"

// appendChild returns the appended node
const item2 = document.createElement('li');
item2.textContent = 'Batumi';
const returned = list.appendChild(item2);
console.log(returned === item2); // true

// MOVING behavior — element is removed from old position
const containerA = document.createElement('div');
const containerB = document.createElement('div');
const message = document.createElement('p');
message.textContent = 'Hello from Giorgi';

containerA.appendChild(message);
console.log(containerA.children.length); // 1

containerB.appendChild(message); // MOVES, not copies
console.log(containerA.children.length); // 0
console.log(containerB.children.length); // 1

// Practical: building a list with a loop
const cities = ['Tbilisi', 'Batumi', 'Kutaisi', 'Rustavi', 'Zugdidi'];
const cityList = document.createElement('ul');

for (let i = 0; i < cities.length; i++) {
  const li = document.createElement('li');
  li.textContent = `${i + 1}. ${cities[i]}`;
  cityList.appendChild(li);
}
console.log(cityList.children.length); // 5
console.log(cityList.lastChild.textContent); // "5. Zugdidi"


/*
═══════════════════════════════════════════════════════════════
4. insertBefore
═══════════════════════════════════════════════════════════════

parent.insertBefore(newNode, referenceNode) inserts newNode
BEFORE referenceNode within the parent. Requires a parent
reference. If referenceNode is null, acts like appendChild.
*/

// Basic insertBefore
const menu = document.createElement('ul');
const homeItem = document.createElement('li');
homeItem.textContent = 'Home';
const contactItem = document.createElement('li');
contactItem.textContent = 'Contact';
menu.append(homeItem, contactItem); // Menu: Home -> Contact

const aboutItem = document.createElement('li');
aboutItem.textContent = 'About';
menu.insertBefore(aboutItem, contactItem);
console.log(menu.children[1].textContent); // "About" (Home -> About -> Contact)

// When referenceNode is null — acts like appendChild
const blogItem = document.createElement('li');
blogItem.textContent = 'Blog';
menu.insertBefore(blogItem, null);
console.log(menu.lastChild.textContent); // "Blog"

// Practical: inserting a notification at the top of a container
const notifContainer = document.createElement('div');
const existingNotif = document.createElement('p');
existingNotif.textContent = 'Dato enrolled in the JavaScript course.';
notifContainer.appendChild(existingNotif);

const urgentNotif = document.createElement('p');
urgentNotif.textContent = 'Nino submitted the final project!';
notifContainer.insertBefore(urgentNotif, notifContainer.firstChild);
console.log(notifContainer.firstChild.textContent);
// "Nino submitted the final project!"


/*
═══════════════════════════════════════════════════════════════
5. append / prepend / before / after
═══════════════════════════════════════════════════════════════

Modern DOM insertion methods. Key differences from appendChild:
1. Accept STRINGS as well as Nodes
2. Accept MULTIPLE arguments at once
3. Return undefined (NOT the inserted node)

- parent.append(nodes...)  — END of children
- parent.prepend(nodes...) — START of children
- element.before(nodes...) — before element (sibling)
- element.after(nodes...)  — after element (sibling)
*/

// append — like appendChild but more flexible
const studentList = document.createElement('ul');
const student1 = document.createElement('li');
student1.textContent = 'Ana';
studentList.append(student1);
studentList.append('Direct text node'); // strings accepted!

// Returns undefined, unlike appendChild
const result = studentList.append(document.createElement('li'));
console.log(result); // undefined

// Multiple arguments at once
const tagContainer = document.createElement('div');
const tag1 = document.createElement('span');
tag1.textContent = 'JavaScript';
const tag2 = document.createElement('span');
tag2.textContent = 'DOM';
tagContainer.append(tag1, tag2, ' | Georgian Devs');

// prepend — adds at the beginning
const todoList = document.createElement('ul');
const oldTask = document.createElement('li');
oldTask.textContent = 'Review Dato\'s homework';
todoList.appendChild(oldTask);

const newTask = document.createElement('li');
newTask.textContent = 'Prepare lecture on closures';
todoList.prepend(newTask);
console.log(todoList.firstChild.textContent); // "Prepare lecture on closures"

// before and after — inserts as siblings
const wrapper = document.createElement('div');
const mainContent = document.createElement('section');
wrapper.appendChild(mainContent);

const header = document.createElement('header');
header.textContent = 'Skillwill Academy';
mainContent.before(header);

const footer = document.createElement('footer');
footer.textContent = 'Tbilisi, Georgia';
mainContent.after(footer);
// wrapper now: header -> section -> footer


/*
═══════════════════════════════════════════════════════════════
6. removeChild
═══════════════════════════════════════════════════════════════

parent.removeChild(child) removes the child from its parent.
Requires a parent reference. RETURNS the removed node — you
can store it and re-insert it elsewhere.
*/

// Basic removeChild — returns the removed node
const fruitList = document.createElement('ul');
const apple = document.createElement('li');
apple.textContent = 'Apple';
const peach = document.createElement('li');
peach.textContent = 'Peach';
const grape = document.createElement('li');
grape.textContent = 'Grape';
fruitList.append(apple, peach, grape);

const removedFruit = fruitList.removeChild(peach);
console.log(fruitList.children.length); // 2
console.log(removedFruit.textContent); // "Peach" — still accessible

// Practical: removing from a course list
const courseList = document.createElement('ul');
['HTML', 'CSS', 'JavaScript', 'React'].forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  courseList.appendChild(li);
});
courseList.removeChild(courseList.lastChild);
console.log(courseList.lastChild.textContent); // "JavaScript"

// Removing all children (classic pattern)
while (courseList.firstChild) {
  courseList.removeChild(courseList.firstChild);
}
console.log(courseList.children.length); // 0


/*
═══════════════════════════════════════════════════════════════
7. remove()
═══════════════════════════════════════════════════════════════

element.remove() is the modern way to remove an element.
No parent reference needed — the element removes itself.
Returns undefined (not the removed node).
*/

// Basic remove()
const outdatedBanner = document.createElement('div');
outdatedBanner.textContent = 'This event in Batumi has ended.';
const pageBody = document.createElement('div');
pageBody.appendChild(outdatedBanner);

outdatedBanner.remove();
console.log(pageBody.children.length); // 0

// Practical: removing notifications on button click
// closeBtn.addEventListener('click', function () {
//   this.parentElement.remove(); // removes the parent notification
// });

const notifications = document.createElement('div');
const notif1 = document.createElement('div');
notif1.textContent = 'Giorgi liked your post.';
const notif2 = document.createElement('div');
notif2.textContent = 'Ana commented on your project.';
notifications.append(notif1, notif2);

notif1.remove(); // Giorgi's notification dismissed
console.log(notifications.children.length); // 1
console.log(notifications.firstChild.textContent);
// "Ana commented on your project."


/*
═══════════════════════════════════════════════════════════════
8. replaceChild / replaceWith
═══════════════════════════════════════════════════════════════

CLASSIC: parent.replaceChild(newChild, oldChild)
  - Requires parent reference; returns OLD node

MODERN: oldElement.replaceWith(newElement)
  - No parent needed; accepts strings; returns undefined
*/

// replaceChild — classic approach (returns old node)
const profileCard = document.createElement('div');
const oldName = document.createElement('h2');
oldName.textContent = 'Dato Mchedlishvili';
profileCard.appendChild(oldName);

const newName = document.createElement('h2');
newName.textContent = 'Dato Mchedlishvili (Instructor)';
const replaced = profileCard.replaceChild(newName, oldName);
console.log(replaced.textContent); // "Dato Mchedlishvili" — old node

// replaceWith — modern approach (returns undefined)
const statusBadge = document.createElement('span');
statusBadge.textContent = 'Pending';
const statusContainer = document.createElement('div');
statusContainer.appendChild(statusBadge);

const activeBadge = document.createElement('span');
activeBadge.textContent = 'Active';
statusBadge.replaceWith(activeBadge);
console.log(statusContainer.firstChild.textContent); // "Active"

// Practical: updating a course card
const courseCard = document.createElement('div');
courseCard.innerHTML = `
  <h3>JavaScript Basics</h3>
  <p>Instructor: Nino</p>
  <span class="status">Enrolling</span>
`;
const oldStatus = courseCard.querySelector('.status');
const newStatus = document.createElement('span');
newStatus.classList.add('status', 'status--full');
newStatus.textContent = 'Class Full';
oldStatus.replaceWith(newStatus);
console.log(courseCard.querySelector('.status').textContent); // "Class Full"


/*
═══════════════════════════════════════════════════════════════
9. cloneNode
═══════════════════════════════════════════════════════════════

element.cloneNode(deep) creates a copy of a DOM element.
- cloneNode(false) — SHALLOW: element + attributes only
- cloneNode(true)  — DEEP: element + all descendants

WARNING: Cloned elements keep the SAME id! You must change
it. Event listeners (addEventListener) are NOT cloned.
*/

// Shallow vs deep clone
const templateCard = document.createElement('div');
templateCard.id = 'template';
templateCard.classList.add('card', 'card--student');
templateCard.innerHTML = '<h3>Student Name</h3><p>Tbilisi Campus</p>';

const shallowCopy = templateCard.cloneNode(false);
console.log(shallowCopy.innerHTML); // "" — children NOT copied
console.log(shallowCopy.id); // "template" — same id! Must change

const deepCopy = templateCard.cloneNode(true);
console.log(deepCopy.innerHTML); // "<h3>Student Name</h3><p>Tbilisi Campus</p>"
deepCopy.id = 'student-giorgi'; // Fix the duplicate id

// Practical: cloning a template to create multiple cards
const studentTemplate = document.createElement('div');
studentTemplate.classList.add('student-card');
studentTemplate.innerHTML = `<h3 class="name"></h3><p class="city"></p>`;

const students = [
  { name: 'Giorgi', city: 'Tbilisi' },
  { name: 'Nino', city: 'Batumi' },
  { name: 'Dato', city: 'Kutaisi' },
  { name: 'Ana', city: 'Tbilisi' },
];

const studentContainer = document.createElement('div');
students.forEach((student, i) => {
  const clone = studentTemplate.cloneNode(true);
  clone.id = `student-${i}`; // unique id for each clone!
  clone.querySelector('.name').textContent = student.name;
  clone.querySelector('.city').textContent = student.city;
  studentContainer.appendChild(clone);
});
console.log(studentContainer.children.length); // 4


/*
═══════════════════════════════════════════════════════════════
10. DocumentFragment
═══════════════════════════════════════════════════════════════

document.createDocumentFragment() creates a lightweight
container in memory. Append elements to it, then insert the
fragment into the DOM in ONE operation (1 reflow vs N reflows).

When appended, the fragment disappears — only its children
are inserted. The fragment becomes empty.
*/

// Basic DocumentFragment
const fragment = document.createDocumentFragment();

const regionTitle = document.createElement('h2');
regionTitle.textContent = 'Regions of Georgia';
fragment.appendChild(regionTitle);

const regionList = document.createElement('ul');
['Kakheti', 'Imereti', 'Samegrelo', 'Adjara'].forEach(region => {
  const li = document.createElement('li');
  li.textContent = region;
  regionList.appendChild(li);
});
fragment.appendChild(regionList);

const regionsSection = document.createElement('section');
regionsSection.appendChild(fragment);
console.log(regionsSection.children.length); // 2 (h2 + ul)
console.log(fragment.childNodes.length); // 0 — fragment is now empty!

// Practical: 100 items with a single DOM insertion
const bigFragment = document.createDocumentFragment();
for (let i = 1; i <= 100; i++) {
  const item = document.createElement('li');
  item.textContent = `Student #${i} — Tbilisi Campus`;
  bigFragment.appendChild(item);
}
const roster = document.createElement('ul');
roster.appendChild(bigFragment); // 1 reflow, not 100
console.log(roster.children.length); // 100


/*
═══════════════════════════════════════════════════════════════
11. SUMMARY — COMPARISON TABLE
═══════════════════════════════════════════════════════════════

┌────────────────────┬──────────────────────────────────┬──────────────────┬──────────────────────────────────┐
│ Method             │ Syntax                           │ Returns          │ Notes                            │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ createElement      │ document.createElement('tag')    │ New element      │ In memory, not in DOM            │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ appendChild        │ parent.appendChild(child)        │ Appended node    │ MOVES if already in DOM          │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ insertBefore       │ parent.insertBefore(new, ref)    │ Inserted node    │ ref=null acts like appendChild   │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ append / prepend   │ parent.append(nodes...)          │ undefined        │ Accepts strings + multi args     │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ before / after     │ element.before(nodes...)         │ undefined        │ Inserts as sibling               │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ removeChild        │ parent.removeChild(child)        │ Removed node     │ Must have parent reference       │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ remove             │ element.remove()                 │ undefined        │ No parent needed; modern         │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ replaceChild       │ parent.replaceChild(new, old)    │ Old node         │ Classic; needs parent            │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ replaceWith        │ old.replaceWith(nodes...)        │ undefined        │ Modern; accepts strings          │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ cloneNode(false)   │ element.cloneNode(false)         │ Shallow copy     │ Attributes only, no children     │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ cloneNode(true)    │ element.cloneNode(true)          │ Deep copy        │ All descendants; fix ids!        │
├────────────────────┼──────────────────────────────────┼──────────────────┼──────────────────────────────────┤
│ DocumentFragment   │ createDocumentFragment()         │ Empty fragment   │ Batch inserts; empties on append │
└────────────────────┴──────────────────────────────────┴──────────────────┴──────────────────────────────────┘

Key relationships:
- createElement + property setup + appendChild = basic workflow
- appendChild MOVES elements; use cloneNode first if you need a copy
- Modern methods (append, prepend, before, after, remove, replaceWith)
  are cleaner but return undefined — cannot chain them
- DocumentFragment is the performance tool for batch DOM insertions
- Always change the id attribute after cloning to maintain uniqueness
- Event listeners (addEventListener) are NOT copied by cloneNode
*/
