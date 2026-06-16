"use strict";

////////////////////////////////////
// Bankist App — ფუნქციების ჩელენჯები
// (პასუხების გარეშე)
////////////////////////////////////

/*
ეს ჩელენჯები ეფუძნება Bankist აპლიკაციას.
მონაცემები და DOM ელემენტები უკვე მზადაა index.html-ში.
თქვენი ამოცანაა ფუნქციების დაწერა ნულიდან.

მონაცემები რომლებთანაც მუშაობთ:
*/

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "standard",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "premium",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const accounts = [account1, account2, account3, account4];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");


////////////////////////////////////
// Challenge #1: createUsernames
////////////////////////////////////

/*
შექმენი ფუნქცია 'createUsernames', რომელიც:

1. პარამეტრად იღებს accounts მასივს
2. forEach-ით გაივლის თითოეულ ანგარიშს
3. ყოველ ანგარიშს დაუმატებს ახალ property-ს 'username'
4. username შედგება owner-ის სახელის ინიციალებისგან, lowercase-ში

მაგალითი:
  'Jonas Schmedtmann' → 'js'
  'Steven Thomas Williams' → 'stw'

HINT: გამოიყენე toLowerCase(), split(' '), map(), join('')
HINT: ფუნქცია არაფერს აბრუნებს (return არ სჭირდება) —
      მხოლოდ ობიექტებს უმატებს username-ს (side effect)

ფუნქციის შექმნის შემდეგ დაუძახე: createUsernames(accounts);
შემდეგ დალოგე accounts და შეამოწმე username-ები.
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #2: displayMovements
////////////////////////////////////

/*
შექმენი ფუნქცია 'displayMovements', რომელიც:

1. პარამეტრებად იღებს: movements (მასივი) და sort (boolean, default = false)
2. ჯერ გაასუფთავებს containerMovements-ის innerHTML-ს (= '')
3. თუ sort === true, movements-ის ᲙᲝᲞᲘᲐ დაალაგე ზრდადობით (a - b).
   ორიგინალი მასივი არ შეიცვალოს! (გამოიყენე slice())
4. forEach-ით გაიარე ყოველი movement:
   - თუ mov > 0, ტიპი არის 'deposit', თუ არა — 'withdrawal'
   - შექმენი HTML string (template literal):
     <div class="movements__row">
       <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
       <div class="movements__value">${mov}€</div>
     </div>
   - insertAdjacentHTML('afterbegin', html) — ჩასვი კონტეინერში

HINT: insertAdjacentHTML('afterbegin', ...) ბოლო ელემენტს ზემოთ აჩვენებს
HINT: sort-ისთვის: sort ? movements.slice().sort((a,b) => a-b) : movements

ტესტი: displayMovements(account1.movements);
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #3: calcDisplayBalance
////////////////////////////////////

/*
შექმენი ფუნქცია 'calcDisplayBalance', რომელიც:

1. პარამეტრად იღებს account ობიექტს (acc)
2. reduce-ით ჯამავს acc.movements მასივის ყველა ელემენტს
3. შედეგს ინახავს acc.balance-ში (ობიექტზე ამატებს ახალ property-ს)
4. labelBalance.textContent-ს ანიჭებს: '${balance}€'

HINT: reduce((acc, mov) => acc + mov, 0)
HINT: acc.balance = ... — ობიექტზე ახალი property-ის დამატება

ტესტი: calcDisplayBalance(account1);
→ უნდა აჩვენოს: 3840€
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #4: calcDisplaySummary
////////////////////////////////////

/*
შექმენი ფუნქცია 'calcDisplaySummary', რომელიც:

1. პარამეტრად იღებს account ობიექტს (acc)
2. ითვლის და აჩვენებს სამ მნიშვნელობას:

   IN (შემოსავლები):
   - acc.movements-დან filter-ით ამოიღე მხოლოდ დადებითები (mov > 0)
   - reduce-ით დაჯამე
   - labelSumIn.textContent = '${incomes}€'

   OUT (გასავლები):
   - filter-ით ამოიღე მხოლოდ უარყოფითები (mov < 0)
   - reduce-ით დაჯამე
   - Math.abs()-ით გადააქციე დადებითად
   - labelSumOut.textContent = '${out}€'

   INTEREST (პროცენტი):
   - filter-ით ამოიღე მხოლოდ დადებითები (deposits)
   - map-ით თითოეულ deposit-ზე გამოთვალე: (deposit * acc.interestRate) / 100
   - filter-ით დატოვე მხოლოდ >= 1 ევრო (ბანკი 1€-ზე ნაკლებ პროცენტს არ იხდის)
   - reduce-ით დაჯამე
   - labelSumInterest.textContent = '${interest}€'

HINT: chaining — .filter().map().filter().reduce()

ტესტი: calcDisplaySummary(account1);
→ IN: 5020€, OUT: 1180€, INTEREST: 59.4€ (დაახლოებით)
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #5: updateUI
////////////////////////////////////

/*
შექმენი ფუნქცია 'updateUI', რომელიც:

1. პარამეტრად იღებს account ობიექტს (acc)
2. იძახებს სამ ფუნქციას თანმიმდევრობით:
   - displayMovements(acc.movements)
   - calcDisplayBalance(acc)
   - calcDisplaySummary(acc)

ეს "შემკრები" ფუნქციაა — ყოველთვის როცა მონაცემები იცვლება,
updateUI-ს ვიძახებთ და ის სამივე ნაწილს ერთად განაახლებს.

HINT: ძალიან მარტივი ფუნქციაა — 3 ხაზი კოდი
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #6: Login (Event Handler)
////////////////////////////////////

/*
btnLogin-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault() — ფორმის submit-ის თავიდან აცილება
2. accounts მასივში იპოვე ანგარიში, სადაც username ემთხვევა
   inputLoginUsername.value-ს (გამოიყენე find())
3. შეამოწმე PIN: currentAccount?.pin === Number(inputLoginPin.value)
   (optional chaining — თუ ანგარიში ვერ იპოვა, error არ გამოვიდეს)
4. თუ PIN სწორია:
   - labelWelcome.textContent = 'Welcome back, ${სახელი}' (მხოლოდ პირველი სახელი)
   - containerApp.style.opacity = 1 (აპის ჩვენება)
   - input ველების გასუფთავება (value = '')
   - inputLoginPin.blur() — ფოკუსის მოხსნა
   - updateUI(currentAccount) — UI-ის განახლება

HINT: owner.split(' ')[0] — პირველი სახელის ამოღება
HINT: let currentAccount; — ფუნქციის გარეთ გამოაცხადე

ტესტი: username: 'js', pin: 1111
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #7: Transfer (Event Handler)
////////////////////////////////////

/*
btnTransfer-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault()
2. inputTransferAmount.value-დან ამოიღე თანხა (Number-ად გადააქციე)
3. accounts-ში იპოვე მიმღები ანგარიში inputTransferTo.value-ით (find())
4. გაასუფთავე input ველები
5. შეამოწმე 4 პირობა (ყველა ერთად):
   - amount > 0
   - მიმღები ანგარიში არსებობს (receiverAcc)
   - currentAccount.balance >= amount (საკმარისი თანხა)
   - მიმღები არ არის საკუთარი თავი (receiverAcc.username !== currentAccount.username)
6. თუ ყველაფერი OK:
   - currentAccount.movements-ში push(-amount) (გამგზავნს აკლდება)
   - receiverAcc.movements-ში push(amount) (მიმღებს ემატება)
   - updateUI(currentAccount)

ტესტი: გადარიცხე 100€ 'jd'-ზე (Jessica Davis)
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #8: Loan (Event Handler)
////////////////////////////////////

/*
btnLoan-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault()
2. inputLoanAmount.value-დან ამოიღე თანხა
3. შეამოწმე 2 პირობა:
   - amount > 0
   - არსებობს თუნდაც ერთი movement, რომელიც >= მოთხოვნილი თანხის 10%-ს
     (გამოიყენე some() მეთოდი: mov >= amount * 0.1)
4. თუ OK:
   - currentAccount.movements-ში push(amount)
   - updateUI(currentAccount)
5. გაასუფთავე input

HINT: some() — აბრუნებს true/false, არსებობს თუ არა ელემენტი რომელიც აკმაყოფილებს პირობას

ტესტი: მოითხოვე 500€ სესხი (Jonas-ს აქვს 3000€ deposit, 3000 * 0.1 = 300 < 500 ✅)
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #9: Close Account (Event Handler)
////////////////////////////////////

/*
btnClose-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault()
2. შეამოწმე:
   - inputCloseUsername.value === currentAccount.username
   - Number(inputClosePin.value) === currentAccount.pin
3. თუ ორივე სწორია:
   - findIndex()-ით იპოვე ანგარიშის ინდექსი accounts მასივში
   - splice()-ით წაშალე ეს ანგარიში მასივიდან
   - containerApp.style.opacity = 0 (აპის დამალვა)
4. გაასუფთავე input ველები

HINT: findIndex() — find()-ის მსგავსი, მაგრამ ინდექსს აბრუნებს
HINT: splice(index, 1) — ერთი ელემენტის წაშლა ინდექსით

ტესტი: დახურე Jonas-ის ანგარიში (username: 'js', pin: 1111)
*/

// შენი კოდი აქ:


////////////////////////////////////
// Challenge #10: Sort (Event Handler)
////////////////////////////////////

/*
btnSort-ზე 'click' event listener დაამატე. ფუნქციამ უნდა:

1. e.preventDefault()
2. displayMovements გამოიძახე !sorted პარამეტრით
3. sorted-ის მნიშვნელობა შეაბრუნე (toggle)

sorted ცვლადი ფუნქციის გარეთ გამოაცხადე: let sorted = false;

ეს საშუალებას აძლევს ღილაკს იმუშაოს როგორც toggle:
- პირველი კლიკი: დაალაგებს (sorted = true)
- მეორე კლიკი: დააბრუნებს ორიგინალს (sorted = false)

ტესტი: ღილაკზე დაჭერისას movements უნდა დალაგდეს/აღდგეს
*/

// შენი კოდი აქ:
