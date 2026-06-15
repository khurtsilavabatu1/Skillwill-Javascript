'use strict';

////////////////////////////////////
// DOM-ის საფუძვლები
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - ელემენტის ინსპექტორი
// (getElementById)

/*
ააწყვეთ პატარა უტილიტა, რომელიც ელემენტებს ID-ით ეძებს
და მათ თვისებებს აჩვენებს.

1. შექმენით ფუნქცია 'inspectElement', რომელიც იღებს ელემენტის ID სტრინგს
   და აბრუნებს ობიექტს:
   - tagName: ელემენტის ტეგის სახელი (მაგ., 'DIV', 'P')
   - id: ელემენტის id
   - hasChildren: boolean, აქვს თუ არა შვილი ელემენტები
   - childCount: შვილი ელემენტების რაოდენობა
   - textLength: ელემენტის textContent-ის სიგრძე
2. გამოიყენეთ getElementById შემდეგი ID-ებით:
   'greeting-text', 'counter-display', 'output-1'
   და დალოგეთ თითოეულის ინსპექტირების შედეგი.
3. შექმენით ფუნქცია 'setElementText', რომელიც იღებს ID-ს და სტრინგს,
   ეძებს ელემენტს ID-ით და აყენებს მის textContent-ს.
   თუ ელემენტი ვერ მოიძებნა, დალოგეთ "ელემენტი ვერ მოიძებნა: <id>"
4. გამოიძახეთ setElementText 'greeting-text'-ით და 'გამარჯობა ინსპექტორიდან!'
5. გამოიძახეთ setElementText 'nonexistent'-ით ვერ-მოძებნის შემთხვევის სატესტოდ
6. შექმენით ფუნქცია 'getMultipleById', რომელიც იღებს ID სტრინგების მასივს,
   ეძებს თითოეულ ელემენტს და აბრუნებს ნაპოვნი ელემენტების მასივს
   (null მნიშვნელობებს გამოტოვეთ). დალოგეთ ნაპოვნის vs მოთხოვნილის რაოდენობა.

სატესტო მონაცემები: გამოიყენეთ სავარჯიშო გვერდის HTML-ის ID-ები

მინიშნება: element.tagName აბრუნებს ტეგს დიდი ასოებით
მინიშნება: element.children იძლევა შვილ ელემენტებს (არა ტექსტურ კვანძებს)
მინიშნება: getElementById აბრუნებს null-ს არარსებული ID-სთვის

წარმატებები 😀
*/

// const inspectElement = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return null;

//   return {
//     tagName: el.tagName,
//     id: el.id,
//     hasChildren: el.children.length > 0,
//     childCount: el.children.length,
//     textLength: el.textContent.length,
//   };
// };

// console.log('--- ელემენტის ინსპექტირება ---');
// console.log(inspectElement('greeting-text'));
// console.log(inspectElement('counter-display'));
// console.log(inspectElement('output-1'));

// const setElementText = function (id, text) {
//   const el = document.getElementById(id);
//   if (!el) {
//     console.log(`ელემენტი ვერ მოიძებნა: ${id}`);
//     return;
//   }
//   el.textContent = text;
// };

// setElementText('greeting-text', 'გამარჯობა ინსპექტორიდან!');
// setElementText('nonexistent', 'ეს არ დაყენდება');

// const getMultipleById = function (ids) {
//   const found = [];
//   for (let i = 0; i < ids.length; i++) {
//     const el = document.getElementById(ids[i]);
//     if (el) found.push(el);
//   }
//   console.log(`ნაპოვნია ${found.length} მოთხოვნილი ${ids.length} ელემენტიდან`);
//   return found;
// };

// const elements = getMultipleById(['greeting-text', 'counter-display', 'nonexistent', 'output-1']);
// console.log(elements);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - პროფილის აღმშენებელი
// (querySelector)

