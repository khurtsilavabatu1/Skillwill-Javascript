'use strict';

////////////////////////////////////
// ობიექტები, Date და სტრინგები
// სავარჯიშო ჩელენჯები - ამოხსნებით
////////////////////////////////////


////////////////////////////////////
// სავარჯიშო ჩელენჯი #1 - სტუდენტის პროფილის მენეჯერი
// (ობიექტები -- შექმნა, თვისებები, მეთოდები)

/*
ააწყვეთ სტუდენტის პროფილის სისტემა ობიექტების, თვისებებისა და მეთოდების
გამოყენებით.

1. შექმენით ობიექტი 'student1' შემდეგი თვისებებით:
   - firstName: 'Ana'
   - lastName: 'Kvirikashvili'
   - age: 21
   - course: 'Computer Science'
   - grades: [85, 92, 78, 95, 88]
   - მეთოდი 'getFullName', რომელიც აბრუნებს სრულ სახელს 'this'-ის გამოყენებით
   - მეთოდი 'calcAverage', რომელიც for ციკლით ითვლის და აბრუნებს
     ნიშნების მასივის საშუალოს
   - მეთოდი 'getStatus', რომელიც აბრუნებს:
     "Excellent" თუ საშუალო >= 90
     "Good" თუ საშუალო >= 75 და < 90
     "Needs Improvement" თუ საშუალო < 75
   - მეთოდი 'getSummary', რომელიც აბრუნებს სტრინგს, მაგალითად:
     "Ana Kvirikashvili (21) - Computer Science | Average: 87.6 - Good"

2. შექმენით მეორე ობიექტი 'student2':
   - firstName: 'Luka'
   - lastName: 'Beridze'
   - age: 23
   - course: 'Mathematics'
   - grades: [92, 96, 89, 94, 91]
   - იგივე მეთოდები, რაც student1-ს

3. დალოგეთ თითოეული სტუდენტის სრული სახელი getFullName()-ით
4. დალოგეთ თითოეული სტუდენტის საშუალო calcAverage()-ით
5. დალოგეთ თითოეული სტუდენტის სრული ანგარიში getSummary()-ით
6. შეადარეთ ორივე სტუდენტი და დალოგეთ ვის აქვს უფრო მაღალი საშუალო
7. დაამატეთ ახალი თვისება 'email' student1-ს dot notation-ით
8. დაამატეთ ახალი თვისება 'year' student2-ს bracket notation-ით
9. გამოიყენეთ Object.keys() student1-ის ყველა თვისების სახელის ჩამოსათვლელად
10. გამოიყენეთ Object.values() student2-ის ყველა მნიშვნელობის ჩამოსათვლელად

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი მონაცემები

მინიშნება: ობიექტის მეთოდებში გამოიყენეთ 'this' ობიექტის საკუთარ თვისებებზე წვდომისთვის
მინიშნება: this.grades.length გაძლევთ ნიშნების რაოდენობას
მინიშნება: getSummary-ს შეუძლია შიგნიდან გამოიძახოს this.calcAverage() და this.getStatus()

წარმატებები :)
*/

// const student1 = {
//   firstName: 'Ana',
//   lastName: 'Kvirikashvili',
//   age: 21,
//   course: 'Computer Science',
//   grades: [85, 92, 78, 95, 88],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   calcAverage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
//   getStatus: function () {
//     const avg = this.calcAverage();
//     if (avg >= 90) return 'Excellent';
//     else if (avg >= 75) return 'Good';
//     else return 'Needs Improvement';
//   },
//   getSummary: function () {
//     return `${this.getFullName()} (${this.age}) - ${this.course} | Average: ${this.calcAverage()} - ${this.getStatus()}`;
//   },
// };

// const student2 = {
//   firstName: 'Luka',
//   lastName: 'Beridze',
//   age: 23,
//   course: 'Mathematics',
//   grades: [92, 96, 89, 94, 91],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   calcAverage: function () {
//     let sum = 0;
//     for (let i = 0; i < this.grades.length; i++) {
//       sum += this.grades[i];
//     }
//     return sum / this.grades.length;
//   },
//   getStatus: function () {
//     const avg = this.calcAverage();
//     if (avg >= 90) return 'Excellent';
//     else if (avg >= 75) return 'Good';
//     else return 'Needs Improvement';
//   },
//   getSummary: function () {
//     return `${this.getFullName()} (${this.age}) - ${this.course} | Average: ${this.calcAverage()} - ${this.getStatus()}`;
//   },
// };

