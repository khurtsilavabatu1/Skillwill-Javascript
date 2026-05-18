'use strict';

///////////////////////////////////////
// ფორმასთან მუშაობა — JavaScript
// click, input, submit ივენთები და ფორმის მეთოდები
///////////////////////////////////////


///////////////////////////////////////
// 1. ელემენტების არჩევა (Selecting Elements)
///////////////////////////////////////

// ფორმა და ინფუთები
const registrationForm = document.querySelector('#registrationForm');
const fullNameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const ageInput = document.querySelector('#age');
const citySelect = document.querySelector('#city');
const bioTextarea = document.querySelector('#bio');
const resetBtn = document.querySelector('#resetBtn');

// ჩექბოქსები
const interestJS = document.querySelector('#interestJS');
const interestPython = document.querySelector('#interestPython');
const interestDesign = document.querySelector('#interestDesign');

// შეცდომების ელემენტები
const nameError = document.querySelector('#nameError');
const emailError = document.querySelector('#emailError');
const passwordError = document.querySelector('#passwordError');

// გამოსატანი ელემენტი
const formOutput = document.querySelector('#formOutput');

// Live input ელემენტები
const liveInput = document.querySelector('#liveInput');
const livePreview = document.querySelector('#livePreview');
const charCountInput = document.querySelector('#charCount');
const charCountDisplay = document.querySelector('#charCountDisplay');

// Click ელემენტები
const colorBtn = document.querySelector('#colorBtn');
const counterBtn = document.querySelector('#counterBtn');
const randomBtn = document.querySelector('#randomBtn');
const clickOutput = document.querySelector('#clickOutput');


///////////////////////////////////////
// 2. click ივენთი (Click Event)
///////////////////////////////////////

// 📌 addEventListener('click', callback) — ღილაკზე დაკლიკებისას ეშვება

// მაგალითი 1: ფერის შეცვლა
const bgColors = ['#e94560', '#0f3460', '#28b487', '#d69e2e', '#805ad5'];
let colorIndex = 0;

colorBtn.addEventListener('click', function () {
  colorIndex = (colorIndex + 1) % bgColors.length;
  colorBtn.style.backgroundColor = bgColors[colorIndex];
  clickOutput.textContent = `ფერი შეიცვალა: ${bgColors[colorIndex]}`;
});

// 📌 როგორ მუშაობს:
// 1. querySelector('#colorBtn') — ვარჩევთ ღილაკს
// 2. addEventListener('click', ...) — ვამაგრებთ click მსმენელს
// 3. callback ფუნქცია ეშვება ყოველი კლიკისას

// მაგალითი 2: მრიცხველი
let clickCount = 0;

counterBtn.addEventListener('click', function () {
  clickCount++;
  counterBtn.textContent = `მრიცხველი: ${clickCount}`;
  clickOutput.textContent = `მრიცხველი: ${clickCount}-ჯერ დაკლიკდა`;
});

// 📌 clickCount ცვლადი ჰენდლერის გარეთ არის, ამიტომ
// შენარჩუნდება კლიკებს შორის (closure)

// მაგალითი 3: შემთხვევითი რიცხვი
randomBtn.addEventListener('click', function () {
  const random = Math.trunc(Math.random() * 100) + 1;
  clickOutput.textContent = `შემთხვევითი რიცხვი: ${random}`;
});


///////////////////////////////////////
// 3. input ივენთი (Input Event)
///////////////////////////////////////

// 📌 'input' ივენთი — ირთვება ყოველ ჯერზე, როცა ველის მნიშვნელობა იცვლება
// (ყოველ სიმბოლოზე, არა მხოლოდ ფოკუსის დაკარგვისას!)

// მაგალითი 1: ტექსტის რეალურ-დროში ჩვენება
liveInput.addEventListener('input', function () {
  // 📌 this.value ან liveInput.value — ველის მიმდინარე მნიშვნელობა
  const text = liveInput.value;

  if (text.length === 0) {
    livePreview.textContent = 'ტექსტი გამოჩნდება აქ...';
  } else {
    livePreview.textContent = `თქვენ აკრიფეთ: "${text}"`;
  }
});

