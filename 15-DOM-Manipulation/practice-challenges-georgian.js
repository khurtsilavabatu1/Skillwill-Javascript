'use strict';

////////////////////////////////////
// DOM მანიპულაცია
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - DOM სიის აღმშენებელი
// (createElement, appendChild)

/*
თქვენ აშენებთ უტილიტას, რომელიც მონაცემებიდან დინამიურად
აგენერირებს HTML სიებს. ეს ძალიან ხშირი ამოცანაა რეალურ
აპლიკაციებში — მასივის მონაცემების DOM ელემენტებად გარდაქმნა.
თქვენი მიზანია მრავალჯერადად გამოყენებადი ფუნქციის შექმნა,
რომელიც ნებისმიერ სტრინგების მასივს სრულ unordered list ელემენტად აქცევს.

1. შექმენით ფუნქცია 'createList', რომელიც იღებს სტრინგების მასივს.
2. ფუნქციის შიგნით შექმენით <ul> ელემენტი document.createElement-ით.
3. გაიარეთ მასივი ციკლით და თითოეული სტრინგისთვის:
   a) შექმენით <li> ელემენტი
   b) დააყენეთ მისი textContent მიმდინარე სტრინგზე
   c) appendChild-ით დაამატეთ <li> <ul>-ში
4. დააბრუნეთ მზა <ul> ელემენტი.
5. გამოიძახეთ createList სატესტო მონაცემებით და შედეგი
   appendChild-ით დაამატეთ document.body-ში.
6. დალოგეთ დაბრუნებული <ul>-ის outerHTML სტრუქტურის შესამოწმებლად.

სატესტო მონაცემები: ['თბილისი', 'ბათუმი', 'ქუთაისი', 'რუსთავი', 'ზუგდიდი']

მინიშნება: document.createElement('ul') ქმნის <ul> ელემენტს
მინიშნება: element.textContent = 'ტექსტი' აყენებს ტექსტს ელემენტის შიგნით
მინიშნება: parent.appendChild(child) შვილ ელემენტს ამატებს მშობელში
მინიშნება: element.outerHTML აბრუნებს ელემენტის სრულ HTML სტრინგს

წარმატებები 😀
*/

// const createList = function (items) {
//   const ul = document.createElement('ul');
//
//   for (let i = 0; i < items.length; i++) {
//     const li = document.createElement('li');
//     li.textContent = items[i];
//     ul.appendChild(li);
//   }
//
//   return ul;
// };
//
// const cities = ['თბილისი', 'ბათუმი', 'ქუთაისი', 'რუსთავი', 'ზუგდიდი'];
// const cityList = createList(cities);
// document.body.appendChild(cityList);
//
// console.log('--- DOM სიის აღმშენებელი ---');
// console.log('გენერირებული HTML:', cityList.outerHTML);
// // <ul><li>თბილისი</li><li>ბათუმი</li><li>ქუთაისი</li><li>რუსთავი</li><li>ზუგდიდი</li></ul>
// console.log('<li> შვილების რაოდენობა:', cityList.children.length); // 5


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - ბარათის გენერატორი
// (createElement, classList, style, appendChild)