// // სრული სახელები
// console.log(student1.getFullName());
// console.log(student2.getFullName());

// // საშუალოები
// console.log(`${student1.firstName}-ს საშუალო: ${student1.calcAverage()}`);
// console.log(`${student2.firstName}-ს საშუალო: ${student2.calcAverage()}`);

// // ანგარიშები
// console.log(student1.getSummary());
// console.log(student2.getSummary());

// // შედარება
// const avg1 = student1.calcAverage();
// const avg2 = student2.calcAverage();
// if (avg1 > avg2) {
//   console.log(`${student1.getFullName()}-ს აქვს უფრო მაღალი საშუალო!`);
// } else if (avg2 > avg1) {
//   console.log(`${student2.getFullName()}-ს აქვს უფრო მაღალი საშუალო!`);
// } else {
//   console.log("ორივე სტუდენტს ერთნაირი საშუალო აქვს!");
// }

// // ახალი თვისებების დამატება
// student1.email = 'ana.k@university.ge';
// student2['year'] = 3;

// // Object.keys და Object.values
// console.log('Student1-ის თვისებები:', Object.keys(student1));
// console.log('Student2-ის მნიშვნელობები:', Object.values(student2));


////////////////////////////////////
// სავარჯიშო ჩელენჯი #2 - პროდუქტების კატალოგი
// (ობიექტების მასივი -- მონაცემების დამუშავება)

/*
ააწყვეთ პროდუქტების კატალოგის სისტემა ობიექტების მასივისა და მასივის
მეთოდების გამოყენებით.

1. შექმენით მასივი 'products' შემდეგი პროდუქტის ობიექტებით:
   { name: 'Laptop', category: 'Electronics', price: 2500, inStock: true }
   { name: 'Headphones', category: 'Electronics', price: 150, inStock: true }
   { name: 'Desk Chair', category: 'Furniture', price: 450, inStock: false }
   { name: 'Keyboard', category: 'Electronics', price: 80, inStock: true }
   { name: 'Bookshelf', category: 'Furniture', price: 320, inStock: true }
   { name: 'Monitor', category: 'Electronics', price: 600, inStock: false }
   { name: 'Desk Lamp', category: 'Furniture', price: 45, inStock: true }

2. გამოიყენეთ find() 'Keyboard' სახელის პროდუქტის მოსაძებნად და დალოგეთ
3. გამოიყენეთ filter() 'Electronics' კატეგორიის ყველა პროდუქტის მისაღებად
4. გამოიყენეთ filter() მარაგში არსებული ყველა პროდუქტის მისაღებად
5. გამოიყენეთ map() მხოლოდ პროდუქტების სახელების მასივის შესაქმნელად
6. გამოიყენეთ map() ობიექტების მასივის შესაქმნელად სახელით და ფასდაკლებული
   ფასით (20% ფასდაკლება): { name: '...', discountPrice: ... }
7. გამოიყენეთ reduce() ყველა პროდუქტის ჯამური ფასის გამოსათვლელად
8. გამოიყენეთ reduce() ყველაზე ძვირი პროდუქტის მოსაძებნად
9. დაალაგეთ პროდუქტები ფასის მიხედვით (ზრდადობით) sort()-ის გამოყენებით
10. დაალაგეთ პროდუქტები ფასის მიხედვით (კლებადობით) sort()-ის გამოყენებით
11. გამოიყენეთ forEach() თითოეული პროდუქტის დასალოგად: "Laptop - $2500 (Electronics)"
12. გააერთიანეთ filter და map: მიიღეთ მარაგში არსებული Electronics პროდუქტების სახელები

სატესტო მონაცემები: გამოიყენეთ ზემოთ ჩამოთვლილი პროდუქტები

მინიშნება: find() აბრუნებს პირველ შესაბამის ელემენტს, filter() აბრუნებს ყველა შესაბამისს
მინიშნება: reduce() იღებს (accumulator, currentValue) => ... და საწყის მნიშვნელობას
მინიშნება: sort() ცვლის ორიგინალ მასივს — გამოიყენეთ [...products].sort() ასლისთვის
მინიშნება: chain-ისთვის შეგიძლიათ: products.filter(...).map(...)

წარმატებები :)
*/

// const products = [
//   { name: 'Laptop', category: 'Electronics', price: 2500, inStock: true },
//   { name: 'Headphones', category: 'Electronics', price: 150, inStock: true },
//   { name: 'Desk Chair', category: 'Furniture', price: 450, inStock: false },
//   { name: 'Keyboard', category: 'Electronics', price: 80, inStock: true },
//   { name: 'Bookshelf', category: 'Furniture', price: 320, inStock: true },
//   { name: 'Monitor', category: 'Electronics', price: 600, inStock: false },
//   { name: 'Desk Lamp', category: 'Furniture', price: 45, inStock: true },
// ];

// // 2. Keyboard-ის პოვნა
// const keyboard = products.find(p => p.name === 'Keyboard');
// console.log('ნაპოვნია:', keyboard);

// // 3. კატეგორიით ფილტრაცია
// const electronics = products.filter(p => p.category === 'Electronics');
// console.log('ელექტრონიკა:', electronics);

// // 4. მარაგში არსებულის ფილტრაცია
// const inStockProducts = products.filter(p => p.inStock);
// console.log('მარაგშია:', inStockProducts);

// // 5. სახელების მასივი
// const productNames = products.map(p => p.name);
// console.log('პროდუქტების სახელები:', productNames);

// // 6. ფასდაკლებული ფასები
// const discounted = products.map(p => ({
//   name: p.name,
//   discountPrice: p.price * 0.8,
// }));
// console.log('ფასდაკლებული:', discounted);

// // 7. ჯამური ფასი
// const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
// console.log('ჯამური ფასი:', totalPrice);

// // 8. ყველაზე ძვირი
// const mostExpensive = products.reduce((max, p) =>
//   p.price > max.price ? p : max
// );
// console.log('ყველაზე ძვირი:', mostExpensive);

// // 9. ზრდადობით დალაგება
// const sortedAsc = [...products].sort((a, b) => a.price - b.price);
// console.log('ზრდადობით:', sortedAsc);

// // 10. კლებადობით დალაგება
// const sortedDesc = [...products].sort((a, b) => b.price - a.price);
// console.log('კლებადობით:', sortedDesc);

// // 11. forEach ლოგირება
// products.forEach(p =>
//   console.log(`${p.name} - $${p.price} (${p.category})`)
// );

// // 12. filter + map chain
// const inStockElectronicsNames = products
//   .filter(p => p.category === 'Electronics' && p.inStock)
//   .map(p => p.name);
// console.log('მარაგში არსებული ელექტრონიკა:', inStockElectronicsNames);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #3 - ივენთის უკუთვლა
// (Date ობიექტი)

/*
ააწყვეთ ივენთის უკუთვლის კალკულატორი Date ობიექტების გამოყენებით.

1. შექმენით ფუნქცია 'createEventDate', რომელიც იღებს თარიღის სტრინგს
   (მაგ., '2026-12-31') და აბრუნებს ახალ Date ობიექტს

2. შექმენით ფუნქცია 'getEventDetails', რომელიც იღებს Date ობიექტს და
   აბრუნებს ობიექტს შემდეგი ინფორმაციით:
   - year: getFullYear()-ის გამოყენებით
   - month: getMonth() + 1 (რადგან getMonth 0-ზე დაფუძნებულია)
   - day: getDate()-ის გამოყენებით
   - hours: getHours()-ის გამოყენებით
   - minutes: getMinutes()-ის გამოყენებით
   - dayOfWeek: getDay()-ის გამოყენებით, გარდაქმნილი სახელად
     (0=კვირა, 1=ორშაბათი, ..., 6=შაბათი)

3. შექმენით ფუნქცია 'calcCountdown', რომელიც იღებს ივენთის თარიღის სტრინგს
   და აბრუნებს ობიექტს ივენთამდე დარჩენილი დღეების, საათების და წუთებით.
   - შექმენით Date „ახლა"-სთვის და Date ივენთისთვის
   - გამოთვალეთ სხვაობა მილიწამებში
   - გადაიყვანეთ დღეებში, საათებსა და წუთებში
   - თუ ივენთი უკვე გავიდა, დააბრუნეთ { passed: true }

4. შექმენით ფუნქცია 'formatDate', რომელიც იღებს Date ობიექტს და
   აბრუნებს ლამაზად დაფორმატებულ სტრინგს toLocaleDateString()-ისა და
   toLocaleTimeString()-ის გამოყენებით
   მაგალითი: "December 31, 2026, 12:00:00 AM"

5. შექმენით ფუნქცია 'compareDates', რომელიც იღებს ორ თარიღის სტრინგს
   და აბრუნებს რომელი მოდის პირველი
   მაგალითი: "2026-06-15 comes before 2026-12-31"

6. გატესტეთ ყველა ფუნქცია ამ თარიღებით:
   - ივენთი 1: '2026-12-31T23:59:59' (საახალწლო ღამე)
   - ივენთი 2: '2026-07-04T12:00:00' (4 ივლისი)
7. დალოგეთ თითოეული ივენთის დეტალები, უკუთვლა და დაფორმატებული ვერსია
8. შეადარეთ ორი თარიღი

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი ივენთის თარიღები

მინიშნება: სხვაობა მილიწამებში: eventDate - now (თარიღების გამოკლება შეიძლება)
მინიშნება: 1 დღე = 24 * 60 * 60 * 1000 მილიწამი
მინიშნება: გამოიყენეთ Math.floor() მთელი რიცხვების მისაღებად
მინიშნება: getDay() აბრუნებს 0-ს კვირისთვის — გამოიყენეთ დღეების სახელების მასივი

წარმატებები :)
*/