// მაგალითი 2: სიმბოლოების მრიცხველი
charCountInput.addEventListener('input', function () {
  const length = charCountInput.value.length;
  charCountDisplay.textContent = `${length} სიმბოლო`;
});

// 📌 input vs change:
// 'input'  — ყოველ სიმბოლოზე ირთვება (რეალური დრო)
// 'change' — მხოლოდ ფოკუსის დაკარგვისას (blur) ირთვება


///////////////////////////////////////
// 4. submit ივენთი (Submit Event)
///////////////////////////////////////

// 📌 'submit' ივენთი — ირთვება ფორმის გაგზავნისას
// ⚠️ ნაგულისხმევად ბრაუზერი გვერდს გადატვირთავს!
// e.preventDefault() — ხელს უშლის ნაგულისხმევ ქცევას

registrationForm.addEventListener('submit', function (e) {
  // 📌 e.preventDefault() — აჩერებს ფორმის ნაგულისხმევ გაგზავნას
  // ამის გარეშე გვერდი გადაიტვირთება და JavaScript ვერაფერს გააკეთებს!
  e.preventDefault();

  // შეცდომების გასუფთავება
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';

  // 📌 ვალიდაცია — მნიშვნელობების შემოწმება გაგზავნამდე
  let isValid = true;

  // სახელის შემოწმება
  if (fullNameInput.value.trim().length < 2) {
    nameError.textContent = 'სახელი მინიმუმ 2 სიმბოლო უნდა იყოს';
    isValid = false;
  }

  // ელ-ფოსტის შემოწმება
  if (!emailInput.value.includes('@')) {
    emailError.textContent = 'ელ-ფოსტა არასწორია (@ აუცილებელია)';
    isValid = false;
  }

  // პაროლის შემოწმება
  if (passwordInput.value.length < 6) {
    passwordError.textContent = 'პაროლი მინიმუმ 6 სიმბოლო უნდა იყოს';
    isValid = false;
  }

  if (!isValid) {
    formOutput.textContent = 'გთხოვთ, შეასწორეთ შეცდომები!';
    return; // ფუნქციიდან გამოსვლა — ფორმა არ "იგზავნება"
  }

  // 📌 ინტერესების შეგროვება (ჩექბოქსები)
  const interests = [];
  if (interestJS.checked) interests.push(interestJS.value);
  if (interestPython.checked) interests.push(interestPython.value);
  if (interestDesign.checked) interests.push(interestDesign.value);

  // 📌 ყველა მონაცემის შეგროვება
  const formData = {
    name: fullNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: '●'.repeat(passwordInput.value.length),
    age: ageInput.value || 'არ არის მითითებული',
    city: citySelect.value || 'არ არის არჩეული',
    interests: interests.length > 0 ? interests.join(', ') : 'არ არის არჩეული',
    bio: bioTextarea.value.trim() || 'არ არის შეყვანილი',
  };

  // 📌 შედეგის ჩვენება
  formOutput.textContent = `რეგისტრაცია წარმატებულია!

სახელი:      ${formData.name}
ელ-ფოსტა:    ${formData.email}
პაროლი:      ${formData.password}
ასაკი:       ${formData.age}
ქალაქი:      ${formData.city}
ინტერესები:  ${formData.interests}
ბიოგრაფია:   ${formData.bio}`;
});

// 📌 submit ივენთის მნიშვნელოვანი წერტილები:
// 1. e.preventDefault() — აუცილებელია გვერდის გადატვირთვის თავიდან ასაცილებლად
// 2. ვალიდაცია — მონაცემების შემოწმება გაგზავნამდე
// 3. .value — ინფუთის მიმდინარე მნიშვნელობა (სტრინგი)
// 4. .checked — ჩექბოქსის მდგომარეობა (true/false)
// 5. select.value — არჩეული option-ის value ატრიბუტი


