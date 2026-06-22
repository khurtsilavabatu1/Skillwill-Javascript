'use strict';

////////////////////////////////////
// DOM ელემენტების მანიპულაცია
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////

/*
═══════════════════════════════════════════════════════════════
1. createElement — ელემენტის შექმნა
═══════════════════════════════════════════════════════════════

document.createElement('tag') ქმნის ახალ HTML ელემენტს
მეხსიერებაში. ელემენტი ჯერ არ არის DOM-ის ნაწილი —
DOM-ში დასამატებლად appendChild ან სხვა მეთოდი სჭირდება.
*/

const newDiv = document.createElement('div');
console.log(newDiv); // <div></div> — ცარიელი div მეხსიერებაში

const newButton = document.createElement('button');
const newImage = document.createElement('img');

// ელემენტი ჯერ DOM-ში არ არის
console.log(document.body.contains(newDiv)); // false

/*
═══════════════════════════════════════════════════════════════
2. ელემენტის თვისებები ჩასმამდე
═══════════════════════════════════════════════════════════════

ელემენტის DOM-ში ჩასმამდე ყველა თვისება უნდა დავაყენოთ —
ბრაუზერს არ უწევს რამდენჯერმე ხელახალი რენდერი (reflow).
*/

const userCard = document.createElement('div');

// textContent — ტექსტური შიგთავსი
userCard.textContent = 'გიორგი მელაძე — თბილისი';

// innerHTML — HTML შიგთავსი (ტეგებით)
userCard.innerHTML = '<h3>გიორგი მელაძე</h3><p>ქალაქი: თბილისი</p>';

// id და className
userCard.id = 'user-giorgi';
userCard.className = 'card';

// classList.add() — კლასის დამატება (არ გადააწერს არსებულს)
userCard.classList.add('card--highlighted');
console.log(userCard.className); // 'card card--highlighted'

// setAttribute — თვითნებური ატრიბუტი
userCard.setAttribute('data-city', 'tbilisi');

// style — ინლაინ სტილები
userCard.style.backgroundColor = '#f0f0f0';
userCard.style.padding = '16px';

// უსაფრთხოება: textContent vs innerHTML
// innerHTML-ით მომხმარებლის ტექსტის ჩასმა საშიშია (XSS).
// მომხმარებლის ტექსტისთვის ყოველთვის textContent გამოიყენეთ.

/*
═══════════════════════════════════════════════════════════════
3. appendChild — შვილი ელემენტის დამატება
═══════════════════════════════════════════════════════════════

parent.appendChild(child) ამატებს ელემენტს მშობელის ბოლო
შვილად. აბრუნებს დამატებულ ელემენტს.

მნიშვნელოვანი: თუ ელემენტი უკვე DOM-შია, appendChild
მას გადაადგილებს (move) — არ კოპირებს!
*/

// ციკლით სიის აგება
const cities = ['თბილისი', 'ბათუმი', 'ქუთაისი', 'რუსთავი', 'გორი'];
const cityList = document.createElement('ul');

cities.forEach(function (cityName) {
  const li = document.createElement('li');
  li.textContent = cityName;
  cityList.appendChild(li);
});
console.log(cityList.children.length); // 5

// გადაადგილების დემონსტრაცია
const box1 = document.createElement('div');
const box2 = document.createElement('div');
const movingEl = document.createElement('p');
movingEl.textContent = 'მე გადავადგილდები!';
box1.appendChild(movingEl);
console.log(box1.children.length); // 1
box2.appendChild(movingEl); // move, არა copy!
console.log(box1.children.length); // 0 — აღარ არის პირველში
console.log(box2.children.length); // 1

/*
═══════════════════════════════════════════════════════════════
4. insertBefore — ჩასმა კონკრეტულ ადგილას
═══════════════════════════════════════════════════════════════

parent.insertBefore(newNode, referenceNode) — ახალ ელემენტს
ამატებს referenceNode-ის წინ.
- მეთოდი მშობელზე გამოიძახება
- referenceNode თუ null-ია, ბოლოში ჩაისმება (appendChild-ივით)
*/

const studentList = document.createElement('ul');
const nino = document.createElement('li');
nino.textContent = 'ნინო';
studentList.appendChild(nino);
const dato = document.createElement('li');
dato.textContent = 'დათო';
studentList.appendChild(dato);

// გიორგის ჩასმა დათოს წინ
const giorgi = document.createElement('li');
giorgi.textContent = 'გიორგი';
studentList.insertBefore(giorgi, dato);
// თანმიმდევრობა: ნინო, გიორგი, დათო

// პირველ ადგილას ჩასმა
const mariam = document.createElement('li');
mariam.textContent = 'მარიამ';
studentList.insertBefore(mariam, studentList.firstChild);
// თანმიმდევრობა: მარიამ, ნინო, გიორგი, დათო