/*
თქვენ აშენებთ დეშბორდს, რომელიც კონტენტის ბარათებს აჩვენებს.
თითოეულ ბარათს აქვს სათაური, აღწერა და კატეგორია. თქვენი ამოცანაა
ფუნქციის შექმნა, რომელიც მონაცემთა ობიექტიდან სტილიზებულ ბარათის
ელემენტს აგენერირებს. ეს ადემონსტრირებს, როგორ ვაერთიანებთ
createElement-ს classList-თან და inline სტილებთან UI კომპონენტების
პროგრამულად ასაშენებლად.

1. შექმენით ფუნქცია 'createCard', რომელიც იღებს ობიექტს თვისებებით:
   { title, description, category }.
2. ფუნქციის შიგნით:
   a) შექმენით <div> ელემენტი ბარათისთვის
   b) classList.add-ით დაამატეთ კლასი 'card'
   c) დაამატეთ მეორე კლასი კატეგორიის მიხედვით: 'card--' + category
      (მაგ., 'card--tech', 'card--science')
   d) დააყენეთ inline სტილები: padding '20px', marginBottom '12px',
      borderRadius '8px', boxShadow '0 2px 8px rgba(0,0,0,0.1)'
   e) შექმენით <h3> ელემენტი, დააყენეთ textContent სათაურზე
   f) შექმენით <p> ელემენტი, დააყენეთ textContent აღწერაზე
   g) შექმენით <span> ელემენტი, დააყენეთ textContent კატეგორიაზე
      და დაასტილეთ: fontSize '12px', color '#fff',
      backgroundColor '#3949ab', padding '4px 8px',
      borderRadius '4px'
   h) ამ თანმიმდევრობით დაამატეთ h3, p და span ბარათის div-ში
3. დააბრუნეთ ბარათის ელემენტი.
4. შექმენით 3 ბარათი სატესტო მონაცემებიდან და თითოეული document.body-ში დაამატეთ.
5. დალოგეთ თითოეული ბარათის classList და outerHTML.

სატესტო მონაცემები:
  { title: 'JavaScript Closures', description: 'Scope-ისა და closure-ების გაგება JS-ში.', category: 'tech' }
  { title: 'მარსის კვლევა', description: 'NASA-ს გეგმები მარსის მისიებისთვის 2030-ში.', category: 'science' }
  { title: 'თანამედროვე ხელოვნება', description: 'როგორ ცვლის ციფრული ხელოვნება გალერეებს.', category: 'art' }

მინიშნება: classList.add('card', 'card--tech') რამდენიმე კლასს ერთდროულად ამატებს
მინიშნება: სტილის მინიჭებების ჯაჭვი: el.style.padding = '20px'
მინიშნება: createElement მუშაობს ნებისმიერ ვალიდურ HTML ტეგთან: 'h3', 'p', 'span' და ა.შ.

წარმატებები 😀
*/

// const createCard = function (data) {
//   const card = document.createElement('div');
//   card.classList.add('card', `card--${data.category}`);
//
//   card.style.padding = '20px';
//   card.style.marginBottom = '12px';
//   card.style.borderRadius = '8px';
//   card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
//
//   const heading = document.createElement('h3');
//   heading.textContent = data.title;
//
//   const desc = document.createElement('p');
//   desc.textContent = data.description;
//
//   const badge = document.createElement('span');
//   badge.textContent = data.category;
//   badge.style.fontSize = '12px';
//   badge.style.color = '#fff';
//   badge.style.backgroundColor = '#3949ab';
//   badge.style.padding = '4px 8px';
//   badge.style.borderRadius = '4px';
//
//   card.appendChild(heading);
//   card.appendChild(desc);
//   card.appendChild(badge);
//
//   return card;
// };
//
// const cardsData = [
//   { title: 'JavaScript Closures', description: 'Scope-ისა და closure-ების გაგება JS-ში.', category: 'tech' },
//   { title: 'მარსის კვლევა', description: 'NASA-ს გეგმები მარსის მისიებისთვის 2030-ში.', category: 'science' },
//   { title: 'თანამედროვე ხელოვნება', description: 'როგორ ცვლის ციფრული ხელოვნება გალერეებს.', category: 'art' },
// ];
//
// console.log('--- ბარათის გენერატორი ---');
// for (let i = 0; i < cardsData.length; i++) {
//   const card = createCard(cardsData[i]);
//   document.body.appendChild(card);
//   console.log(`ბარათი ${i + 1} კლასები:`, card.classList.toString());
//   // ბარათი 1 კლასები: card card--tech
//   // ბარათი 2 კლასები: card card--science
//   // ბარათი 3 კლასები: card card--art
// }


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - ელემენტის გადამტანი
// (appendChild, insertBefore)

