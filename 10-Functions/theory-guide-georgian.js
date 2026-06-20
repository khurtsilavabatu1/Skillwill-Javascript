////////////////////////////////////
// ფუნქციების დეტალური განხილვა
// სრული თეორიული გზამკვლევი მაგალითებით
////////////////////////////////////

/*
═══════════════════════════════════════════════════════════════
1. ნაგულისხმევი პარამეტრები (DEFAULT PARAMETERS)
═══════════════════════════════════════════════════════════════

ES6-დან მოყოლებული, ფუნქციის პარამეტრებს შეგვიძლია
ნაგულისხმევი (default) მნიშვნელობები მივანიჭოთ.
თუ ფუნქციის გამოძახებისას არგუმენტი არ გადავეცით,
ის ნაგულისხმევ მნიშვნელობას მიიღებს.

ნაგულისხმევი მნიშვნელობები შეიძლება იყოს expression-ები
და წინა პარამეტრების მნიშვნელობებზეც კი დაეყრდნოს.

პარამეტრის გამოსატოვებლად undefined უნდა გადავცეთ.
*/

"use strict";

// === ჯავშნების სისტემის მაგალითი ===
const reservations = [];

const createReservation = function (
  tourName,
  numGuests,
  price = 50 * numGuests, // expression — იყენებს წინა პარამეტრს
) {
  const reservation = {
    tourName,
    numGuests,
    price,
  };
  console.log(reservation);
  reservations.push(reservation);
};

// გამოძახება სხვადასხვა არგუმენტებით
createReservation("თბილისი-ტური");
// { tourName: 'თბილისი-ტური', numGuests: 1, price: 50 }

createReservation("ბათუმი-ტური", 3, 200);
// { tourName: 'ბათუმი-ტური', numGuests: 3, price: 200 }

createReservation("მცხეთა-ტური", 4);
// { tourName: 'მცხეთა-ტური', numGuests: 4, price: 200 }  (50 * 4)

// პარამეტრის გამოტოვება undefined-ით
createReservation("კახეთი-ტური", undefined, 300);
// { tourName: 'კახეთი-ტური', numGuests: 1, price: 300 }
// numGuests ნაგულისხმევ 1-ს იღებს, price ხელით დავაყენეთ

/*
═══════════════════════════════════════════════════════════════
2. არგუმენტების გადაცემა: VALUE vs REFERENCE
═══════════════════════════════════════════════════════════════

JavaScript-ში არგუმენტები ყოველთვის მნიშვნელობით გადაიცემა.
თუმცა, ობიექტებისთვის ეს მნიშვნელობა არის მითითება (reference)
ობიექტზე heap-ში. ამიტომ:

- პრიმიტივები: ფუნქცია იღებს ასლს, ორიგინალი არ იცვლება
- ობიექტები: ფუნქცია იღებს მითითების ასლს, ამიტომ ობიექტის
  მუტაცია ორიგინალზეც აისახება

ეს არის ხშირი ბაგების წყარო — ყურადღებით!
*/

const flightCode = "GE101";
const passenger = {
  name: "გიორგი მელაძე",
  passport: 12345678901,
};

const checkIn = function (flightNum, traveler) {
  // პრიმიტივის შეცვლა — ორიგინალზე არ აისახება
  flightNum = "GE999";

  // ობიექტის მუტაცია — ორიგინალზე აისახება!
  traveler.name = "ბ-ნი " + traveler.name;

  if (traveler.passport === 12345678901) {
    console.log("რეგისტრაცია წარმატებულია");
  } else {
    console.log("არასწორი პასპორტი!");
  }
};

checkIn(flightCode, passenger);
console.log(flightCode); // 'GE101' — პრიმიტივი არ შეცვლილა
console.log(passenger); // { name: 'ბ-ნი გიორგი მელაძე', ... } — ობიექტი შეიცვალა!

// პასპორტის ნომრის შეცვლის ფუნქცია — საშიში side effect
const changePassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

changePassport(passenger);
checkIn(flightCode, passenger); // 'არასწორი პასპორტი!' — პასპორტი შეიცვალა!

// დასამახსოვრებელი: JavaScript-ში არ არსებობს "pass by reference",
// მხოლოდ "pass by value" არსებობს. ობიექტების შემთხვევაში
// მნიშვნელობა არის მეხსიერების მისამართი (reference).

/*
═══════════════════════════════════════════════════════════════
3. FIRST-CLASS და HIGHER-ORDER ფუნქციები
═══════════════════════════════════════════════════════════════

JavaScript-ში ფუნქციები "პირველი კლასის მოქალაქეებია"
(first-class citizens). ეს ნიშნავს, რომ ფუნქციები
უბრალოდ მნიშვნელობებია (values). მათ შეგვიძლია:

- ცვლადებში შევინახოთ
- ფუნქციის არგუმენტად გადავცეთ
- ფუნქციიდან დავაბრუნოთ
- მეთოდები და თვისებები ჰქონდეთ (მაგ. fn.name, fn.bind)

HIGHER-ORDER ფუნქცია არის ფუნქცია, რომელიც:
- იღებს სხვა ფუნქციას არგუმენტად (callback), ან
- აბრუნებს ახალ ფუნქციას, ან ორივეს ერთად.

first-class ფუნქციები = ენის თვისება (კონცეფცია)
higher-order ფუნქციები = პრაქტიკაში გამოყენება (კონცეფციის რეალიზაცია)
*/

// ფუნქციების შენახვა ცვლადებში
const sayHello = function () {
  console.log("გამარჯობა!");
};

// ფუნქცია, როგორც ობიექტის თვისება (მეთოდი)
const giorgi = {
  name: "გიორგი",
  greet: function () {
    console.log(`გამარჯობა, მე ვარ ${this.name}`);
  },
};

// ფუნქციის თვისებები
console.log(sayHello.name); // 'sayHello'

/*
═══════════════════════════════════════════════════════════════
4. CALLBACK ფუნქციები
═══════════════════════════════════════════════════════════════

Callback არის ფუნქცია, რომელსაც სხვა ფუნქციას გადავცემთ
არგუმენტად, და ის მოგვიანებით გამოიძახება. JavaScript-ში
callback-ები ყველგან გამოიყენება.

Callback-ების უპირატესობები:
- კოდის დაყოფა მრავალჯერადი გამოყენების ნაწილებად
- აბსტრაქციის შექმნა — higher-order ფუნქცია არ ინტერესდება
  დაბალი დონის დეტალებით
*/

// სტრინგის ტრანსფორმაციის ფუნქციები (callback-ები)
const removeSpaces = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const capitalizeFirst = function (str) {
  const [first, ...rest] = str.split(" ");
  return [first.toUpperCase(), ...rest].join(" ");
};

// Higher-order ფუნქცია — იღებს callback-ს არგუმენტად
const transformer = function (str, fn) {
  console.log(`ორიგინალი: ${str}`);
  console.log(`ტრანსფორმირებული: ${fn(str)}`);
  console.log(`ტრანსფორმაცია შესრულებულია ფუნქციით: ${fn.name}`);
};

transformer("ხინკალი საუკეთესო საჭმელია", capitalizeFirst);
// ტრანსფორმირებული: ᲮᲘᲜᲙᲐᲚᲘ საუკეთესო საჭმელია
// ტრანსფორმაცია შესრულებულია ფუნქციით: capitalizeFirst

transformer("ხინკალი საუკეთესო საჭმელია", removeSpaces);
// ტრანსფორმირებული: ხინკალისაუკეთესოსაჭმელია

// Callback-ები ყოველდღიურ JavaScript-ში
const wave = function () {
  console.log("გამარჯობა!");
};

// forEach-ში callback
["ნინო", "დათო", "ანა"].forEach(function (name) {
  console.log(`მოგესალმებით, ${name}!`);
});

/*
═══════════════════════════════════════════════════════════════
5. ფუნქციები რომლებიც ფუნქციებს აბრუნებენ
═══════════════════════════════════════════════════════════════

ფუნქციას შეუძლია დააბრუნოს სხვა ფუნქცია. ეს ძალიან
სასარგებლოა closure-ებისთვის და currying-ისთვის.

ეს მუშაობს, რადგან ფუნქციები first-class მნიშვნელობებია.
*/

// ფუნქცია, რომელიც ფუნქციას აბრუნებს
const greetGeorgian = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
};

// greeter ინახავს დაბრუნებულ ფუნქციას
const greeterGamaj = greetGeorgian("გამარჯობა");
greeterGamaj("გიორგი"); // გამარჯობა, გიორგი!
greeterGamaj("ნინო"); // გამარჯობა, ნინო!

// ასევე შეიძლება ჯაჭვური გამოძახება
greetGeorgian("საღამო მშვიდობისა")("დათო");
// საღამო მშვიდობისა, დათო!

