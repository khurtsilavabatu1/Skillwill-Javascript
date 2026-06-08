////////////////////////////////////
// ობიექტები, თარიღები და სტრინგები
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////


/*
═══════════════════════════════════════════════════════════════
1. ობიექტის ლიტერალები (OBJECT LITERALS)
═══════════════════════════════════════════════════════════════

ობიექტი არის გასაღები-მნიშვნელობის წყვილების კოლექცია,
რომელიც იქმნება {}-ით. თვისებები (Properties) ინახავს მონაცემებს,
მეთოდები (Methods) ინახავს ფუნქციებს. ობიექტები საშუალებას
გვაძლევს დაკავშირებული მონაცემები აღწერითი სახელებით
დავაჯგუფოთ, მასივებისგან განსხვავებით, რომლებიც რიცხვით
ინდექსებს იყენებენ.
*/

'use strict';

// ობიექტის შექმნა ობიექტის ლიტერალის სინტაქსით
const person = {
  firstName: 'Giorgi',
  lastName: 'Beridze',
  age: 28,
  isStudent: false,
  hobbies: ['reading', 'coding', 'hiking'],
};

// --- თვისებებზე წვდომა ---

// წერტილოვანი ნოტაცია — ყველაზე გავრცელებული, გამოიყენე როცა ზუსტ თვისების სახელს იცნობ
console.log(person.firstName); // 'Giorgi'
console.log(person.age); // 28

// ფრჩხილოვანი ნოტაცია — გამოიყენე დინამიური/გამოთვლილი თვისების სახელებისთვის
console.log(person['lastName']); // 'Beridze'
console.log(person['hobbies']); // ['reading', 'coding', 'hiking']

// დინამიური წვდომა — მხოლოდ ფრჩხილოვანი ნოტაცია მუშაობს აქ
const key = 'firstName';
console.log(person[key]); // 'Giorgi'

// გასაღების აწყობა ნაწილებიდან
const nameKey = 'Name';
console.log(person['first' + nameKey]); // 'Giorgi'
console.log(person['last' + nameKey]); // 'Beridze'

// --- თვისებების დამატება, შეცვლა და წაშლა ---

person.email = 'giorgi@example.com'; // დამატება წერტილოვანი ნოტაციით
person['phone'] = '+995 555 123456'; // დამატება ფრჩხილოვანი ნოტაციით
person.age = 29; // არსებული თვისების შეცვლა
delete person.phone; // თვისების წაშლა
console.log(person.email); // 'giorgi@example.com'
console.log(person.phone); // undefined — წაშლილია

// --- ჩადგმული ობიექტები ---

const student = {
  name: 'Nino',
  address: {
    city: 'Tbilisi',
    street: 'Rustaveli Ave',
    zip: '0108',
  },
  grades: [95, 88, 92],
};

console.log(student.address.city); // 'Tbilisi'
console.log(student['address']['street']); // 'Rustaveli Ave'


/*
═══════════════════════════════════════════════════════════════
2. დესტრუქტურიზაცია (DESTRUCTURING)
═══════════════════════════════════════════════════════════════

დესტრუქტურიზაცია საშუალებას გვაძლევს ობიექტებიდან
(ან მასივებიდან) მნიშვნელობები ამოვიღოთ ცალკეულ ცვლადებში
ერთი, სუფთა ბრძანებით.
*/

// ძირითადი დესტრუქტურიზაცია — ცვლადის სახელები უნდა ემთხვეოდეს თვისების სახელებს
const { firstName, lastName, age } = person;
console.log(firstName, lastName, age); // 'Giorgi' 'Beridze' 29

// სახელის შეცვლა დესტრუქტურიზაციისას — როცა სხვა ცვლადის სახელი გინდა
const { firstName: name1, age: userAge } = person;
console.log(name1, userAge); // 'Giorgi' 29

// ჩადგმული დესტრუქტურიზაცია — ჩადგმულ ობიექტებში ჩაწვდომა
const {
  address: { city, street },
} = student;
console.log(city, street); // 'Tbilisi' 'Rustaveli Ave'

// ნაგულისხმევი მნიშვნელობები — თუ თვისება არ არსებობს
const { nickname = 'Unknown' } = person;
console.log(nickname); // 'Unknown'