/*
ააწყვეთ პროფილის ბარათის რედაქტორი, რომელიც querySelector-ს იყენებს
გვერდის კონკრეტულ სექციაში ელემენტების მოსაძებნად და შესაცვლელად.

1. შექმენით ფუნქცია 'updateProfile', რომელიც იღებს ობიექტს თვისებებით:
   name, role, email, avatarLetter, avatarColor.
   გამოიყენეთ querySelector რომ იპოვოთ და განაახლოთ:
   - '.profile-name' → textContent = name
   - '.profile-role' → textContent = role
   - '.profile-email' → textContent = email
   - '#avatar' → textContent = avatarLetter, style.background = avatarColor
2. გამოიძახეთ updateProfile:
   { name: 'Ana Kapanadze', role: 'UX Designer', email: 'ana@design.ge',
     avatarLetter: 'A', avatarColor: '#e91e63' }
3. შექმენით ფუნქცია 'readProfile', რომელიც querySelector-ს იყენებს
   მიმდინარე პროფილის მონაცემების წასაკითხად და აბრუნებს ობიექტს
   იგივე თვისებებით (DOM ელემენტებიდან წაკითხული).
4. დალოგეთ პროფილის ობიექტი updateProfile-ის წინ და შემდეგ.
5. შექმენით ფუნქცია 'highlightElement', რომელიც იღებს CSS სელექტორ სტრინგს
   და ნაპოვნ ელემენტს ამატებს ყვითელ ბორდერს (3px solid #fdd835) და padding-ს (4px).
   თუ ვერ იპოვა, დალოგეთ გაფრთხილება.
6. გამოიძახეთ highlightElement '.profile-name'-ით
7. გამოიძახეთ highlightElement '.nonexistent-class'-ით გაფრთხილების სატესტოდ

მინიშნება: querySelector('#avatar') ექვივალენტურია getElementById('avatar')-ის
მინიშნება: querySelector('.profile-info .profile-email') ჩადგმულ ელემენტებს მიზნავს
მინიშნება: გახსოვდეთ, რომ querySelector აბრუნებს null-ს თუ ვერ იპოვა

წარმატებები 😀
*/

// const readProfile = function () {
//   return {
//     name: document.querySelector('.profile-name').textContent,
//     role: document.querySelector('.profile-role').textContent,
//     email: document.querySelector('.profile-email').textContent,
//     avatarLetter: document.querySelector('#avatar').textContent,
//     avatarColor: document.querySelector('#avatar').style.background,
//   };
// };

// console.log('--- განახლებამდე ---');
// console.log(readProfile());

// const updateProfile = function (data) {
//   document.querySelector('.profile-name').textContent = data.name;
//   document.querySelector('.profile-role').textContent = data.role;
//   document.querySelector('.profile-email').textContent = data.email;
//   document.querySelector('#avatar').textContent = data.avatarLetter;
//   document.querySelector('#avatar').style.background = data.avatarColor;
// };

// updateProfile({
//   name: 'Ana Kapanadze',
//   role: 'UX Designer',
//   email: 'ana@design.ge',
//   avatarLetter: 'A',
//   avatarColor: '#e91e63',
// });

// console.log('--- განახლების შემდეგ ---');
// console.log(readProfile());

// const highlightElement = function (selector) {
//   const el = document.querySelector(selector);
//   if (!el) {
//     console.warn(`ელემენტი ვერ მოიძებნა სელექტორით: ${selector}`);
//     return;
//   }
//   el.style.border = '3px solid #fdd835';
//   el.style.padding = '4px';
// };

// highlightElement('.profile-name');
// highlightElement('.nonexistent-class');


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - ამოცანების მენეჯერი
// (querySelectorAll)