/*
═══════════════════════════════════════════════════════════════
5. append / prepend / before / after — თანამედროვე მეთოდები
═══════════════════════════════════════════════════════════════

appendChild-ისგან ძირითადი განსხვავებები:
1. სტრინგებსაც იღებს — ავტომატურად ტექსტური ნოდი ხდება
2. რამდენიმე არგუმენტს ერთდროულად იღებს
3. undefined-ს აბრუნებს (არა node-ს)
*/

const menu = document.createElement('ul');
const khinkali = document.createElement('li');
khinkali.textContent = 'ხინკალი — 1.50₾';
const khachapuri = document.createElement('li');
khachapuri.textContent = 'ხაჭაპური — 8₾';

// append — ბოლოში, რამდენიმე ერთდროულად
menu.append(khinkali, khachapuri);

// prepend — თავში
const title = document.createElement('li');
title.textContent = '=== მენიუ ===';
menu.prepend(title);

// before / after — თანადონეზე
const lobio = document.createElement('li');
lobio.textContent = 'ლობიო — 5₾';
khachapuri.before(lobio); // ხაჭაპურის წინ

const mtsvadi = document.createElement('li');
mtsvadi.textContent = 'მწვადი — 12₾';
khinkali.after(mtsvadi); // ხინკლის შემდეგ

/*
═══════════════════════════════════════════════════════════════
6. removeChild — შვილი ელემენტის ამოღება
═══════════════════════════════════════════════════════════════

parent.removeChild(child) — მშობელი ელემენტი წაშლის შვილს.
აბრუნებს ამოღებულ ელემენტს — შეგვიძლია ხელახლა გამოვიყენოთ.
*/

const classRoom = document.createElement('ul');
const s1 = document.createElement('li');
s1.textContent = 'გიორგი';
classRoom.appendChild(s1);
const s2 = document.createElement('li');
s2.textContent = 'ნინო';
classRoom.appendChild(s2);
const s3 = document.createElement('li');
s3.textContent = 'დათო';
classRoom.appendChild(s3);

const removed = classRoom.removeChild(s2);
console.log(removed.textContent); // 'ნინო' — ამოღებული ელემენტი დაბრუნდა
classRoom.appendChild(removed); // ხელახლა დამატება შესაძლებელია

// ყველა შვილის ამოღება
while (classRoom.firstChild) {
  classRoom.removeChild(classRoom.firstChild);
}
console.log(classRoom.children.length); // 0

/*
═══════════════════════════════════════════════════════════════
7. remove() — თანამედროვე ამოღება
═══════════════════════════════════════════════════════════════

element.remove() — ელემენტი თავად ამოიღებს საკუთარ თავს.
removeChild-ისგან განსხვავებით, მშობელის რეფერენსი არ სჭირდება.
არაფერს აბრუნებს (undefined).
*/

const notification = document.createElement('div');
notification.textContent = 'ახალი შეკვეთა მიღებულია!';
const container = document.createElement('div');
container.appendChild(notification);

notification.remove(); // მშობელი არ სჭირდება!
console.log(container.children.length); // 0

// პრაქტიკული სცენარი — შეტყობინება 3 წამში ქრება
// document.body.appendChild(alertBox);
// setTimeout(() => alertBox.remove(), 3000);

/*
═══════════════════════════════════════════════════════════════
8. replaceChild / replaceWith — ელემენტის ჩანაცვლება
═══════════════════════════════════════════════════════════════

კლასიკური: parent.replaceChild(newChild, oldChild)
  — მშობელზე გამოიძახება, აბრუნებს ძველ ელემენტს

თანამედროვე: oldElement.replaceWith(newElement)
  — თავად ელემენტზე გამოიძახება, სტრინგსაც იღებს
*/

// replaceChild
const courseList = document.createElement('ul');
const oldCourse = document.createElement('li');
oldCourse.textContent = 'jQuery — ძველი კურსი';
courseList.appendChild(oldCourse);

const newCourse = document.createElement('li');
newCourse.textContent = 'React — თანამედროვე ფრეიმვორკი';
courseList.replaceChild(newCourse, oldCourse);
console.log(courseList.firstChild.textContent); // 'React — თანამედროვე ფრეიმვორკი'

// replaceWith — უფრო მოსახერხებელი
const oldTitle = document.createElement('h2');
oldTitle.textContent = 'ძველი სათაური';
const wrapper = document.createElement('div');
wrapper.appendChild(oldTitle);

const newTitle = document.createElement('h2');
newTitle.textContent = 'ახალი სათაური';
oldTitle.replaceWith(newTitle); // მშობელი არ სჭირდება