/*
თქვენ აშენებთ ამოცანების მართვის ინტერფეისს ორი სიით: წყარო სია
და დანიშნულების სია. მომხმარებლებს სჭირდებათ ელემენტების სიებს
შორის გადატანა. ეს ჩელენჯი ადემონსტრირებს DOM-ის კრიტიკულ
კონცეფციას — appendChild გადაიტანს ელემენტს თუ ის უკვე არსებობს
DOM-ში, და არა დააკოპირებს. ასევე გამოიყენებთ insertBefore-ს
ელემენტების განთავსების სამართავად.

1. შექმენით ორი <ul> ელემენტი: 'sourceList' და 'destList'. თითოეულს
   მიანიჭეთ id ('source-list' და 'dest-list') ადვილი იდენტიფიცირებისთვის.
2. შეავსეთ sourceList 4 <li> ელემენტით ციკლის გამოყენებით:
   ['საყიდლების გაკეთება', 'სახლის დალაგება', 'ანგარიშის დაწერა', 'სტომატოლოგთან დარეკვა']
3. ორივე სია document.body-ში დაამატეთ.
4. შექმენით ფუნქცია 'moveItem', რომელიც იღებს წყაროს <ul>-ს,
   დანიშნულების <ul>-ს და ინდექსს. უნდა:
   a) ამოიღოს შვილი ელემენტი მოცემულ ინდექსზე source.children-იდან
   b) თუ ის არსებობს, destination.appendChild(child)-ით გადაიტანოს
   c) დალოგოს რომელი ელემენტი გადავიდა და ორივე სიის ახალი რაოდენობები
   d) თუ ინდექსი არავალიდურია, დალოგოს "ელემენტი ინდექსზე <index> არ არსებობს"
5. შექმენით ფუნქცია 'moveToTop', რომელიც იღებს დანიშნულების <ul>-ს
   და შვილ ელემენტს, და insertBefore-ით ათავსებს მას დანიშნულების
   სიის პირველი შვილის წინ.
6. ტესტი: გადაიტანეთ ინდექს 0 წყაროდან დანიშნულებაში (დააკვირდით,
   რომ ის გაქრება წყაროდან), შემდეგ ისევ გადაიტანეთ ინდექს 0,
   შემდეგ moveToTop-ით მომდევნო ელემენტი დანიშნულების სიის თავში მოათავსეთ.

სატესტო მონაცემები: ['საყიდლების გაკეთება', 'სახლის დალაგება', 'ანგარიშის დაწერა', 'სტომატოლოგთან დარეკვა']

მინიშნება: appendChild არსებულ DOM ელემენტზე გამოძახებისას გადაიტანს მას (არ კოპირებს)
მინიშნება: parent.children[index] შვილ ელემენტებს ინდექსით მიწვდება
მინიშნება: parent.insertBefore(newChild, referenceChild) referenceChild-ის წინ ჩასვამს
მინიშნება: parent.firstElementChild აბრუნებს პირველ შვილ ელემენტს (ან null-ს)

წარმატებები 😀
*/

// const sourceList = document.createElement('ul');
// sourceList.id = 'source-list';
// const destList = document.createElement('ul');
// destList.id = 'dest-list';
//
// const tasks = ['საყიდლების გაკეთება', 'სახლის დალაგება', 'ანგარიშის დაწერა', 'სტომატოლოგთან დარეკვა'];
// for (let i = 0; i < tasks.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = tasks[i];
//   sourceList.appendChild(li);
// }
//
// document.body.appendChild(sourceList);
// document.body.appendChild(destList);
//
// console.log('--- ელემენტის გადამტანი ---');
// console.log('წყაროს ელემენტები:', sourceList.children.length); // 4
// console.log('დანიშნულების ელემენტები:', destList.children.length); // 0
//
// const moveItem = function (source, dest, index) {
//   const child = source.children[index];
//   if (!child) {
//     console.log(`ელემენტი ინდექსზე ${index} არ არსებობს`);
//     return;
//   }
//   const text = child.textContent;
//   dest.appendChild(child);
//   console.log(`გადავიდა: "${text}"`);
//   console.log(`წყაროს რაოდენობა: ${source.children.length}, დანიშნულების რაოდენობა: ${dest.children.length}`);
// };
//
// const moveToTop = function (dest, child) {
//   const first = dest.firstElementChild;
//   if (first) {
//     dest.insertBefore(child, first);
//   } else {
//     dest.appendChild(child);
//   }
//   console.log(`"${child.textContent}" სიის თავში გადავიდა`);
// };
//
// moveItem(sourceList, destList, 0);
// // გადავიდა: "საყიდლების გაკეთება"
// // წყაროს რაოდენობა: 3, დანიშნულების რაოდენობა: 1
//
// moveItem(sourceList, destList, 0);
// // გადავიდა: "სახლის დალაგება"
// // წყაროს რაოდენობა: 2, დანიშნულების რაოდენობა: 2
//
// // "ანგარიშის დაწერა" დანიშნულების სიის თავში გადატანა
// const itemToMove = sourceList.children[0];
// moveToTop(destList, itemToMove);
// // "ანგარიშის დაწერა" სიის თავში გადავიდა
//
// console.log('---');
// console.log('წყაროს საბოლოო რაოდენობა:', sourceList.children.length); // 1
// console.log('დანიშნულების საბოლოო რაოდენობა:', destList.children.length); // 3


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - დინამიური ცხრილის აღმშენებელი
// (createElement, appendChild, DocumentFragment)