/*
═══════════════════════════════════════════════════════════════
3. გამოთვლითი Property სახელები და შემოკლებული სინტაქსი
   (COMPUTED PROPERTY NAMES & SHORTHAND SYNTAX)
═══════════════════════════════════════════════════════════════

ES6-მა ორი მოხერხებული ფუნქცია შემოიტანა ობიექტის ლიტერალებისთვის:
📌 გამოთვლითი Property სახელები: გამოსახულებები გასაღებებად []-ით
📌 Property შემოკლება: მნიშვნელობის გამოტოვება, როცა ცვლადის
   სახელი ემთხვევა გასაღებს
*/

// გამოთვლითი Property სახელები — გამოსახულებები []-ის შიგნით ხდება გასაღებები
const field = 'score';
const playerNum = 7;

const gameData = {
  [field]: 100,
  [`player_${playerNum}`]: 'Ronaldo',
  [field + 'Bonus']: 25,
};

console.log(gameData); // { score: 100, player_7: 'Ronaldo', scoreBonus: 25 }

// Property შემოკლება — არ არის საჭირო brand: brand ჩაწერა
const brand = 'Toyota';
const model = 'Camry';
const year = 2024;

const car = { brand, model, year };
console.log(car); // { brand: 'Toyota', model: 'Camry', year: 2024 }


/*
═══════════════════════════════════════════════════════════════
4. ობიექტის მეთოდები და `this` (OBJECT METHODS AND `this`)
═══════════════════════════════════════════════════════════════

როცა ფუნქცია ინახება ობიექტის თვისებად, მას მეთოდს ეძახიან.
მეთოდის შიგნით, `this` საკვანძო სიტყვა მიუთითებს ობიექტზე,
რომელმაც მეთოდი გამოიძახა.
*/

const calculator = {
  result: 0,

  // შემოკლებული მეთოდის სინტაქსი (თანამედროვე, სასურველი)
  add(a, b) {
    this.result = a + b;
    return this.result;
  },
  subtract(a, b) {
    this.result = a - b;
    return this.result;
  },
  multiply(a, b) {
    this.result = a * b;
    return this.result;
  },
  getResult() {
    return this.result;
  },
};

// 'this' მიუთითებს ობიექტზე, რომელმაც გამოიძახა მეთოდი
console.log(calculator.add(10, 5)); // 15
console.log(calculator.multiply(4, 3)); // 12
console.log(calculator.getResult()); // 12

// პრაქტიკული მაგალითი — user ობიექტი მეთოდებით, რომლებიც იყენებენ 'this'-ს
const user = {
  firstName: 'Ana',
  lastName: 'Kapanadze',
  birthYear: 1995,

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  },
  introduce() {
    return `Hi, I'm ${this.getFullName()}, age ${this.getAge()}.`;
  },
};

console.log(user.getFullName()); // 'Ana Kapanadze'
console.log(user.introduce()); // 'Hi, I'm Ana Kapanadze, age 31.'

// --- მეთოდების ჯაჭვური გამოძახება ---
// 'this'-ის დაბრუნება მეთოდიდან საშუალებას იძლევა გამოძახებების ჯაჭვის

const bankAccount = {
  owner: 'Davit Maisuradze',
  balance: 1500,
  transactions: [],

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
    console.log(`Deposited $${amount}. Balance: $${this.balance}`);
    return this; // this-ის დაბრუნება ჯაჭვის საშუალებას იძლევა
  },
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds!');
      return this;
    }
    this.balance -= amount;
    this.transactions.push({ type: 'withdrawal', amount });
    console.log(`Withdrew $${amount}. Balance: $${this.balance}`);
    return this;
  },
};

bankAccount.deposit(500).deposit(200).withdraw(100);
// Deposited $500. Balance: $2000
// Deposited $200. Balance: $2200
// Withdrew $100. Balance: $2100

// რატომ ვიყენებთ 'this'-ს ობიექტის სახელის ნაცვლად?
// - 'this' დინამიურია: მუშაობს ცვლადის სახელის შეცვლის შემთხვევაშიც
// - bankAccount.balance მუშაობს, მაგრამ მყიფეა (ხისტად დაფიქსირებული სახელი)
// - this.balance მოქნილია და თვითმიმართვითია

// შენიშვნა: ისრიან ფუნქციებს არ აქვთ საკუთარი 'this' საკვანძო სიტყვა
// ამიტომ არ გამოიყენო ისრიანი ფუნქციები ობიექტის მეთოდებად!