// const createEventDate = function (dateStr) {
//   return new Date(dateStr);
// };

// const getEventDetails = function (date) {
//   const dayNames = [
//     'კვირა',
//     'ორშაბათი',
//     'სამშაბათი',
//     'ოთხშაბათი',
//     'ხუთშაბათი',
//     'პარასკევი',
//     'შაბათი',
//   ];
//   return {
//     year: date.getFullYear(),
//     month: date.getMonth() + 1,
//     day: date.getDate(),
//     hours: date.getHours(),
//     minutes: date.getMinutes(),
//     dayOfWeek: dayNames[date.getDay()],
//   };
// };

// const calcCountdown = function (eventDateStr) {
//   const now = new Date();
//   const eventDate = new Date(eventDateStr);
//   const diffMs = eventDate - now;

//   if (diffMs < 0) {
//     return { passed: true };
//   }

//   const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

//   return { days, hours, minutes };
// };

// const formatDate = function (date) {
//   return date.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   }) + ', ' + date.toLocaleTimeString('en-US');
// };

// const compareDates = function (dateStr1, dateStr2) {
//   const date1 = new Date(dateStr1);
//   const date2 = new Date(dateStr2);
//   if (date1 < date2) {
//     return `${dateStr1} მოდის ${dateStr2}-ის წინ`;
//   } else if (date1 > date2) {
//     return `${dateStr2} მოდის ${dateStr1}-ის წინ`;
//   } else {
//     return `ორივე თარიღი ერთნაირია`;
//   }
// };

// // ივენთებით ტესტირება
// const event1Str = '2026-12-31T23:59:59';
// const event2Str = '2026-07-04T12:00:00';

// const event1 = createEventDate(event1Str);
// const event2 = createEventDate(event2Str);

// // ივენთის დეტალები
// console.log('--- ივენთი 1: საახალწლო ღამე ---');
// console.log('დეტალები:', getEventDetails(event1));
// console.log('უკუთვლა:', calcCountdown(event1Str));
// console.log('დაფორმატებული:', formatDate(event1));

// console.log('\n--- ივენთი 2: 4 ივლისი ---');
// console.log('დეტალები:', getEventDetails(event2));
// console.log('უკუთვლა:', calcCountdown(event2Str));
// console.log('დაფორმატებული:', formatDate(event2));

// // შედარება
// console.log('\n' + compareDates(event1Str, event2Str));


////////////////////////////////////
// სავარჯიშო ჩელენჯი #4 - ტექსტის ანალიზატორი
// (სტრინგის მეთოდები)