/*
ააწყვეთ ამოცანების მენეჯერი, რომელიც querySelectorAll-ით
მრავალ ელემენტთან მუშაობს.

1. შექმენით ფუნქცია 'getTaskCount', რომელიც querySelectorAll('.task-item')-ს
   იყენებს და აბრუნებს ამოცანების სრულ რაოდენობას.
2. შექმენით ფუნქცია 'getTasksByPriority', რომელიც იღებს პრიორიტეტის სტრინგს
   ('high', 'medium', 'low') და querySelectorAll-ით ეძებს ყველა
   შესაბამის .priority-{level} ელემენტს. აბრუნებს რაოდენობას.
3. შექმენით ფუნქცია 'completeTask', რომელიც იღებს ინდექსს (0-დან) და:
   - querySelectorAll('.task-item')-ით იღებს ყველა ამოცანას
   - თუ ინდექსი ვალიდურია, ამატებს 'completed' კლასს
   - თუ არავალიდურია, ლოგავს "არასწორი ამოცანის ინდექსი"
4. შექმენით ფუნქცია 'completeAllTasks', რომელიც querySelectorAll-სა
   და forEach-ს იყენებს ყველა ამოცანაზე 'completed' კლასის დასამატებლად.
5. შექმენით ფუნქცია 'getTaskTexts', რომელიც querySelectorAll('.task-item')-ს
   იყენებს და აბრუნებს თითოეული ამოცანის ტექსტური კონტენტის მასივს (trimmed).
   გამოიყენეთ for ციკლი მასივის ასაწყობად.
6. დალოგეთ ყველა ამოცანის რაოდენობა, თითოეული პრიორიტეტის რაოდენობა,
   შემდეგ დაასრულეთ ამოცანა ინდექს 0-ზე, შემდეგ დალოგეთ ამოცანების ტექსტები.

მინიშნება: querySelectorAll აბრუნებს NodeList-ს — გამოიყენეთ .length და [index]
მინიშნება: NodeList-ს აქვს forEach, მაგრამ არ აქვს map/filter — გამოიყენეთ for ციკლი
მინიშნება: classList.add('completed') CSS კლასს ამატებს

წარმატებები 😀
*/

// const getTaskCount = function () {
//   return document.querySelectorAll('.task-item').length;
// };

// const getTasksByPriority = function (priority) {
//   return document.querySelectorAll(`.priority-${priority}`).length;
// };

// const completeTask = function (index) {
//   const tasks = document.querySelectorAll('.task-item');
//   if (index < 0 || index >= tasks.length) {
//     console.log('არასწორი ამოცანის ინდექსი');
//     return;
//   }
//   tasks[index].classList.add('completed');
// };

// const completeAllTasks = function () {
//   const tasks = document.querySelectorAll('.task-item');
//   tasks.forEach(function (task) {
//     task.classList.add('completed');
//   });
// };

// const getTaskTexts = function () {
//   const tasks = document.querySelectorAll('.task-item');
//   const texts = [];
//   for (let i = 0; i < tasks.length; i++) {
//     texts.push(tasks[i].textContent.trim());
//   }
//   return texts;
// };

// console.log('--- ამოცანების მენეჯერი ---');
// console.log('სულ ამოცანები:', getTaskCount());
// console.log('მაღალი პრიორიტეტი:', getTasksByPriority('high'));
// console.log('საშუალო პრიორიტეტი:', getTasksByPriority('medium'));
// console.log('დაბალი პრიორიტეტი:', getTasksByPriority('low'));
// completeTask(0);
// console.log('ამოცანების ტექსტები:', getTaskTexts());


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - ფერების ბადის კონტროლერი
// (getElementsByClassName)

/*
ააწყვეთ ფერების ბადის კონტროლერი getElementsByClassName-ის გამოყენებით.

1. შექმენით ფუნქცია 'getColorBoxCount', რომელიც
   getElementsByClassName('color-box')-ს იყენებს და აბრუნებს რაოდენობას.
2. შექმენით ფუნქცია 'fadeBox', რომელიც იღებს ინდექსს და opacity მნიშვნელობას,
   getElementsByClassName-ით პოულობს ყველა color-box ელემენტს
   და მოცემულ ინდექსზე ელემენტს ცვლის opacity-ს.
   თუ ინდექსი არავალიდურია, ლოგავს "არასწორი ბოქსის ინდექსი".
3. შექმენით ფუნქცია 'fadeAllBoxes', რომელიც იღებს opacity მნიშვნელობას
   და for ციკლით ყველა color box-ს ანიჭებს.
4. შექმენით ფუნქცია 'scaleBox', რომელიც იღებს ინდექსს და scale მნიშვნელობას
   (მაგ., 1.2) და აყენებს transform: scale(value) იმ ბოქსზე.
5. შექმენით ფუნქცია 'resetAllBoxes', რომელიც აბრუნებს opacity-ს 1-ზე
   და შლის transform-ს ყველა color box-იდან.
6. ტესტი: fade all boxes 0.3-ზე, შემდეგ scale box ინდექს 2-ზე,
   შემდეგ reset all.

მინიშნება: getElementsByClassName აბრუნებს ცოცხალ HTMLCollection-ს
მინიშნება: HTMLCollection-ს არ აქვს forEach — გამოიყენეთ for ციკლი
მინიშნება: style.transform = `scale(${value})` გადიდებისთვის
მინიშნება: style.transform = '' შლის inline transform-ს

წარმატებები 😀
*/