/*
═══════════════════════════════════════════════════════════════
5. Object.keys(), Object.values(), Object.entries()
═══════════════════════════════════════════════════════════════

ეს სტატიკური მეთოდები საშუალებას გვაძლევს ობიექტის თვისებები
მასივებად გარდავქმნათ, რათა შევძლოთ მათზე ციკლი, ფილტრაცია,
მეპინგი და რედუქცია.
*/

const laptop = {
  brand: 'Dell',
  model: 'XPS 15',
  price: 2500,
  color: 'silver',
};

// Object.keys() — აბრუნებს თვისების სახელების (გასაღებების) მასივს
console.log(Object.keys(laptop)); // ['brand', 'model', 'price', 'color']

// Object.values() — აბრუნებს თვისების მნიშვნელობების მასივს
console.log(Object.values(laptop)); // ['Dell', 'XPS 15', 2500, 'silver']

// Object.entries() — აბრუნებს [გასაღები, მნიშვნელობა] წყვილების მასივს
console.log(Object.entries(laptop));
// [['brand','Dell'], ['model','XPS 15'], ['price',2500], ['color','silver']]

// იტერაცია for...of-ით და დესტრუქტურიზაციით
for (const [propKey, propValue] of Object.entries(laptop)) {
  console.log(`${propKey}: ${propValue}`);
}
// brand: Dell
// model: XPS 15
// price: 2500
// color: silver

// პრაქტიკული მაგალითი — სტუდენტის ნიშნები
const grades = {
  Math: 95,
  Physics: 82,
  Chemistry: 91,
  English: 88,
  History: 76,
};

// საშუალო ნიშნის გამოთვლა Object.values-ით
const gradeValues = Object.values(grades);
const average =
  gradeValues.reduce((sum, g) => sum + g, 0) / gradeValues.length;
console.log(`Average grade: ${average.toFixed(1)}`); // 86.4

// იპოვე საგნები, სადაც ნიშანი 85-ზე მეტია Object.entries-ით
const strongSubjects = Object.entries(grades)
  .filter(([, grade]) => grade > 85)
  .map(([subject]) => subject);
console.log('Strong subjects:', strongSubjects.join(', '));
// 'Strong subjects: Math, Chemistry, English'

// for...in ციკლი — ასევე იტერირებს ობიექტის გასაღებებზე
const inventory = {
  apples: 50,
  bananas: 30,
  oranges: 45,
  grapes: 0,
  mangoes: 12,
};

for (const fruit in inventory) {
  console.log(`${fruit}: ${inventory[fruit]} units`);
}


/*
═══════════════════════════════════════════════════════════════
6. ობიექტების მასივები (ARRAYS OF OBJECTS)
═══════════════════════════════════════════════════════════════

რეალური მონაცემები ხშირად ობიექტების მასივების სახით მოდის.
მასივის მეთოდებს (find, filter, map, reduce, sort) ვაერთიანებთ
ობიექტის თვისებებზე წვდომასთან ამ მონაცემების დასამუშავებლად.
*/

const employees = [
  { name: 'Ana', department: 'Engineering', salary: 75000, yearsExp: 5 },
  { name: 'Davit', department: 'Marketing', salary: 62000, yearsExp: 3 },
  { name: 'Nino', department: 'Engineering', salary: 88000, yearsExp: 8 },
  { name: 'Giorgi', department: 'Design', salary: 58000, yearsExp: 2 },
  { name: 'Mariam', department: 'Marketing', salary: 71000, yearsExp: 6 },
  { name: 'Luka', department: 'Engineering', salary: 95000, yearsExp: 10 },
  { name: 'Elene', department: 'Design', salary: 67000, yearsExp: 4 },
];

// find() — აბრუნებს პირველ შესაბამის ელემენტს
const seniorDev = employees.find(e => e.yearsExp >= 10);
console.log('Senior dev:', seniorDev.name); // 'Luka'

// filter() — აბრუნებს ყველა შესაბამის ელემენტს
const engineers = employees.filter(e => e.department === 'Engineering');
console.log('Engineers:', engineers.map(e => e.name).join(', '));
// 'Ana, Nino, Luka'

// map() — ყოველი ელემენტის ტრანსფორმაცია
const employeeCards = employees.map(e => ({
  label: `${e.name} (${e.department})`,
  seniorLevel: e.yearsExp >= 5,
}));
console.log(employeeCards);