/*
ააწყვეთ ტექსტის ანალიზის ინსტრუმენტი სტრინგის მეთოდების გამოყენებით.

1. შექმენით ცვლადი 'paragraph' ამ ტექსტით:
   "JavaScript is a versatile programming language. JavaScript is used for
   web development, server-side applications, and mobile apps. Learning
   JavaScript opens many doors for developers around the world."

2. შექმენით ფუნქცია 'countWords', რომელიც იღებს სტრინგს, ყოფს ჰარებით,
   და აბრუნებს სიტყვების რაოდენობას

3. შექმენით ფუნქცია 'findLongestWord', რომელიც იღებს სტრინგს, ყოფს
   სიტყვებად და for ციკლით პოულობს და აბრუნებს ყველაზე გრძელ სიტყვას
   მინიშნება: ამოიღეთ პუნქტუაცია replace(/[.,!?;:]/g, '') შედარებამდე

4. შექმენით ფუნქცია 'countChar', რომელიც იღებს სტრინგს და სიმბოლოს,
   ორივეს გადაიყვანს ქვედა რეგისტრში და ითვლის სიმბოლოს გამეორებებს
   for ციკლით indexOf-ისა და საწყისი პოზიციის გამოყენებით

5. შექმენით ფუნქცია 'replaceWord', რომელიც იღებს სტრინგს, ძველ სიტყვას
   და ახალ სიტყვას, და აბრუნებს სტრინგს ყველა ჩანაცვლებით
   გამოიყენეთ split(oldWord).join(newWord) ან replaceAll()

6. შექმენით ფუნქცია 'toTitleCase', რომელიც იღებს სტრინგს და გადაიყვანს
   title case-ში (თითოეული სიტყვის პირველი ასო მთავრული, დანარჩენი პატარა)
   გამოიყენეთ: split, ციკლი slice/toUpperCase/toLowerCase-ით, join

7. შექმენით ფუნქცია 'extractEmails', რომელიც იღებს სტრინგს და აბრუნებს
   მასში ნაპოვნი ელ-ფოსტის მისამართების მასივს
   მინიშნება: გაყავით ჰარებით, გააფილტრეთ სიტყვები, რომლებიც შეიცავს '@' და '.'

8. შექმენით ფუნქცია 'truncateText', რომელიც იღებს სტრინგს და მაქსიმალურ
   სიგრძეს, და აბრუნებს '...'-ით შემოჭრილ სტრინგს, თუ ის აჭარბებს მაქსიმუმს
   გამოიყენეთ: slice

9. გატესტეთ ყველა ფუნქცია და დალოგეთ შედეგები

სატესტო მონაცემები: გამოიყენეთ ზემოთ აღწერილი პარაგრაფი
სატესტო მონაცემები ელ-ფოსტისთვის: "Contact us at info@example.com or support@test.org for help"

მინიშნება: str.split(' ') ყოფს სტრინგს სიტყვების მასივად
მინიშნება: str.indexOf(char, startPos) პოულობს შემდეგ გამეორებას startPos-ის შემდეგ
მინიშნება: word[0].toUpperCase() + word.slice(1).toLowerCase() აკაპიტალებს პირველ ასოს

წარმატებები :)
*/

// const paragraph =
//   'JavaScript is a versatile programming language. JavaScript is used for web development, server-side applications, and mobile apps. Learning JavaScript opens many doors for developers around the world.';

// // სიტყვების დათვლა
// const countWords = function (str) {
//   return str.split(' ').length;
// };

// // ყველაზე გრძელი სიტყვის პოვნა
// const findLongestWord = function (str) {
//   const words = str.split(' ');
//   let longest = '';
//   for (let i = 0; i < words.length; i++) {
//     const cleaned = words[i].replace(/[.,!?;:]/g, '');
//     if (cleaned.length > longest.length) {
//       longest = cleaned;
//     }
//   }
//   return longest;
// };

// // სიმბოლოს გამეორებების დათვლა
// const countChar = function (str, char) {
//   const lowerStr = str.toLowerCase();
//   const lowerChar = char.toLowerCase();
//   let count = 0;
//   let pos = lowerStr.indexOf(lowerChar);
//   while (pos !== -1) {
//     count++;
//     pos = lowerStr.indexOf(lowerChar, pos + 1);
//   }
//   return count;
// };

// // სიტყვის ჩანაცვლება
// const replaceWord = function (str, oldWord, newWord) {
//   return str.split(oldWord).join(newWord);
// };

// // Title case
// const toTitleCase = function (str) {
//   const words = str.toLowerCase().split(' ');
//   const titled = [];
//   for (let i = 0; i < words.length; i++) {
//     titled.push(words[i][0].toUpperCase() + words[i].slice(1));
//   }
//   return titled.join(' ');
// };