/*
თქვენ აშენებთ ქულების ანგარიშგების სისტემას, რომელიც სტრუქტურირებული
მონაცემებიდან HTML ცხრილებს აგენერირებს. ეს ჩელენჯი გასწავლით როგორ
ავაშენოთ რთული ჩადგმული DOM სტრუქტურები (table > thead > tr > th,
table > tbody > tr > td) და შემოგაცნობთ DocumentFragment-ს, რომელიც
მრავალი რიგის ჯგუფურად ჩასმისთვის გამოიყენება. DocumentFragment არის
მსუბუქი კონტეინერი, რომელიც განმეორებით reflow-ებს თავიდან აგვარიდებს.

1. შექმენით ფუნქცია 'createTable', რომელიც იღებს ორ არგუმენტს:
   - headers: სტრინგების მასივი (სვეტების სახელები)
   - data: 2D მასივი (რიგების მასივების მასივი)
2. ფუნქციის შიგნით:
   a) შექმენით <table> ელემენტი
   b) შექმენით <thead> ელემენტი ერთი <tr>-ით
   c) გაიარეთ headers ციკლით, თითოეულისთვის შექმენით <th>,
      დააყენეთ textContent, დაამატეთ რიგში
   d) რიგი <thead>-ში დაამატეთ, <thead> <table>-ში
   e) შექმენით <tbody> ელემენტი
   f) შექმენით DocumentFragment
   g) გაიარეთ მონაცემთა რიგები ციკლით: თითოეული რიგისთვის შექმენით <tr>,
      თითოეული უჯრის მნიშვნელობისთვის შექმენით <td>, დააყენეთ textContent,
      დაამატეთ რიგში. თითოეული მზა <tr> DocumentFragment-ში დაამატეთ.
   h) DocumentFragment <tbody>-ში დაამატეთ
   i) <tbody> <table>-ში დაამატეთ
3. დააბრუნეთ <table> ელემენტი.
4. დაასტილეთ ცხრილი: border '1px solid #ccc', borderCollapse 'collapse',
   width '100%'. თითოეულ th/td-ს შექმნის შემდეგ დაასტილეთ:
   padding '8px 12px', border '1px solid #ddd', textAlign 'left'.
5. გამოიძახეთ createTable სატესტო მონაცემებით და document.body-ში დაამატეთ.
6. დალოგეთ გენერირებულ ცხრილში რიგებისა და სვეტების რაოდენობა.

სატესტო მონაცემები:
  სათაურები: ['სახელი', 'საგანი', 'ქულა', 'სტატუსი']
  მონაცემები:
    ['გიორგი ბერიძე', 'მათემატიკა', '95', 'ჩაბარებული']
    ['ნინო გელაშვილი', 'ფიზიკა', '82', 'ჩაბარებული']
    ['ლუკა ციკლაური', 'ქიმია', '58', 'ჩაჭრილი']
    ['მარიამ ჯანელიძე', 'ბიოლოგია', '91', 'ჩაბარებული']
    ['დავით კვარაცხელია', 'ისტორია', '74', 'ჩაბარებული']

მინიშნება: document.createDocumentFragment() ქმნის მსუბუქ კონტეინერს
მინიშნება: ფრაგმენტის DOM-ში დამატებისას მისი ყველა შვილი ერთდროულად გადაინაცვლებს
მინიშნება: table.getElementsByTagName('tr').length ყველა რიგს ითვლის (სათაურის ჩათვლით)
მინიშნება: ჩადგმული ციკლები: გარეთა რიგებისთვის, შიდა უჯრებისთვის

წარმატებები 😀
*/

// const createTable = function (headers, data) {
//   const table = document.createElement('table');
//   table.style.border = '1px solid #ccc';
//   table.style.borderCollapse = 'collapse';
//   table.style.width = '100%';
//
//   // thead-ის აშენება
//   const thead = document.createElement('thead');
//   const headerRow = document.createElement('tr');
//   for (let i = 0; i < headers.length; i++) {
//     const th = document.createElement('th');
//     th.textContent = headers[i];
//     th.style.padding = '8px 12px';
//     th.style.border = '1px solid #ddd';
//     th.style.textAlign = 'left';
//     th.style.backgroundColor = '#3949ab';
//     th.style.color = '#fff';
//     headerRow.appendChild(th);
//   }
//   thead.appendChild(headerRow);
//   table.appendChild(thead);
//
//   // tbody-ის აშენება DocumentFragment-ით
//   const tbody = document.createElement('tbody');
//   const fragment = document.createDocumentFragment();
//
//   for (let i = 0; i < data.length; i++) {
//     const tr = document.createElement('tr');
//     for (let j = 0; j < data[i].length; j++) {
//       const td = document.createElement('td');
//       td.textContent = data[i][j];
//       td.style.padding = '8px 12px';
//       td.style.border = '1px solid #ddd';
//       td.style.textAlign = 'left';
//       tr.appendChild(td);
//     }
//     fragment.appendChild(tr);
//   }
//
//   tbody.appendChild(fragment);
//   table.appendChild(tbody);
//
//   return table;
// };
//
// const headers = ['სახელი', 'საგანი', 'ქულა', 'სტატუსი'];
// const studentData = [
//   ['გიორგი ბერიძე', 'მათემატიკა', '95', 'ჩაბარებული'],
//   ['ნინო გელაშვილი', 'ფიზიკა', '82', 'ჩაბარებული'],
//   ['ლუკა ციკლაური', 'ქიმია', '58', 'ჩაჭრილი'],
//   ['მარიამ ჯანელიძე', 'ბიოლოგია', '91', 'ჩაბარებული'],
//   ['დავით კვარაცხელია', 'ისტორია', '74', 'ჩაბარებული'],
// ];
//
// const table = createTable(headers, studentData);
// document.body.appendChild(table);
//
// console.log('--- დინამიური ცხრილის აღმშენებელი ---');
// const allRows = table.getElementsByTagName('tr');
// const allCols = table.getElementsByTagName('th');
// console.log('სულ რიგები (სათაურის ჩათვლით):', allRows.length); // 6
// console.log('სვეტების რაოდენობა:', allCols.length);             // 4
// console.log('მონაცემთა რიგები:', allRows.length - 1);            // 5


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - BONUS: მინი კომპონენტის ქარხანა
// (ყველა მეთოდი ერთად)