// იგივე arrow ფუნქციის სინტაქსით — უფრო კომპაქტური
const greetArrow = (greeting) => (name) => console.log(`${greeting}, ${name}!`);

greetArrow("მოგესალმებით")("ანა");
// მოგესალმებით, ანა!

/*
═══════════════════════════════════════════════════════════════
6. CALL და APPLY მეთოდები
═══════════════════════════════════════════════════════════════

call და apply მეთოდებით შეგვიძლია ფუნქციის გამოძახება
და ხელით განვსაზღვროთ, რას უნდა უდრიდეს this.

call: არგუმენტები ცალ-ცალკე გადაეცემა
apply: არგუმენტები მასივით გადაეცემა (ძველი სტილი)

თანამედროვე JavaScript-ში apply-ის ნაცვლად spread ოპერატორი
გამოიყენება call-თან ერთად.
*/

const georgianAirways = {
  airline: "Georgian Airways",
  code: "A9",
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} - დაჯავშნა ადგილი ${this.airline}-ის ფრენა ${this.code}${flightNum}-ზე`,
    );
    this.bookings.push({
      flight: `${this.code}${flightNum}`,
      name: passengerName,
    });
  },
};

georgianAirways.book(101, "გიორგი ბერიძე");
georgianAirways.book(202, "ნინო წულუკიძე");

// ახალი ავიაკომპანია — იგივე სტრუქტურა
const myWay = {
  airline: "MyWay Airlines",
  code: "MW",
  bookings: [],
};

// ფუნქციის ცალკე ამოღება — this იკარგება
const book = georgianAirways.book;
// book(303, 'დათო'); // TypeError! this undefined-ია strict mode-ში

// call მეთოდი — this-ის ხელით მითითება
book.call(myWay, 303, "დათო ჯაფარიძე");
console.log(myWay);

book.call(georgianAirways, 404, "ანა გელაშვილი");
console.log(georgianAirways);

// apply მეთოდი — არგუმენტები მასივით (ძველი სტილი)
const flightInfo = [505, "ლუკა ხარაზიშვილი"];
book.apply(myWay, flightInfo);

// თანამედროვე ალტერნატივა — spread ოპერატორი call-თან
book.call(myWay, ...flightInfo);

/*
═══════════════════════════════════════════════════════════════
7. BIND მეთოდი
═══════════════════════════════════════════════════════════════

bind მეთოდი არ იძახებს ფუნქციას. ის აბრუნებს ახალ ფუნქციას,
რომელშიც this სამუდამოდ მიბმულია მითითებულ ობიექტზე.

bind-ის გამოყენების სცენარები:
1. ობიექტის მეთოდის "დამაგრება" — this-ის დაფიქსირება
2. Partial application — ზოგიერთი არგუმენტის წინასწარი დაყენება
3. Event listener-ებთან — this-ის სწორი მიბმა
*/

// მეთოდის დამაგრება კონკრეტულ ობიექტზე
const bookMW = book.bind(myWay);
const bookGA = book.bind(georgianAirways);

bookMW(606, "მარიამ ჩხეიძე");

// Partial application — ფრენის ნომრის წინასწარი დაფიქსირება
const bookMW303 = book.bind(myWay, 303);
bookMW303("ნინო ბერაძე"); // ფრენის ნომერი უკვე 303-ია
bookMW303("გიორგი ლომიძე");

// bind event listener-ებთან
georgianAirways.planes = 25;
georgianAirways.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(`თვითმფრინავების რაოდენობა: ${this.planes}`);
};

// Event listener-ში this ელემენტს მიუთითებს, არა ობიექტს.
// bind-ით ვასწორებთ:
// document.querySelector('.buy')
//   .addEventListener('click', georgianAirways.buyPlane.bind(georgianAirways));

// Partial application — გადასახადის კალკულატორი
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.18, 100)); // 118

// დღგ-ს (18%) ფუნქციის შექმნა bind-ით
const addVAT = addTax.bind(null, 0.18);
// ეკვივალენტი: const addVAT = value => value + value * 0.18;

console.log(addVAT(100)); // 118
console.log(addVAT(250)); // 295

// იგივე, ფუნქციის დაბრუნებით (bind-ის გარეშე)
const createTaxCalculator = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = createTaxCalculator(0.18);
console.log(addVAT2(100)); // 118
console.log(addVAT2(250)); // 295

/*
═══════════════════════════════════════════════════════════════
8. IIFE (Immediately Invoked Function Expressions)
═══════════════════════════════════════════════════════════════

IIFE არის ფუნქცია, რომელიც მხოლოდ ერთხელ სრულდება
და დაუყოვნებლივ, გამოცხადებისთანავე.

ისტორიულად გამოიყენებოდა მონაცემთა კონფიდენციალურობისთვის
(data privacy) — ფუნქციის scope-ში ცვლადები გარედან
ხელმისაწვდომი არ არის.

ES6-ში ბლოკის scope (let/const { }) იმავე მიზანს ემსახურება.
*/

// ჩვეულებრივი IIFE
(function () {
  console.log("ეს კოდი მხოლოდ ერთხელ შესრულდება");
  const secretRecipe = "ხინკლის რეცეპტი: ფქვილი, წყალი, ხორცი";
  // secretRecipe გარედან არ არის ხელმისაწვდომი
})();

// Arrow ფუნქციით IIFE
(() => console.log("ეს ასევე ერთხელ შესრულდება"))();

// console.log(secretRecipe); // ReferenceError!

// ES6 ალტერნატივა — ბლოკის scope
{
  const privateData = "კონფიდენციალური ინფორმაცია";
  var publicData = "საჯარო ინფორმაცია"; // var ბლოკის scope-ს იგნორირებს!
}
// console.log(privateData); // ReferenceError! (let/const ბლოკის scope-შია)
console.log(publicData); // 'საჯარო ინფორმაცია' (var ფუნქციის scope-შია)

/*
═══════════════════════════════════════════════════════════════
9. CLOSURES (ჩაკეტვები)
═══════════════════════════════════════════════════════════════

Closure არის ერთ-ერთი ყველაზე მნიშვნელოვანი კონცეფცია
JavaScript-ში. ის ავტომატურად ხდება — ხელით არ ვქმნით.

Closure-ის არსი: ფუნქცია ყოველთვის ინარჩუნებს წვდომას
იმ ცვლადებზე, რომლებიც არსებობდა მისი შექმნის დროს,
მაშინაც კი, როცა მშობელი ფუნქცია უკვე დასრულებულია.

ტექნიკურად: ფუნქცია ინახავს მითითებას მის
variable environment-ზე (ე.წ. [[Scope]]).

Closure-ს scope chain-ზე პრიორიტეტი აქვს —
თუ closure-ში ცვლადი მოიძებნა, ძებნა scope chain-ში
არ გრძელდება.
*/

// === მაგალითი 1: ჯავშნების მთვლელი ===
const secureBooking = function () {
  let passengerCount = 0; // მშობელი ფუნქციის ცვლადი

  return function () {
    passengerCount++; // closure — წვდომა მშობელი ფუნქციის ცვლადზე
    console.log(`${passengerCount} მგზავრი დარეგისტრირდა`);
  };
};

const booker = secureBooking();
// secureBooking უკვე დასრულდა, მაგრამ...

booker(); // 1 მგზავრი დარეგისტრირდა
booker(); // 2 მგზავრი დარეგისტრირდა
booker(); // 3 მგზავრი დარეგისტრირდა

// closure-ის შემოწმება — [[Scopes]] თვისებაში ჩანს
console.dir(booker);

// === მაგალითი 2: ფუნქციის ხელახალი მინიჭება ===
let f;

const createTbilisiGreeter = function () {
  const city = "თბილისი";
  f = function () {
    console.log(`მოგესალმებით ${city}-დან! (${city.length} ასო)`);
  };
};

const createBatumiGreeter = function () {
  const city = "ბათუმი";
  f = function () {
    console.log(`მოგესალმებით ${city}-დან! (${city.length} ასო)`);
  };
};

createTbilisiGreeter();
f(); // მოგესალმებით თბილისი-დან! (7 ასო)
console.dir(f);

// f ხელახლა ენიჭება ახალ closure-ს
createBatumiGreeter();
f(); // მოგესალმებით ბათუმი-დან! (6 ასო)
console.dir(f);

// === მაგალითი 3: Closure timer-ებთან ===
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`ყველა ${n} მგზავრი იწყებს ჩასხდომას`);
    console.log(`3 ჯგუფი, თითოეულში ${perGroup} მგზავრი`);
  }, wait * 1000);

  console.log(`ჩასხდომა დაიწყება ${wait} წამში`);
};

// setTimeout-ის callback closure-ით იყენებს n-ს და perGroup-ს,
// მაშინაც კი, როცა boardPassengers უკვე დასრულებულია
boardPassengers(180, 3);

// closure-ს scope chain-ზე პრიორიტეტი აქვს:
const perGroup = 1000; // ეს არ გამოიყენება — closure-ის ცვლადს აქვს უპირატესობა

/*
═══════════════════════════════════════════════════════════════
10. შეჯამება — კონცეფციების შედარება
═══════════════════════════════════════════════════════════════

ძირითადი კონცეფციების შეჯამება და შედარება:

┌─────────────────────┬────────────────────────────────────────────────┐
│ კონცეფცია            │ აღწერა                                         │
├─────────────────────┼────────────────────────────────────────────────┤
│ Default Parameters  │ პარამეტრებს ნაგულისხმევი მნიშვნელობა ენიჭება;  │
│                     │ შეიძლება expression და წინა პარამეტრის          │
│                     │ გამოყენება; undefined-ით გამოტოვება              │
├─────────────────────┼────────────────────────────────────────────────┤
│ Value vs Reference  │ პრიმიტივები კოპირდება; ობიექტები მითითებით      │
│                     │ გადაიცემა — მუტაცია ორიგინალზე აისახება         │
├─────────────────────┼────────────────────────────────────────────────┤
│ First-class fn      │ ფუნქციები = მნიშვნელობები; ცვლადებში ინახება;  │
│                     │ არგუმენტად გადაეცემა; ფუნქციიდან ბრუნდება      │
├─────────────────────┼────────────────────────────────────────────────┤
│ Higher-order fn     │ ფუნქცია, რომელიც იღებს ან აბრუნებს სხვა       │
│                     │ ფუნქციას (callback, factory)                   │
├─────────────────────┼────────────────────────────────────────────────┤
│ Callback            │ ფუნქცია, რომელიც სხვა ფუნქციას გადაეცემა      │
│                     │ არგუმენტად; აბსტრაქციის ინსტრუმენტი            │
├─────────────────────┼────────────────────────────────────────────────┤
│ call / apply        │ this-ის ხელით მითითება; call — ცალ-ცალკე       │
│                     │ არგუმენტები; apply — მასივით                    │
├─────────────────────┼────────────────────────────────────────────────┤
│ bind                │ ახალ ფუნქციას ქმნის მიბმული this-ით;          │
│                     │ partial application; event listener-ებში       │
├─────────────────────┼────────────────────────────────────────────────┤
│ IIFE                │ ერთხელ შესასრულებელი ფუნქცია; მონაცემთა        │
│                     │ კონფიდენციალურობა; ES6-ში ბლოკის scope          │
│                     │ ალტერნატივაა                                   │
├─────────────────────┼────────────────────────────────────────────────┤
│ Closure             │ ფუნქცია ინარჩუნებს წვდომას მშობელი scope-ის    │
│                     │ ცვლადებზე; ავტომატურია; scope chain-ზე          │
│                     │ პრიორიტეტი აქვს                                │
└─────────────────────┴────────────────────────────────────────────────┘

call vs apply vs bind შედარება:

┌──────────┬──────────────────┬─────────────────────┬───────────────┐
│ მეთოდი    │ იძახებს ფუნქციას? │ არგუმენტების ფორმა   │ რას აბრუნებს? │
├──────────┼──────────────────┼─────────────────────┼───────────────┤
│ call     │ დიახ             │ ცალ-ცალკე           │ შედეგს        │
│ apply    │ დიახ             │ მასივი              │ შედეგს        │
│ bind     │ არა              │ ცალ-ცალკე (partial) │ ახალ ფუნქციას │
└──────────┴──────────────────┴─────────────────────┴───────────────┘

საუკეთესო პრაქტიკები:
- გამოიყენეთ default parameters ცარიელი არგუმენტების მართვისთვის
- ფრთხილად იყავით ობიექტების გადაცემისას — მუტაცია ორიგინალს ცვლის
- callback-ები კოდს მოდულურსა და აბსტრაქტულს ხდის
- bind გამოიყენეთ event listener-ებში this-ის დასაფიქსირებლად
- closure ავტომატურია — არ გჭირდებათ ხელით შექმნა
- IIFE ნაკლებად გამოიყენება ES6-ში — ბლოკის scope (let/const) ალტერნატივაა
*/