// const getColorBoxCount = function () {
//   return document.getElementsByClassName('color-box').length;
// };

// const fadeBox = function (index, opacity) {
//   const boxes = document.getElementsByClassName('color-box');
//   if (index < 0 || index >= boxes.length) {
//     console.log('არასწორი ბოქსის ინდექსი');
//     return;
//   }
//   boxes[index].style.opacity = opacity;
// };

// const fadeAllBoxes = function (opacity) {
//   const boxes = document.getElementsByClassName('color-box');
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.opacity = opacity;
//   }
// };

// const scaleBox = function (index, scale) {
//   const boxes = document.getElementsByClassName('color-box');
//   if (index < 0 || index >= boxes.length) {
//     console.log('არასწორი ბოქსის ინდექსი');
//     return;
//   }
//   boxes[index].style.transform = `scale(${scale})`;
// };

// const resetAllBoxes = function () {
//   const boxes = document.getElementsByClassName('color-box');
//   for (let i = 0; i < boxes.length; i++) {
//     boxes[i].style.opacity = '1';
//     boxes[i].style.transform = '';
//   }
// };

// console.log('--- ფერების ბადე ---');
// console.log('ბოქსების რაოდენობა:', getColorBoxCount());
// fadeAllBoxes(0.3);
// scaleBox(2, 1.3);
// // resetAllBoxes();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - ცხრილის ანალიზატორი
// (getElementsByTagName)

/*
ააწყვეთ ცხრილის ანალიზატორი, რომელიც getElementsByTagName-ით
კითხულობს და ფერს უცვლის რიგებს.

1. შექმენით ფუნქცია 'getTableData', რომელიც:
   - getElementById-ით იღებს 'student-table'-ს
   - getElementsByTagName-ით იღებს tbody-ს, შემდეგ მის tr ელემენტებს
   - თითოეული რიგისთვის იღებს td უჯრებს და ამოიღებს:
     { name: string, grade: number, status: string }
   - აბრუნებს ამ ობიექტების მასივს
2. შექმენით ფუნქცია 'getAverageGrade', რომელიც getTableData-ს იძახებს
   და ითვლის საშუალო ქულას.
3. შექმენით ფუნქცია 'highlightRow', რომელიც იღებს რიგის ინდექსს (0-დან)
   და ფერის სტრინგს, და აყენებს იმ რიგის backgroundColor-ს.
4. შექმენით ფუნქცია 'highlightAboveAverage', რომელიც:
   - იღებს ცხრილის მონაცემებს და საშუალო ქულას
   - მწვანედ ('#e8f5e9') ღებავს ყველა რიგს სადაც ქულა >= საშუალო
   - წითლად ('#ffebee') ღებავს ყველა რიგს სადაც ქულა < საშუალო
5. შექმენით ფუნქცია 'getColumnValues', რომელიც იღებს სვეტის ინდექსს
   და აბრუნებს ამ სვეტის ყველა მნიშვნელობის მასივს (tbody რიგებიდან).
6. დალოგეთ: ცხრილის მონაცემები, საშუალო ქულა, სვეტ 0-ის მნიშვნელობები,
   შემდეგ გაფერადეთ რიგები.

მინიშნება: table.getElementsByTagName('tbody')[0] იღებს პირველ tbody-ს
მინიშნება: row.getElementsByTagName('td') იღებს უჯრებს რიგში
მინიშნება: Number(cell.textContent) უჯრის ტექსტს რიცხვად გარდაქმნის

წარმატებები 😀
*/

// const getTableData = function () {
//   const table = document.getElementById('student-table');
//   const tbody = table.getElementsByTagName('tbody')[0];
//   const rows = tbody.getElementsByTagName('tr');
//   const data = [];