/*
თქვენ აშენებთ მინი UI ფრეიმვორქს. იდეა არის ერთი ქარხნული ფუნქციის
შექმნა, რომელიც კონფიგურაციის ობიექტს იღებს და სრულად აშენებულ DOM
ელემენტს აბრუნებს. ეს პატერნი რეალურ კომპონენტების ბიბლიოთეკებში
გამოიყენება. ქარხანა უნდა მხარს უჭერდეს რამდენიმე კომპონენტის ტიპს,
თითოეული სხვადასხვა HTML სტრუქტურას, შესაბამის კლასებს და ივენთ
ლისენერებს აწარმოებს.

1. შექმენით ფუნქცია 'createComponent', რომელიც იღებს config ობიექტს.
   კონფიგს აქვს: { type, text, variant, onClick }.
2. სამი კომპონენტის ტიპი მხარდაჭერილი უნდა იყოს:
   a) type: 'button'
      - შექმენით <button> ელემენტი
      - დაამატეთ კლასი 'btn' და 'btn--' + variant (მაგ., 'btn--primary')
      - დააყენეთ textContent config.text-ზე
      - სტილი: padding '10px 20px', border 'none', borderRadius '6px',
        cursor 'pointer', fontSize '14px'
      - თუ variant არის 'primary': backgroundColor '#3949ab', color '#fff'
      - თუ variant არის 'danger': backgroundColor '#c62828', color '#fff'
      - თუ variant არის 'outline': backgroundColor 'transparent',
        border '2px solid #3949ab', color '#3949ab'
      - თუ onClick მოწოდებულია, დაამატეთ click ივენთ ლისენერი
   b) type: 'card'
      - შექმენით <div> კლასით 'component-card'
      - config-ს აქვს დამატებითი თვისებები: title, description
      - შექმენით <h3> სათაურისთვის და <p> აღწერისთვის div-ის შიგნით
      - სტილი: padding '16px', border '1px solid #e0e0e0',
        borderRadius '8px', marginBottom '12px'
   c) type: 'alert'
      - შექმენით <div> კლასებით 'alert' და 'alert--' + variant
      - config-ს აქვს დამატებითი თვისება: message
      - დააყენეთ textContent config.message-ზე
      - შექმენით დახურვის <button> (ტექსტი 'X') alert-ის შიგნით
      - დახურვის ღილაკის click ლისენერმა alert-ის style.display
        'none'-ზე უნდა დააყენოს
      - სტილი: padding '12px 16px', borderRadius '6px',
        marginBottom '8px', display 'flex', justifyContent 'space-between',
        alignItems 'center'
      - თუ variant არის 'success': backgroundColor '#e8f5e9', color '#2e7d32'
      - თუ variant არის 'error': backgroundColor '#ffebee', color '#c62828'
      - თუ variant არის 'info': backgroundColor '#e3f2fd', color '#1565c0'
3. თუ ტიპი არ არის ცნობილი, დალოგეთ "უცნობი კომპონენტის ტიპი: <type>"
   და დააბრუნეთ null.
4. შექმენით თითოეული ტიპის ერთი კომპონენტი და document.body-ში დაამატეთ.
5. დალოგეთ თითოეული კომპონენტის outerHTML და classList.

სატესტო მონაცემები:
  ღილაკი: { type: 'button', text: 'ცვლილებების შენახვა', variant: 'primary', onClick: function () { console.log('შენახულია!'); } }
  ბარათი: { type: 'card', title: 'მოგესალმებით', description: 'ეს თქვენი დეშბორდია.', variant: 'default' }
  გაფრთხილება: { type: 'alert', message: 'ოპერაცია წარმატებით დასრულდა!', variant: 'success' }

მინიშნება: სხვადასხვა კომპონენტის ტიპების სამართავად გამოიყენეთ if/else ან switch
მინიშნება: element.addEventListener('click', handler) click ლისენერს ამაგრებს
მინიშნება: alert-ის დახურვის ღილაკს საკუთარი ცალკე ივენთ ლისენერი სჭირდება
მინიშნება: რთული სტრუქტურებისთვის createElement და appendChild გამოძახებები ჩადგმადია

წარმატებები 😀
*/