// // ელ-ფოსტების ამოღება
// const extractEmails = function (str) {
//   const words = str.split(' ');
//   const emails = [];
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].includes('@') && words[i].includes('.')) {
//       emails.push(words[i]);
//     }
//   }
//   return emails;
// };

// // ტექსტის შემოჭრა
// const truncateText = function (str, maxLen) {
//   if (str.length <= maxLen) return str;
//   return str.slice(0, maxLen) + '...';
// };

// // ყველა ფუნქციის ტესტირება
// console.log('--- ტექსტის ანალიზატორი ---');
// console.log(`სიტყვების რაოდენობა: ${countWords(paragraph)}`);
// console.log(`ყველაზე გრძელი სიტყვა: ${findLongestWord(paragraph)}`);
// console.log(`'a'-ს რაოდენობა: ${countChar(paragraph, 'a')}`);
// console.log(`'e'-ს რაოდენობა: ${countChar(paragraph, 'e')}`);
// console.log(`'JavaScript'-ის ჩანაცვლება 'JS'-ით: ${replaceWord(paragraph, 'JavaScript', 'JS')}`);
// console.log(`Title case: ${toTitleCase('hello world from javascript')}`);

// const emailText = 'Contact us at info@example.com or support@test.org for help';
// console.log(`ნაპოვნი ელ-ფოსტები: ${extractEmails(emailText)}`);
// console.log(`შემოჭრილი: ${truncateText(paragraph, 50)}`);


////////////////////////////////////
// სავარჯიშო ჩელენჯი #5 - კონტაქტების წიგნის აპლიკაცია
// (ობიექტები + მასივები + Date + სტრინგები კომბინირებული)

/*
ააწყვეთ სრული კონტაქტების წიგნის აპლიკაცია ობიექტების, მასივების, Date-ისა
და სტრინგის მეთოდების კომბინაციით.

1. შექმენით მასივი 'contacts' შემდეგი კონტაქტის ობიექტებით:
   {
     name: 'Ana Kvirikashvili',
     email: 'ana.k@email.com',
     phone: '+995-555-12-34-56',
     birthday: new Date(2000, 2, 15),  // 15 მარტი, 2000
     tags: ['friend', 'university']
   }
   {
     name: 'Luka Beridze',
     email: 'luka.b@email.com',
     phone: '+995-555-98-76-54',
     birthday: new Date(1998, 6, 22),  // 22 ივლისი, 1998
     tags: ['colleague', 'developer']
   }
   {
     name: 'Nino Lomidze',
     email: 'nino.l@email.com',
     phone: '+995-555-11-22-33',
     birthday: new Date(2001, 11, 5),  // 5 დეკემბერი, 2001
     tags: ['friend', 'neighbor']
   }
   {
     name: 'Giorgi Tsiklauri',
     email: 'giorgi.t@email.com',
     phone: '+995-555-44-55-66',
     birthday: new Date(1999, 0, 30),  // 30 იანვარი, 1999
     tags: ['colleague', 'friend']
   }

2. შექმენით ფუნქცია 'searchContacts', რომელიც იღებს კონტაქტების მასივს და
   საძიებო სიტყვას, და აბრუნებს ყველა კონტაქტს, რომლის სახელიც შეიცავს
   საძიებო სიტყვას (რეგისტრის გარეშე). გამოიყენეთ filter() და
   toLowerCase()/includes()

3. შექმენით ფუნქცია 'getUpcomingBirthdays', რომელიც იღებს კონტაქტების მასივს
   და აბრუნებს კონტაქტებს, რომელთა დაბადების დღე მომავალ 30 დღეშია.
   - მიიღეთ დღევანდელი თარიღი
   - თითოეული კონტაქტისთვის შექმენით „წელს დაბადების დღის" თარიღი
   - გამოთვალეთ სხვაობა დღეებში
   - თუ 0 <= სხვაობა <= 30, ჩართეთ ეს კონტაქტი
   მინიშნება: დააყენეთ დაბადების დღის წელი მიმდინარე წლად შესადარებლად

4. შექმენით ფუნქცია 'formatContactInfo', რომელიც იღებს კონტაქტის ობიექტს და
   აბრუნებს დაფორმატებულ მრავალხაზიან სტრინგს:
   "სახელი:   Ana Kvirikashvili
    ელ-ფოსტა: ana.k@email.com
    ტელეფონი: +995-555-12-34-56
    დაბ.დღე:  March 15, 2000
    თეგები:   friend, university"
   გამოიყენეთ padEnd() გასწორებისთვის და toLocaleDateString() დაბადების დღისთვის

5. შექმენით ფუნქცია 'addContact', რომელიც იღებს კონტაქტების მასივს და ახალ
   კონტაქტის ობიექტს, ამოწმებს, რომ სახელი და ელ-ფოსტა ცარიელი სტრინგები არ
   არის (trim()-ის გამოყენებით), და ამატებს კონტაქტს მასივში. აბრუნებს true თუ
   დაემატა, false თუ ვალიდაცია ჩაიშალა.

6. შექმენით ფუნქცია 'removeContact', რომელიც იღებს კონტაქტების მასივს და სახელს,
   პოულობს კონტაქტს სახელით (რეგისტრის გარეშე), შლის splice()-ით და აბრუნებს
   წაშლილ კონტაქტს (ან null თუ ვერ იპოვა)

7. შექმენით ფუნქცია 'getContactStats', რომელიც იღებს კონტაქტების მასივს და
   აბრუნებს ობიექტს:
   - totalContacts: კონტაქტების რაოდენობა
   - averageAge: საშუალო ასაკი, გამოთვლილი დაბადების დღეებიდან
   - allTags: ყველა უნიკალური თეგის მასივი (ციკლი და includes დუბლიკატების
     ასარიდებლად)
   - emailDomains: უნიკალური ელ-ფოსტის დომენების მასივი ('@'-ზე გაყოფა,
     მეორე ნაწილის აღება)

8. გატესტეთ ყველა ფუნქცია და დალოგეთ შედეგები

სატესტო მონაცემები: გამოიყენეთ ზემოთ ჩამოთვლილი კონტაქტები

მინიშნება: დაბადების დღის 30 დღეში შესამოწმებლად, დააყენეთ წელი მიმდინარე წლად
          და შეადარეთ დღევანდელ თარიღს
მინიშნება: გამოიყენეთ new Date().getFullYear() მიმდინარე წლის მისაღებად
მინიშნება: ასაკის გამოსათვლელად: მიმდინარეWელი - დაბადების წელი (გამარტივებული)
მინიშნება: უნიკალური მასივებისთვის, შეამოწმეთ includes()-ით push-ის წინ

წარმატებები :)
*/

// const contacts = [
//   {
//     name: 'Ana Kvirikashvili',
//     email: 'ana.k@email.com',
//     phone: '+995-555-12-34-56',
//     birthday: new Date(2000, 2, 15),
//     tags: ['friend', 'university'],
//   },
//   {
//     name: 'Luka Beridze',
//     email: 'luka.b@email.com',
//     phone: '+995-555-98-76-54',
//     birthday: new Date(1998, 6, 22),
//     tags: ['colleague', 'developer'],
//   },
//   {
//     name: 'Nino Lomidze',
//     email: 'nino.l@email.com',
//     phone: '+995-555-11-22-33',
//     birthday: new Date(2001, 11, 5),
//     tags: ['friend', 'neighbor'],
//   },
//   {
//     name: 'Giorgi Tsiklauri',
//     email: 'giorgi.t@email.com',
//     phone: '+995-555-44-55-66',
//     birthday: new Date(1999, 0, 30),
//     tags: ['colleague', 'friend'],
//   },
// ];

// // კონტაქტების ძებნა
// const searchContacts = function (contactsArr, searchTerm) {
//   return contactsArr.filter(c =>
//     c.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
// };

// // მოახლოებული დაბადების დღეები
// const getUpcomingBirthdays = function (contactsArr) {
//   const today = new Date();
//   const upcoming = [];

//   for (let i = 0; i < contactsArr.length; i++) {
//     const bday = contactsArr[i].birthday;
//     const thisYearBday = new Date(
//       today.getFullYear(),
//       bday.getMonth(),
//       bday.getDate()
//     );
//     const diffMs = thisYearBday - today;
//     const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

//     if (diffDays >= 0 && diffDays <= 30) {
//       upcoming.push(contactsArr[i]);
//     }
//   }

//   return upcoming;
// };

// // კონტაქტის ინფორმაციის ფორმატირება
// const formatContactInfo = function (contact) {
//   const bdayFormatted = contact.birthday.toLocaleDateString('en-US', {
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   });
//   return (
//     `${'სახელი:'.padEnd(12)}${contact.name}\n` +
//     `${'ელ-ფოსტა:'.padEnd(12)}${contact.email}\n` +
//     `${'ტელეფონი:'.padEnd(12)}${contact.phone}\n` +
//     `${'დაბ.დღე:'.padEnd(12)}${bdayFormatted}\n` +
//     `${'თეგები:'.padEnd(12)}${contact.tags.join(', ')}`
//   );
// };

