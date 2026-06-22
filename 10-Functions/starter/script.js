"use strict";
// const reservations = [];
// const createReservation = function (
//   tourName,
//   numGuests = 1,
//   price = 50 * numGuests, // expression — იყენებს წინა პარამეტრს
// ) {
//   const reservation = {
//     tourName,
//     numGuests,
//     price,
//   };
//   console.log(reservation);
//   reservations.push(reservation);
// };

// // გამოძახება სხვადასხვა არგუმენტებით
// createReservation("თბილისი-ტური");
// // { tourName: 'თბილისი-ტური', numGuests: 1, price: 50 }

// createReservation("ბათუმი-ტური", 3, 200);
// // { tourName: 'ბათუმი-ტური', numGuests: 3, price: 200 }

// createReservation("მცხეთა-ტური", 4);
// // { tourName: 'მცხეთა-ტური', numGuests: 4, price: 200 }  (50 * 4)

// // პარამეტრის გამოტოვება undefined-ით
// createReservation("კახეთი-ტური", null, 300);
// // { tourName: 'კახეთი-ტური', numGuests: 1, price: 300 }
// // numGuests ნაგულისხმევ 1-ს იღებს, price ხელით დავაყენეთ

const georgianAirways = {
  airline: "Georgian Airways",
  code: "A9",
  bookings: [],
  planes: 0,
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

// georgianAirways.book(101, "გიორგი ბერიძე");
// georgianAirways.book(202, "ნინო წულუკიძე");
// console.log(georgianAirways);

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

georgianAirways.buyPlane = function () {
  console.log(this);
  this.planes = this.planes + 1;
  console.log(`თვითმფრინავების რაოდენობა: ${this.planes}`);
};

// Event listener-ში this ელემენტს მიუთითებს, არა ობიექტს.
// bind-ით ვასწორებთ:
document
  .querySelector(".buy")
  .addEventListener("click", georgianAirways.buyPlane.bind(georgianAirways));

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