//   for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].getElementsByTagName('td');
//     data.push({
//       name: cells[0].textContent,
//       grade: Number(cells[1].textContent),
//       status: cells[2].textContent,
//     });
//   }
//   return data;
// };

// const getAverageGrade = function () {
//   const data = getTableData();
//   let sum = 0;
//   for (let i = 0; i < data.length; i++) {
//     sum += data[i].grade;
//   }
//   return sum / data.length;
// };

// const highlightRow = function (rowIndex, color) {
//   const table = document.getElementById('student-table');
//   const tbody = table.getElementsByTagName('tbody')[0];
//   const rows = tbody.getElementsByTagName('tr');
//   if (rowIndex < 0 || rowIndex >= rows.length) {
//     console.log('არასწორი რიგის ინდექსი');
//     return;
//   }
//   rows[rowIndex].style.backgroundColor = color;
// };

// const highlightAboveAverage = function () {
//   const data = getTableData();
//   const avg = getAverageGrade();
//   console.log(`საშუალო ქულა: ${avg}`);

//   for (let i = 0; i < data.length; i++) {
//     if (data[i].grade >= avg) {
//       highlightRow(i, '#e8f5e9');
//     } else {
//       highlightRow(i, '#ffebee');
//     }
//   }
// };

// const getColumnValues = function (colIndex) {
//   const table = document.getElementById('student-table');
//   const tbody = table.getElementsByTagName('tbody')[0];
//   const rows = tbody.getElementsByTagName('tr');
//   const values = [];

//   for (let i = 0; i < rows.length; i++) {
//     const cells = rows[i].getElementsByTagName('td');
//     if (colIndex < cells.length) {
//       values.push(cells[colIndex].textContent);
//     }
//   }
//   return values;
// };

// console.log('--- ცხრილის ანალიზატორი ---');
// console.log('ცხრილის მონაცემები:', getTableData());
// console.log('საშუალო ქულა:', getAverageGrade());
// console.log('სახელები (სვეტი 0):', getColumnValues(0));
// console.log('ქულები (სვეტი 1):', getColumnValues(1));
// highlightAboveAverage();


////////////////////////////////////
// სავარჯიშო ჩელენჯი #6 - კონტენტის რედაქტორი
// (innerHTML & textContent)

/*
ააწყვეთ კონტენტის რედაქტორი, რომელიც innerHTML-სა და
textContent-ს შორის განსხვავებას ადემონსტრირებს.

1. შექმენით ფუნქცია 'getContentInfo', რომელიც იღებს ელემენტის ID-ს და აბრუნებს:
   - innerHTML: ელემენტის innerHTML
   - textContent: ელემენტის textContent
   - innerHTMLLength: innerHTML-ის სიგრძე
   - textContentLength: textContent-ის სიგრძე
   - hasTags: შეიცავს თუ არა innerHTML '<'-ს (HTML ტეგებს)
2. შექმენით ფუნქცია 'safeSetContent', რომელიც იღებს ელემენტის ID-ს და ტექსტს,
   და textContent-ს იყენებს დასაყენებლად (XSS-ისგან დაცული).
3. შექმენით ფუნქცია 'richSetContent', რომელიც იღებს ელემენტის ID-ს და HTML-ს,
   და innerHTML-ს იყენებს დასაყენებლად (HTML-ს რენდერავს).
4. შექმენით ფუნქცია 'appendContent', რომელიც იღებს ელემენტის ID-ს და HTML-ს,
   და არსებულ innerHTML-ს ამატებს += -ით.
5. შექმენით ფუნქცია 'clearContent', რომელიც იღებს ელემენტის ID-ს და
   innerHTML-ს ''-ზე აყენებს.
6. შეამოწმეთ ყველა ფუნქცია 'content-area'-ზე:
   - დალოგეთ კონტენტის ინფო
   - დააყენეთ rich content სათაურითა და პარაგრაფით
   - დაამატეთ notification div
   - კვლავ დალოგეთ კონტენტის ინფო
   - გაასუფთავეთ კონტენტი

მინიშნება: innerHTML შეიცავს HTML ტეგებს: '<strong>Bold</strong> text'
მინიშნება: textContent ტეგებს შლის: 'Bold text'
მინიშნება: textContent ყოველთვის უსაფრთხოა — HTML-ს ესქეიფებს

წარმატებები 😀
*/