// // კონტაქტის დამატება
// const addContact = function (contactsArr, newContact) {
//   if (!newContact.name || newContact.name.trim() === '') return false;
//   if (!newContact.email || newContact.email.trim() === '') return false;
//   contactsArr.push(newContact);
//   return true;
// };

// // კონტაქტის წაშლა
// const removeContact = function (contactsArr, name) {
//   for (let i = 0; i < contactsArr.length; i++) {
//     if (contactsArr[i].name.toLowerCase() === name.toLowerCase()) {
//       const removed = contactsArr.splice(i, 1);
//       return removed[0];
//     }
//   }
//   return null;
// };

// // კონტაქტების სტატისტიკა
// const getContactStats = function (contactsArr) {
//   const currentYear = new Date().getFullYear();
//   let totalAge = 0;
//   const allTags = [];
//   const emailDomains = [];

//   for (let i = 0; i < contactsArr.length; i++) {
//     const c = contactsArr[i];

//     // ასაკი
//     totalAge += currentYear - c.birthday.getFullYear();

//     // თეგები
//     for (let j = 0; j < c.tags.length; j++) {
//       if (!allTags.includes(c.tags[j])) {
//         allTags.push(c.tags[j]);
//       }
//     }

//     // ელ-ფოსტის დომენები
//     const domain = c.email.split('@')[1];
//     if (!emailDomains.includes(domain)) {
//       emailDomains.push(domain);
//     }
//   }