// reduce() — ერთი მნიშვნელობის გამოთვლა მასივიდან
const totalPayroll = employees.reduce((sum, e) => sum + e.salary, 0);
console.log(`Total payroll: $${totalPayroll.toLocaleString()}`);
// 'Total payroll: $516,000'

// reduce დეპარტამენტის მიხედვით დაჯგუფებისთვის
const byDepartment = employees.reduce((groups, e) => {
  if (!groups[e.department]) groups[e.department] = [];
  groups[e.department].push(e.name);
  return groups;
}, {});
console.log('By department:', byDepartment);
// { Engineering: ['Ana','Nino','Luka'], Marketing: ['Davit','Mariam'], Design: ['Giorgi','Elene'] }

// sort() — ხელფასით კლებადობით დალაგება (spread მუტაციის ასაცილებლად)
const bySalary = [...employees].sort((a, b) => b.salary - a.salary);
console.log(
  'Highest paid:',
  bySalary.map(e => `${e.name}($${e.salary})`).join(', ')
);

// ანბანის მიხედვით დალაგება სახელით
const byName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
console.log('Alphabetical:', byName.map(e => e.name).join(', '));

// მეთოდების ჯაჭვური გამოძახება — ინჟინრების გაფილტვრა, გამოცდილებით დალაგება, ფორმატირება
const engineerRanking = employees
  .filter(e => e.department === 'Engineering')
  .sort((a, b) => b.yearsExp - a.yearsExp)
  .map((e, i) => `${i + 1}. ${e.name} — ${e.yearsExp} years`)
  .join('\n');
console.log('Engineering team ranking:\n' + engineerRanking);

// პრაქტიკული მაგალითი — სავაჭრო კალათა
const cart = [
  { product: 'Laptop', price: 999, quantity: 1 },
  { product: 'Mouse', price: 29, quantity: 2 },
  { product: 'Keyboard', price: 79, quantity: 1 },
  { product: 'Monitor', price: 349, quantity: 1 },
  { product: 'USB Cable', price: 12, quantity: 3 },
];

const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
console.log(`Cart total: $${cartTotal}`); // $1,492

const expensiveItems = cart
  .filter(item => item.price * item.quantity > 50)
  .map(item => `${item.product}: $${item.price * item.quantity}`);
console.log('Expensive items:', expensiveItems.join(', '));


/*
═══════════════════════════════════════════════════════════════
7. DATE ობიექტი (DATE OBJECT)
═══════════════════════════════════════════════════════════════

JavaScript-ის ჩაშენებული Date ობიექტი წარმოადგენს დროის ერთ
მომენტს. ის ინახავს მილიწამების რაოდენობას 1970 წლის 1
იანვრიდან (Unix ეპოქა).
*/

// --- თარიღების შექმნა: ოთხი გზა ---

// 1. მიმდინარე თარიღი და დრო
const now = new Date();
console.log('Now:', now);

// 2. თარიღის სტრინგიდან
const christmas = new Date('2024-12-25');
console.log('Christmas 2024:', christmas);

// 3. არგუმენტებიდან (წელი, თვე, დღე, საათი, წუთი, წამი)
// მნიშვნელოვანი: თვე 0-იდან იწყება! (0 = იანვარი, 11 = დეკემბერი)
const newYear = new Date(2025, 0, 1, 0, 0, 0);
console.log('New Year 2025:', newYear);

// 4. Timestamp-იდან (მილიწამები 1970 წლის 1 იანვრიდან)
console.log('Epoch:', new Date(0)); // 1970 წ. 1 იანვარი
console.log('Timestamp now:', Date.now()); // მიმდინარე timestamp

// --- Getter მეთოდები ---

const today = new Date();

console.log('Full year:', today.getFullYear()); // მაგ. 2026
console.log('Month (0-indexed):', today.getMonth()); // 0-11
console.log('Date (day of month):', today.getDate()); // 1-31
console.log('Day of week:', today.getDay()); // 0=კვირა, 6=შაბათი
console.log('Hours:', today.getHours()); // 0-23
console.log('Minutes:', today.getMinutes()); // 0-59
console.log('Seconds:', today.getSeconds()); // 0-59

// getMonth()-ის და getDay()-ის გარდაქმნა წაკითხვად სახელებად
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];
const dayNames = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday',
];