// const getContentInfo = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return null;
//   return {
//     innerHTML: el.innerHTML,
//     textContent: el.textContent,
//     innerHTMLLength: el.innerHTML.length,
//     textContentLength: el.textContent.length,
//     hasTags: el.innerHTML.includes('<'),
//   };
// };

// const safeSetContent = function (id, text) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.textContent = text;
// };

// const richSetContent = function (id, html) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.innerHTML = html;
// };

// const appendContent = function (id, html) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.innerHTML += html;
// };

// const clearContent = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.innerHTML = '';
// };

// console.log('--- კონტენტის რედაქტორი ---');
// console.log('ადრე:', getContentInfo('content-area'));

// richSetContent('content-area',
//   '<h3 style="color: #3949ab">მოგესალმებით!</h3><p>ეს არის <em>rich</em> კონტენტი.</p>');

// appendContent('content-area',
//   '<div class="notification info">ახალი შეტყობინება დაემატა.</div>');

// console.log('შემდეგ:', getContentInfo('content-area'));

// // clearContent('content-area');


////////////////////////////////////
// სავარჯიშო ჩელენჯი #7 - სტილების მენეჯერი
// (style თვისება)

/*
ააწყვეთ სტილების მენეჯერი, რომელიც პროგრამულად ცვლის ელემენტების სტილებს.

1. შექმენით ფუნქცია 'setStyles', რომელიც იღებს ელემენტის ID-ს და
   სტილის თვისებების ობიექტს (მაგ., { color: 'red', fontSize: '20px' })
   და for...in ციკლით ყველა მათგანს ანიჭებს ელემენტს.
2. შექმენით ფუნქცია 'resetStyles', რომელიც იღებს ელემენტის ID-ს და
   style.cssText = ''-ით ყველა inline სტილს შლის.
3. შექმენით ფუნქცია 'toggleDarkMode', რომელიც იღებს ელემენტის ID-ს და:
   - თუ backgroundColor მუქია (rgb(26, 35, 126) ან მსგავსი), აბრუნებს ნაგულისხმევზე
   - თუ არა, აყენებს მუქ თემას: bg '#1a237e', color '#fff', padding '20px'
4. შექმენით ფუნქცია 'animateSize', რომელიც იღებს ელემენტის ID-ს და
   setInterval-ით თანდათან ზრდის fontSize-ს 1rem-დან 3rem-მდე
   (0.1rem ნაზარდი ყოველ 50ms-ში). 3rem-ზე მისვლისას ჩერდება.
5. გამოიყენეთ setStyles 'style-target'-ზე:
   { color: '#fff', backgroundColor: '#3949ab', padding: '20px',
     borderRadius: '12px', fontWeight: 'bold' }
6. შეამოწმეთ toggleDarkMode 'style-target'-ზე ორჯერ (მუქი → ნათელი → მუქი)

მინიშნება: for...in ობიექტის გასაღებებზე იტერირებს: for (const key in styles) { }
მინიშნება: element.style[key] = value მუშაობს camelCase გასაღებებით
მინიშნება: parseFloat('1.5rem') აბრუნებს 1.5-ს
მინიშნება: getComputedStyle(el).backgroundColor აბრუნებს გამოთვლილ ფერს

წარმატებები 😀
*/

// const setStyles = function (id, styles) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   for (const key in styles) {
//     el.style[key] = styles[key];
//   }
// };

// const resetStyles = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   el.style.cssText = '';
// };

// const toggleDarkMode = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   const bg = getComputedStyle(el).backgroundColor;
//   if (bg === 'rgb(26, 35, 126)') {
//     el.style.backgroundColor = '#e8eaf6';
//     el.style.color = '#263238';
//   } else {
//     el.style.backgroundColor = '#1a237e';
//     el.style.color = '#fff';
//     el.style.padding = '20px';
//   }
// };