///////////////////////////////////////
// 5. ფორმის მეთოდები (Form Methods)
///////////////////////////////////////

// 📌 .value — ინფუთის მნიშვნელობის წაკითხვა/დაყენება
// console.log(fullNameInput.value);      // წაკითხვა
// fullNameInput.value = 'ახალი სახელი';  // დაყენება

// 📌 .checked — ჩექბოქსის მდგომარეობა (boolean)
// console.log(interestJS.checked);   // true ან false
// interestJS.checked = true;         // პროგრამულად მონიშვნა

// 📌 select.value — არჩეული ელემენტის მნიშვნელობა
// console.log(citySelect.value);     // "თბილისი" ან ""
// citySelect.value = 'ბათუმი';       // პროგრამულად არჩევა

// 📌 select.selectedIndex — არჩეული ელემენტის ინდექსი
// console.log(citySelect.selectedIndex); // 0, 1, 2, ...
// citySelect.selectedIndex = 2;          // მესამე option-ის არჩევა

// 📌 form.reset() — ფორმის ყველა ველის გასუფთავება
resetBtn.addEventListener('click', function () {
  registrationForm.reset();
  formOutput.textContent = 'ფორმა გასუფთავდა!';
  nameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
});

// 📌 .focus() — ფოკუსის დაყენება ელემენტზე
// fullNameInput.focus(); // კურსორი ავტომატურად ამ ველზე გადავა

// 📌 .blur() — ფოკუსის წაშლა
// fullNameInput.blur();


///////////////////////////////////////
// 6. პრაქტიკული მაგალითი — ძიების ფილტრი
///////////////////////////////////////

// 📌 ეს მაგალითი აერთიანებს input ივენთს, filter() და forEach()-ს
// რეალურ დროში სიის გაფილტვრა ძიების ველის მიხედვით

// (ეს მუშაობს კონსოლში, DOM ელემენტები სადემონსტრაციოა)
const products = ['ლეპტოპი', 'ტელეფონი', 'პლანშეტი', 'მონიტორი', 'კლავიატურა'];

const searchProducts = function (query) {
  const results = products.filter(product =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  if (results.length > 0) {
    console.log(`ნაპოვნია: ${results.join(', ')}`);
  } else {
    console.log('ვერაფერი მოიძებნა');
  }

  return results;
};

searchProducts('ტ'); // ნაპოვნია: ტელეფონი, პლანშეტი, კლავიატურა
searchProducts('მონ'); // ნაპოვნია: მონიტორი
searchProducts('xyz'); // ვერაფერი მოიძებნა


///////////////////////////////////////
// შეჯამება
///////////////////////////////////////

// 📌 ფორმის ძირითადი ივენთები:
//
// 'click'   — ღილაკზე დაკლიკება
//             element.addEventListener('click', function() { ... })
//
// 'input'   — ველის მნიშვნელობის ცვლილება (ყოველ სიმბოლოზე)
//             input.addEventListener('input', function() { ... })
//
// 'submit'  — ფორმის გაგზავნა
//             form.addEventListener('submit', function(e) { e.preventDefault(); ... })
//
// 'change'  — ველის მნიშვნელობის ცვლილება (ფოკუსის დაკარგვისას)
//             select.addEventListener('change', function() { ... })

// 📌 ფორმის ძირითადი თვისებები და მეთოდები:
//
// input.value      — ინფუთის მნიშვნელობა (სტრინგი)
// checkbox.checked  — ჩექბოქსი მონიშნულია? (boolean)
// select.value      — არჩეული option-ის value
// select.selectedIndex — არჩეული option-ის ინდექსი
// form.reset()      — ყველა ველის გასუფთავება
// input.focus()     — ფოკუსის დაყენება
// input.blur()      — ფოკუსის წაშლა
// e.preventDefault() — ნაგულისხმევი ქცევის შეჩერება