console.log(
  `Today is ${dayNames[today.getDay()]}, ${monthNames[today.getMonth()]}`
);

// --- Setter მეთოდები ---

const someDate = new Date(2024, 5, 15); // 2024 წ. 15 ივნისი
console.log('Original:', someDate);

someDate.setFullYear(2025);
console.log('After setFullYear(2025):', someDate);

someDate.setMonth(11); // დეკემბერი
console.log('After setMonth(11):', someDate);

someDate.setDate(25);
console.log('After setDate(25):', someDate); // 2025 წ. 25 დეკემბერი

// --- თარიღის არითმეტიკა ---

// ორ თარიღს შორის სხვაობა (მილიწამებში, შემდეგ გარდაქმნა)
const startDate = new Date(2024, 0, 1);
const endDate = new Date(2024, 11, 31);

const diffMs = endDate - startDate;
const diffDays = diffMs / (1000 * 60 * 60 * 24);
console.log(`Days between Jan 1 and Dec 31, 2024: ${Math.round(diffDays)}`);

// დამხმარე ფუნქცია: დღეების დამატება თარიღზე
const addDays = function (date, numDays) {
  const result = new Date(date);
  result.setDate(result.getDate() + numDays);
  return result;
};

console.log('One week from now:', addDays(new Date(), 7));
console.log('30 days from now:', addDays(new Date(), 30));

// პრაქტიკული მაგალითი — ასაკის კალკულატორი
const calculateAge = function (birthDateStr) {
  const birth = new Date(birthDateStr);
  const current = new Date();
  let calcAge = current.getFullYear() - birth.getFullYear();
  const monthDiff = current.getMonth() - birth.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && current.getDate() < birth.getDate())
  ) {
    calcAge--;
  }
  return calcAge;
};

console.log(`Age for 1995-06-15: ${calculateAge('1995-06-15')}`);
console.log(`Age for 2000-01-01: ${calculateAge('2000-01-01')}`);

// პრაქტიკული მაგალითი — დღეები მოვლენამდე
const daysUntil = function (eventDateStr) {
  const eventDate = new Date(eventDateStr);
  const diff = eventDate - new Date();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

const nextNewYear = `${new Date().getFullYear() + 1}-01-01`;
console.log(`Days until New Year: ${daysUntil(nextNewYear)}`);


/*
═══════════════════════════════════════════════════════════════
8. თარიღის ფორმატირება (DATE FORMATTING)
═══════════════════════════════════════════════════════════════

JavaScript გთავაზობთ თარიღების ფორმატირების მრავალ გზას.
Intl (ინტერნაციონალიზაცია) API არის თანამედროვე, რეკომენდებული
მიდგომა ლოკალის მიხედვით ფორმატირებისთვის.
*/

const dateForFormat = new Date(2024, 11, 25, 14, 30, 0); // 2024 წ. 25 დეკემბერი, 14:30
console.log(dateForFormat);

// toLocaleDateString() — თარიღის ნაწილის ფორმატირება ლოკალის მიხედვით
console.log(dateForFormat.toLocaleDateString('en-US')); // '12/25/2024'
console.log(dateForFormat.toLocaleDateString('en-GB')); // '25/12/2024'

// toLocaleTimeString() — დროის ნაწილის ფორმატირება
console.log(dateForFormat.toLocaleTimeString('en-US')); // '2:30:00 PM'
console.log(dateForFormat.toLocaleTimeString('en-GB')); // '14:30:00'

// toLocaleString() — თარიღისა და დროის ფორმატირება
console.log(dateForFormat.toLocaleString('en-US')); // '12/25/2024, 2:30:00 PM'

// toLocaleString ოფციებით — დეტალური კონტროლი გამოსავალზე
const longFormat = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
};
console.log(dateForFormat.toLocaleString('en-US', longFormat));
// 'Wednesday, December 25, 2024'

const shortFormat = {
  year: 'numeric',
  month: 'short',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};
console.log(dateForFormat.toLocaleString('en-US', shortFormat));
// 'Dec 25, 2024, 14:30'

// toUTCString() — UTC ფორმატი, ხშირად სერვერებისთვის გამოიყენება
console.log(dateForFormat.toUTCString());