//   return {
//     totalContacts: contactsArr.length,
//     averageAge: totalAge / contactsArr.length,
//     allTags,
//     emailDomains,
//   };
// };

// // --- ყველა ფუნქციის ტესტირება ---
// console.log('=== კონტაქტების წიგნის აპლიკაცია ===\n');

// // ძებნა
// console.log('--- ძებნა "ana" ---');
// const searchResults = searchContacts(contacts, 'ana');
// searchResults.forEach(c => console.log(c.name));

// // მოახლოებული დაბადების დღეები
// console.log('\n--- მოახლოებული დაბადების დღეები (მომავალი 30 დღე) ---');
// const upcoming = getUpcomingBirthdays(contacts);
// if (upcoming.length === 0) {
//   console.log('მომავალ 30 დღეში დაბადების დღეები არ არის.');
// } else {
//   upcoming.forEach(c =>
//     console.log(`${c.name} - ${c.birthday.toLocaleDateString()}`)
//   );
// }

// // კონტაქტის ფორმატირება
// console.log('\n--- დაფორმატებული კონტაქტი ---');
// console.log(formatContactInfo(contacts[0]));

// // კონტაქტის დამატება
// console.log('\n--- კონტაქტის დამატება ---');
// const added = addContact(contacts, {
//   name: 'Tamar Javakhishvili',
//   email: 'tamar.j@email.com',
//   phone: '+995-555-77-88-99',
//   birthday: new Date(2002, 4, 10),
//   tags: ['friend'],
// });
// console.log(`კონტაქტი დაემატა: ${added}, სულ კონტაქტები: ${contacts.length}`);

// // კონტაქტის წაშლა
// console.log('\n--- კონტაქტის წაშლა ---');
// const removed = removeContact(contacts, 'Nino Lomidze');
// console.log(`წაშლილი: ${removed ? removed.name : 'ვერ მოიძებნა'}`);
// console.log(`დარჩენილი კონტაქტები: ${contacts.length}`);

// // სტატისტიკა
// console.log('\n--- კონტაქტების სტატისტიკა ---');
// const stats = getContactStats(contacts);
// console.log(`სულ კონტაქტები: ${stats.totalContacts}`);
// console.log(`საშუალო ასაკი: ${stats.averageAge}`);
// console.log(`ყველა თეგი: ${stats.allTags.join(', ')}`);
// console.log(`ელ-ფოსტის დომენები: ${stats.emailDomains.join(', ')}`);