// const animateSize = function (id) {
//   const el = document.getElementById(id);
//   if (!el) return;
//   let size = 1;
//   const timer = setInterval(function () {
//     size += 0.1;
//     el.style.fontSize = size + 'rem';
//     if (size >= 3) {
//       clearInterval(timer);
//       console.log('ანიმაცია დასრულდა!');
//     }
//   }, 50);
// };

// console.log('--- სტილების მენეჯერი ---');
// setStyles('style-target', {
//   color: '#fff',
//   backgroundColor: '#3949ab',
//   padding: '20px',
//   borderRadius: '12px',
//   fontWeight: 'bold',
// });

// toggleDarkMode('style-target');
// toggleDarkMode('style-target');

// // animateSize('style-target');


////////////////////////////////////
// სავარჯიშო ჩელენჯი #8 - შეტყობინებების სისტემა
// (innerHTML, style, querySelectorAll)

/*
ააწყვეთ შეტყობინებების სისტემა, რომელიც დინამიურად ქმნის,
სტილავს და მართავს შეტყობინების ელემენტებს.

1. შექმენით ფუნქცია 'createNotification', რომელიც იღებს ტიპს
   ('success', 'error', 'info') და შეტყობინების სტრინგს.
   innerHTML += -ით უნდა დაამატოს notification div #notification-area-ში.
   div-ს უნდა ჰქონდეს კლასი "notification {type}" და შეიცავდეს შეტყობინებას.
2. შექმენით ფუნქცია 'getNotificationCount', რომელიც querySelectorAll-ით
   ითვლის ყველა .notification ელემენტს #notification-area-ში.
3. შექმენით ფუნქცია 'removeLastNotification', რომელიც querySelectorAll-ით
   პოულობს ყველა შეტყობინებას და ბოლოს display-ს 'none'-ზე აყენებს.
4. შექმენით ფუნქცია 'clearAllNotifications', რომელიც
   #notification-area-ს innerHTML-ს ''-ზე აყენებს.
5. შექმენით ფუნქცია 'styleNotifications', რომელიც querySelectorAll-ით
   პოულობს ყველა ხილულ .notification ელემენტს და თითოეულს
   ამატებს ქვედა margin-ს (8px) და border-radius-ს (8px).
6. ტესტი: დაამატეთ 3 შეტყობინება (თითოეული ტიპიდან), დალოგეთ რაოდენობა,
   წაშალეთ ბოლო, ისევ დალოგეთ რაოდენობა, დაასტილეთ დარჩენილი.

მინიშნება: innerHTML += ამატებს კონტენტს არსებულის წაშლის გარეშე
მინიშნება: querySelectorAll('.notification') პოულობს ყველა შეტყობინებას
მინიშნება: ბოლო ელემენტი ინდექსზეა [nodeList.length - 1]

წარმატებები 😀
*/

// const createNotification = function (type, message) {
//   const area = document.getElementById('notification-area');
//   area.innerHTML += `<div class="notification ${type}">${message}</div>`;
// };

// const getNotificationCount = function () {
//   return document.querySelectorAll('#notification-area .notification').length;
// };

// const removeLastNotification = function () {
//   const notifications = document.querySelectorAll('#notification-area .notification');
//   if (notifications.length > 0) {
//     notifications[notifications.length - 1].style.display = 'none';
//   }
// };

// const clearAllNotifications = function () {
//   document.getElementById('notification-area').innerHTML = '';
// };

// const styleNotifications = function () {
//   const notifications = document.querySelectorAll('#notification-area .notification');
//   for (let i = 0; i < notifications.length; i++) {
//     notifications[i].style.marginBottom = '8px';
//     notifications[i].style.borderRadius = '8px';
//   }
// };

// console.log('--- შეტყობინებების სისტემა ---');
// createNotification('success', 'პროფილი წარმატებით შეინახა!');
// createNotification('error', 'მონაცემების ჩატვირთვა ვერ მოხერხდა.');
// createNotification('info', 'ახალი განახლებები ხელმისაწვდომია.');
// console.log('რაოდენობა:', getNotificationCount());

// removeLastNotification();
// console.log('რაოდენობა წაშლის შემდეგ:', getNotificationCount());

// styleNotifications();