// toISOString() — ISO 8601 ფორმატი, სტანდარტი API-ებისა და ბაზებისთვის
console.log(dateForFormat.toISOString());
// '2024-12-25T...:30:00.000Z'

// Intl.DateTimeFormat — მრავალჯერადი ფორმატირების ობიექტი
const formalFormatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short',
});
console.log(formalFormatter.format(dateForFormat));
// 'Wednesday, December 25, 2024 at 2:30 PM'

// Intl.RelativeTimeFormat — ადამიანისთვის გასაგები შედარებითი დრო
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day')); // 'yesterday'
console.log(rtf.format(2, 'day')); // 'in 2 days'
console.log(rtf.format(-3, 'month')); // '3 months ago'
console.log(rtf.format(1, 'year')); // 'next year'

// პრაქტიკული მაგალითი — თარიღის ფორმატირების ფუნქცია
const formatDate = function (date, format) {
  const pad = n => String(n).padStart(2, '0');
  const replacements = {
    YYYY: date.getFullYear(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };
  let result = format;
  for (const [token, value] of Object.entries(replacements)) {
    result = result.replace(token, value);
  }
  return result;
};

console.log(formatDate(new Date(), 'YYYY-MM-DD')); // მაგ. '2026-06-08'
console.log(formatDate(new Date(), 'DD/MM/YYYY HH:mm:ss'));


/*
═══════════════════════════════════════════════════════════════
9. სტრინგის მეთოდები (STRING METHODS)
═══════════════════════════════════════════════════════════════

სტრინგები უცვლელია (immutable) JavaScript-ში — ყველა
სტრინგის მეთოდი ახალ სტრინგს აბრუნებს ორიგინალის შეცვლის
გარეშე. სტრინგები ასევე იტერირებადია და აქვთ .length თვისება.
*/

// --- length თვისება ---
const str = 'Hello, World!';
console.log(str.length); // 13

// --- indexOf(), lastIndexOf(), includes() ---

const text = 'JavaScript is awesome. JavaScript is everywhere.';

// indexOf() — პირველი შემთხვევის პოზიცია (-1 თუ ვერ იპოვა)
console.log(text.indexOf('JavaScript')); // 0
console.log(text.indexOf('Python')); // -1
console.log(text.indexOf('JavaScript', 1)); // 23 (ძიება ინდექს 1-დან)

// lastIndexOf() — ბოლო შემთხვევის პოზიცია
console.log(text.lastIndexOf('JavaScript')); // 23

// includes() — აბრუნებს true/false
console.log(text.includes('awesome')); // true
console.log(text.includes('terrible')); // false

// --- slice(), substring() ---

const fullText = 'Hello, World!';

// slice(start, end) — ამოიღებს start-დან end-მდე (end არ შედის)
console.log(fullText.slice(0, 5)); // 'Hello'
console.log(fullText.slice(7)); // 'World!' (ინდექს 7-დან ბოლომდე)
console.log(fullText.slice(-6)); // 'orld!' (უარყოფითი ბოლოდან ითვლის)
console.log(fullText.slice(0, -1)); // 'Hello, World' (ბოლო სიმბოლოს შლის)

// substring(start, end) — მსგავსი, მაგრამ უარყოფითი ინდექსები არ მუშაობს
console.log(fullText.substring(0, 5)); // 'Hello'
console.log(fullText.substring(7, 12)); // 'World'

// --- toUpperCase(), toLowerCase() ---

console.log('hello'.toUpperCase()); // 'HELLO'
console.log('HELLO'.toLowerCase()); // 'hello'

// --- trim(), trimStart(), trimEnd() ---

const padded = '  Hello World  ';
console.log(padded.trim()); // 'Hello World'
console.log(padded.trimStart()); // 'Hello World  '
console.log(padded.trimEnd()); // '  Hello World'

// --- replace(), replaceAll() ---

const message = 'I love cats. Cats are great!';

// replace() — ცვლის მხოლოდ პირველ შემთხვევას
console.log(message.replace('cats', 'dogs'));
// 'I love dogs. Cats are great!'

// replace regex-ით და global ფლაგით — ცვლის ყველას, რეგისტრის მიუხედავად
console.log(message.replace(/cats/gi, 'dogs'));
// 'I love dogs. dogs are great!'

// replaceAll() — ცვლის ყველა შემთხვევას (რეგისტრის გათვალისწინებით)
const csvLine = 'Ana,95,Math,Passed';
console.log(csvLine.replaceAll(',', ' | ')); // 'Ana | 95 | Math | Passed'

// --- split(), join() ორმხრივი გარდაქმნა ---

// split() — ყოფს სტრინგს მასივად
const csv = 'Ana,Davit,Nino,Giorgi';
const names = csv.split(',');
console.log(names); // ['Ana', 'Davit', 'Nino', 'Giorgi']

const words = 'Hello World JavaScript'.split(' ');
console.log(words); // ['Hello', 'World', 'JavaScript']

// ცალკეულ სიმბოლოებად დაყოფა
console.log('Hello'.split('')); // ['H', 'e', 'l', 'l', 'o']

// join() — აერთიანებს მასივს სტრინგად (split-ის საპირისპირო)
console.log(names.join(' - ')); // 'Ana - Davit - Nino - Giorgi'

// ორმხრივი: split → ტრანსფორმაცია → join
const titleCase = 'hello world from javascript'
  .split(' ')
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(' ');
console.log(titleCase); // 'Hello World From Javascript'

// --- startsWith(), endsWith() ---

console.log(text.startsWith('Java')); // true
console.log(text.startsWith('Script')); // false
console.log(text.endsWith('.')); // true
console.log(text.endsWith('everywhere.')); // true

// --- repeat(), padStart(), padEnd() ---

// repeat() — იმეორებს სტრინგს n-ჯერ
console.log('Ha'.repeat(3)); // 'HaHaHa'
console.log('-'.repeat(20)); // '--------------------'

// padStart() — ავსებს თავიდან სასურველ სიგრძემდე
console.log('5'.padStart(3, '0')); // '005'
console.log('42'.padStart(5, '0')); // '00042'

// padEnd() — ავსებს ბოლოდან
console.log('Hi'.padEnd(10, '.')); // 'Hi........'

// პრაქტიკული გამოყენება — საკრედიტო ბარათის ნომრის დაფარვა
const maskCard = function (cardNumber) {
  const cardStr = String(cardNumber);
  const lastFour = cardStr.slice(-4);
  return lastFour.padStart(cardStr.length, '*');
};

console.log(maskCard('4532015112830366')); // '************0366'

// --- at(), charAt() ---

const greeting = 'Gamarjoba';

// charAt() — აბრუნებს სიმბოლოს მითითებულ ინდექსზე
console.log(greeting.charAt(0)); // 'G'
console.log(greeting.charAt(4)); // 'r'

// at() — თანამედროვე მეთოდი, უარყოფით ინდექსებს უჭერს მხარს
console.log(greeting.at(0)); // 'G'
console.log(greeting.at(-1)); // 'a' (ბოლო სიმბოლო)
console.log(greeting.at(-2)); // 'b' (ბოლოდან მეორე)


/*
═══════════════════════════════════════════════════════════════
10. პრაქტიკული მაგალითები (PRACTICAL EXAMPLES)
═══════════════════════════════════════════════════════════════

ობიექტების, თარიღების და სტრინგების კომბინირება რეალურ
სცენარებში.
*/

// --- ელფოსტის ვალიდატორი სტრინგ მეთოდებით ---

const validateEmail = function (email) {
  const trimmed = email.trim().toLowerCase();
  const errors = [];

  if (!trimmed.includes('@')) errors.push('Missing @ symbol');
  if (trimmed.indexOf('@') === 0) errors.push('No username before @');
  if (trimmed.indexOf('@') !== trimmed.lastIndexOf('@'))
    errors.push('Multiple @ symbols');
  if (trimmed.includes(' ')) errors.push('Contains spaces');

  if (
    !trimmed.endsWith('.com') &&
    !trimmed.endsWith('.org') &&
    !trimmed.endsWith('.net')
  ) {
    errors.push('Invalid domain extension');
  }

  return { email: trimmed, isValid: errors.length === 0, errors };
};

console.log(validateEmail('giorgi@example.com'));
// { email: 'giorgi@example.com', isValid: true, errors: [] }

console.log(validateEmail('bad@@email'));
// { ..., isValid: false, errors: ['Multiple @ symbols', 'Invalid domain extension'] }

// --- Slug გენერატორი ---

const generateSlug = function (title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

console.log(generateSlug('Hello World!')); // 'hello-world'
console.log(generateSlug('  JavaScript Tips & Tricks  ')); // 'javascript-tips--tricks'
console.log(generateSlug('10 Best Practices for Clean Code'));
// '10-best-practices-for-clean-code'

// --- ტექსტის სტატისტიკის ანალიზატორი ---

const textStats = function (input) {
  const trimmed = input.trim();
  const wordsArr = trimmed.split(/\s+/);
  const sentences = trimmed.split(/[.!?]/).filter(s => s.trim().length > 0);
  const reversed = trimmed.split('').reverse().join('');

  const wordFrequency = {};
  wordsArr.forEach(w => {
    const clean = w.toLowerCase().replace(/[^a-z]/g, '');
    if (clean) wordFrequency[clean] = (wordFrequency[clean] || 0) + 1;
  });

  return {
    original: trimmed,
    wordCount: wordsArr.length,
    charCount: trimmed.length,
    sentences: sentences.length,
    uppercased: trimmed.toUpperCase(),
    reversed,
    wordFrequency,
  };
};

const sampleText = '  Hello World! Hello JavaScript. hello everyone.  ';
const stats = textStats(sampleText);
console.log('Word count:', stats.wordCount); // 6
console.log('Sentences:', stats.sentences); // 3
console.log('Word frequency:', stats.wordFrequency);
// { hello: 3, world: 1, javascript: 1, everyone: 1 }


/*
═══════════════════════════════════════════════════════════════
შეჯამება — ობიექტები, თარიღები და სტრინგები
═══════════════════════════════════════════════════════════════

ობიექტები:
📌 გასაღები-მნიშვნელობის წყვილები: { key: value }
📌 წერტილოვანი ნოტაცია: obj.key (მარტივი, როცა გასაღები ცნობილია)
📌 ფრჩხილოვანი ნოტაცია: obj["key"] (გამოთვლილი/დინამიური გასაღებისთვის)
📌 დესტრუქტურიზაცია: const { a, b } = obj (ცვლადებში ამოღება)
📌 გამოთვლითი გასაღებები: { [expression]: value }
📌 შემოკლება: { variable } როცა გასაღების სახელი ემთხვევა ცვლადს
📌 მეთოდები: ფუნქციები თვისებებად, იყენებს 'this'-ს
📌 ჯაჭვი: 'this'-ის დაბრუნება მეთოდებიდან .a().b().c() საშუალებას იძლევა

ობიექტის სტატიკური მეთოდები:
📌 Object.keys(obj) → გასაღებების მასივი
📌 Object.values(obj) → მნიშვნელობების მასივი
📌 Object.entries(obj) → [გასაღები, მნიშვნელობა] წყვილების მასივი

ობიექტების მასივები:
📌 find() → პირველი შესაბამისი
📌 filter() → ყველა შესაბამისი
📌 map() → ყოველი ელემენტის ტრანსფორმაცია
📌 reduce() → ერთი მნიშვნელობის გამოთვლა
📌 sort() → ელემენტების დალაგება ([...arr] მუტაციის ასაცილებლად)
📌 ჯაჭვი: arr.filter().sort().map().join()

თარიღები:
📌 შექმნა: new Date(), new Date("2024-12-25"), new Date(y, m, d)
📌 თვე 0-იდან იწყება (0 = იანვარი)
📌 Getter-ები: getFullYear(), getMonth(), getDate(), getDay()
📌 Setter-ები: setFullYear(), setMonth(), setDate()
📌 არითმეტიკა: date2 - date1 იძლევა მილიწამებს
📌 ფორმატირება: toLocaleDateString(), toLocaleString(),
   Intl.DateTimeFormat, Intl.RelativeTimeFormat

სტრინგები:
📌 უცვლელია: ყველა მეთოდი ახალ სტრინგს აბრუნებს
📌 ძიება: indexOf(), lastIndexOf(), includes()
📌 ამოღება: slice(), substring()
📌 რეგისტრი: toUpperCase(), toLowerCase()
📌 გასუფთავება: trim(), trimStart(), trimEnd()
📌 ჩანაცვლება: replace(), replaceAll()
📌 გარდაქმნა: split() → მასივი, join() → სტრინგი
📌 შემოწმება: startsWith(), endsWith()
📌 ფორმატირება: repeat(), padStart(), padEnd()
📌 წვდომა: charAt(), at() (at უარყოფით ინდექსებს უჭერს მხარს)
*/