/*
═══════════════════════════════════════════════════════════════
9. cloneNode — ელემენტის კლონირება
═══════════════════════════════════════════════════════════════

cloneNode(false) — ზედაპირული: მხოლოდ ელემენტი (შვილების გარეშე)
cloneNode(true)  — ღრმა: ელემენტი ყველა შვილით

გაფრთხილება: კლონს იგივე id რჩება — აუცილებლად შეცვალეთ!
addEventListener-ით დამატებული listener-ები არ კოპირდება.
*/

const originalCard = document.createElement('div');
originalCard.id = 'card-original';
originalCard.className = 'card';
const innerText = document.createElement('p');
innerText.textContent = 'ბარათის შიგთავსი';
originalCard.appendChild(innerText);

// ზედაპირული — შვილები არ კოპირდება
const shallow = originalCard.cloneNode(false);
console.log(shallow.children.length); // 0

// ღრმა — შვილებიც კოპირდება
const deep = originalCard.cloneNode(true);
console.log(deep.children.length); // 1
deep.id = 'card-clone'; // id-ის შეცვლა აუცილებელია!

// შაბლონის კლონირება — პრაქტიკული მაგალითი
const template = document.createElement('div');
template.className = 'student-card';
template.innerHTML = '<h3 class="name"></h3><p class="city"></p>';

const students = [
  { name: 'გიორგი', city: 'თბილისი' },
  { name: 'ნინო', city: 'ბათუმი' },
  { name: 'დათო', city: 'ქუთაისი' },
];

const cardContainer = document.createElement('div');
students.forEach(function (s, i) {
  const card = template.cloneNode(true);
  card.id = `student-${i}`;
  card.querySelector('.name').textContent = s.name;
  card.querySelector('.city').textContent = s.city;
  cardContainer.appendChild(card);
});
console.log(cardContainer.children.length); // 3

/*
═══════════════════════════════════════════════════════════════
10. DocumentFragment — ფრაგმენტი
═══════════════════════════════════════════════════════════════

document.createDocumentFragment() — მსუბუქი კონტეინერი
მეხსიერებაში. რამდენიმე ელემენტის დაჯგუფება და DOM-ში
ერთიანი ჩასმა ერთი reflow-ით.

100 ელემენტის ცალ-ცალკე ჩასმა = 100 reflow.
DocumentFragment-ით = 1 reflow.

ჩასმის შემდეგ ფრაგმენტი ცარიელდება — თავად არ რჩება DOM-ში.
*/

const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = `ელემენტი #${i}`;
  fragment.appendChild(li);
}

const bigList = document.createElement('ul');
bigList.appendChild(fragment); // მხოლოდ ერთი reflow!
console.log(bigList.children.length); // 100
console.log(fragment.childNodes.length); // 0 — ფრაგმენტი ცარიელია

/*
═══════════════════════════════════════════════════════════════
11. შეჯამების ცხრილი
═══════════════════════════════════════════════════════════════

ელემენტების დამატება:
┌──────────────────────────────┬────────────┬──────────────┬──────────────┐
│ მეთოდი                       │ სად ამატებს │ სტრინგს იღებს │ რას აბრუნებს │
├──────────────────────────────┼────────────┼──────────────┼──────────────┤
│ parent.appendChild(node)     │ ბოლოში     │ არა           │ node-ს       │
│ parent.insertBefore(new,ref) │ ref-ის წინ │ არა           │ node-ს       │
│ parent.append(...nodes)      │ ბოლოში     │ დიახ          │ undefined    │
│ parent.prepend(...nodes)     │ თავში      │ დიახ          │ undefined    │
│ el.before(...nodes)          │ el-ის წინ  │ დიახ          │ undefined    │
│ el.after(...nodes)           │ el-ის შემდ │ დიახ          │ undefined    │
└──────────────────────────────┴────────────┴──────────────┴──────────────┘

ამოღება და ჩანაცვლება:
┌──────────────────────────────┬──────────────────────────────────────────┐
│ მეთოდი                       │ აღწერა                                   │
├──────────────────────────────┼──────────────────────────────────────────┤
│ parent.removeChild(child)    │ მშობელი საჭიროა; აბრუნებს ამოღებულს      │
│ element.remove()             │ მშობელი არ სჭირდება; undefined აბრუნებს   │
│ parent.replaceChild(new,old) │ მშობელი საჭიროა; აბრუნებს ძველს          │
│ old.replaceWith(...nodes)    │ მშობელი არ სჭირდება; სტრინგსაც იღებს     │
└──────────────────────────────┴──────────────────────────────────────────┘

საუკეთესო პრაქტიკები:
- ელემენტის თვისებები DOM-ში ჩასმამდე დააყენეთ
- დიდი რაოდენობისთვის DocumentFragment გამოიყენეთ
- cloneNode-ის შემდეგ id შეცვალეთ
- მომხმარებლის ტექსტისთვის textContent გამოიყენეთ (არა innerHTML — XSS!)
- appendChild გადაადგილებს, არ კოპირებს — კოპირებისთვის cloneNode
*/
