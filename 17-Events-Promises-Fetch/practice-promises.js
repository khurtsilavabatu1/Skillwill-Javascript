// ========================================
// Promise-ების სავარჯიშოები
// ========================================

// ============ 1. Promise შექმნა ============
// შექმენი Promise რომელიც 1 წამის შემდეგ resolve გააკეთებს "hello" სტრინგს
// შემდეგ .then-ით დაბეჭდე შედეგი

function exercise1() {
  // შენი კოდი აქ
}

// exercise1();

// ============ 2. Reject ============
// შექმენი Promise რომელიც reject გააკეთებს "something went wrong" შეცდომით
// დაიჭირე .catch-ით და დაბეჭდე შეცდომა

function exercise2() {
  // შენი კოდი აქ
}

// exercise2();

// ============ 3. Then chain ============
// შექმენი Promise რომელიც resolve აკეთებს რიცხვ 5-ს
// .then-ით გაამრავლე 2-ზე
// შემდეგ .then-ით დაუმატე 10
// შემდეგ .then-ით დაბეჭდე (უნდა იყოს 20)

function exercise3() {
  // შენი კოდი აქ
}

// exercise3();

// ============ 4. async/await ============
// გადაწერე exercise3 async/await-ით (then-ის გარეშე)

async function exercise4() {
  // შენი კოდი აქ
}

// exercise4();

// ============ 5. try/catch ============
// შექმენი async ფუნქცია რომელიც await-ით ელოდება Promise-ს
// ეს Promise reject-ს აკეთებს "error!"
// დაიჭირე try/catch-ით და დაბეჭდე შეცდომა

async function exercise5() {
  // შენი კოდი აქ
}

// exercise5();

// ============ 6. fetch + then ============
// fetch-ით წამოიღე https://jsonplaceholder.typicode.com/users/1
// .then-ით გადააქციე json-ად
// .then-ით დაბეჭდე მომხმარებლის name

function exercise6() {
  // შენი კოდი აქ
}

// exercise6();

// ============ 7. fetch + async/await ============
// იგივე რაც exercise6, მაგრამ async/await-ით

async function exercise7() {
  // შენი კოდი აქ
}

// exercise7();

// ============ 8. fetch + error handling ============
// fetch-ით მიმართე არასწორ URL-ს: https://jsonplaceholder.typicode.com/invalid-endpoint
// async/await + try/catch-ით დაამუშავე
// თუ response.ok არ არის, throw new Error გააკეთე

async function exercise8() {
  // შენი კოდი აქ
}

// exercise8();

// ============ 9. Promise.all ============
// ერთდროულად წამოიღე 3 მომხმარებელი (id: 1, 2, 3) jsonplaceholder-დან
// Promise.all-ით დაელოდე სამივეს
// დაბეჭდე სამივეს name

async function exercise9() {
  // შენი კოდი აქ
}

// exercise9();

// ============ 10. POST request ============
// fetch-ით გააგზავნე POST მოთხოვნა: https://jsonplaceholder.typicode.com/posts
// body-ში გააგზავნე: { title: "test", body: "hello", userId: 1 }
// არ დაგავიწყდეს headers და JSON.stringify
// დაბეჭდე პასუხი

async function exercise10() {
  // შენი კოდი აქ
}

// exercise10();