// const createComponent = function (config) {
//   if (config.type === 'button') {
//     const btn = document.createElement('button');
//     btn.classList.add('btn', `btn--${config.variant}`);
//     btn.textContent = config.text;
//
//     btn.style.padding = '10px 20px';
//     btn.style.border = 'none';
//     btn.style.borderRadius = '6px';
//     btn.style.cursor = 'pointer';
//     btn.style.fontSize = '14px';
//
//     if (config.variant === 'primary') {
//       btn.style.backgroundColor = '#3949ab';
//       btn.style.color = '#fff';
//     } else if (config.variant === 'danger') {
//       btn.style.backgroundColor = '#c62828';
//       btn.style.color = '#fff';
//     } else if (config.variant === 'outline') {
//       btn.style.backgroundColor = 'transparent';
//       btn.style.border = '2px solid #3949ab';
//       btn.style.color = '#3949ab';
//     }
//
//     if (config.onClick) {
//       btn.addEventListener('click', config.onClick);
//     }
//
//     return btn;
//
//   } else if (config.type === 'card') {
//     const card = document.createElement('div');
//     card.classList.add('component-card');
//
//     card.style.padding = '16px';
//     card.style.border = '1px solid #e0e0e0';
//     card.style.borderRadius = '8px';
//     card.style.marginBottom = '12px';
//
//     const heading = document.createElement('h3');
//     heading.textContent = config.title;
//
//     const desc = document.createElement('p');
//     desc.textContent = config.description;
//
//     card.appendChild(heading);
//     card.appendChild(desc);
//
//     return card;
//
//   } else if (config.type === 'alert') {
//     const alert = document.createElement('div');
//     alert.classList.add('alert', `alert--${config.variant}`);
//
//     alert.style.padding = '12px 16px';
//     alert.style.borderRadius = '6px';
//     alert.style.marginBottom = '8px';
//     alert.style.display = 'flex';
//     alert.style.justifyContent = 'space-between';
//     alert.style.alignItems = 'center';
//
//     if (config.variant === 'success') {
//       alert.style.backgroundColor = '#e8f5e9';
//       alert.style.color = '#2e7d32';
//     } else if (config.variant === 'error') {
//       alert.style.backgroundColor = '#ffebee';
//       alert.style.color = '#c62828';
//     } else if (config.variant === 'info') {
//       alert.style.backgroundColor = '#e3f2fd';
//       alert.style.color = '#1565c0';
//     }
//
//     const msgSpan = document.createElement('span');
//     msgSpan.textContent = config.message;
//
//     const closeBtn = document.createElement('button');
//     closeBtn.textContent = 'X';
//     closeBtn.style.border = 'none';
//     closeBtn.style.background = 'transparent';
//     closeBtn.style.cursor = 'pointer';
//     closeBtn.style.fontSize = '16px';
//     closeBtn.style.fontWeight = 'bold';
//     closeBtn.style.color = 'inherit';
//     closeBtn.addEventListener('click', function () {
//       alert.style.display = 'none';
//     });
//
//     alert.appendChild(msgSpan);
//     alert.appendChild(closeBtn);
//
//     return alert;
//
//   } else {
//     console.log(`უცნობი კომპონენტის ტიპი: ${config.type}`);
//     return null;
//   }
// };
//
// console.log('--- მინი კომპონენტის ქარხანა ---');
//
// const btn = createComponent({
//   type: 'button',
//   text: 'ცვლილებების შენახვა',
//   variant: 'primary',
//   onClick: function () { console.log('შენახულია!'); },
// });
// document.body.appendChild(btn);
// console.log('ღილაკის კლასები:', btn.classList.toString()); // btn btn--primary
//
// const card = createComponent({
//   type: 'card',
//   title: 'მოგესალმებით',
//   description: 'ეს თქვენი დეშბორდია.',
//   variant: 'default',
// });
// document.body.appendChild(card);
// console.log('ბარათის კლასები:', card.classList.toString()); // component-card
//
// const alertEl = createComponent({
//   type: 'alert',
//   message: 'ოპერაცია წარმატებით დასრულდა!',
//   variant: 'success',
// });
// document.body.appendChild(alertEl);
// console.log('გაფრთხილების კლასები:', alertEl.classList.toString()); // alert alert--success
//
// // უცნობი ტიპის ტესტი
// const unknown = createComponent({ type: 'slider', text: 'ტესტი' });
// console.log('უცნობის შედეგი:', unknown); // null
