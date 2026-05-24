"use strict";

// ფორმა და ინფუთები
const registrationForm = document.querySelector("#registrationForm");
const fullNameInput = document.querySelector("#fullName");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const ageInput = document.querySelector("#age");
const bioTextarea = document.querySelector("#bio");
const resetBtn = document.querySelector("#resetBtn");
const citySelect = document.querySelector("#city");

// ჩეკბოქსები
const interestJS = document.querySelector("#interestJS");
const interestPython = document.querySelector("#interestPython");
const interestDesign = document.querySelector("#interestDesign");

const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const formOutput = document.querySelector("#formOutput");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  //   შეცდომების გავასუფთავება
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";

  //   ვალიდაცია - მნიშვნელობების შემოწმება გაგზავნამდე
  let isValid = true;
  //   console.log(fullNameInput.value.trim());

  //   console.log(fullNameInput.value);
  if (fullNameInput.value.trim().replace(/\s+/g, " ").length < 2) {
    nameError.textContent = "სახელი მინიმუმ 2 სიმბოლო უნდა იყოს";
    isValid = false;
  }

  if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
    emailError.textContent =
      "ელ-ფოსტა არასწორია ('@' და 'წერტილი' აუცილებელია)";
    isValid = false;
  }

  if (passwordInput.value.length < 6) {
    passwordError.textContent =
      "პაროლი უნდა იყოს მინიმუმ 6 სიმბოლოსგან შემდგარი";
    isValid = false;
  }

  if (!isValid) {
    formOutput.textContent = "გთხოვთ შეასწორეთ შეცდომები!";
    return;
  }

  console.log(interestJS.checked, interestPython.checked);

  const interests = [];
  //   [Javascript,interestPython,Desgin]. =>>> "Javascript,interestPython,Desgin"
  if (interestJS.checked) interests.push(interestJS.value);
  if (interestPython.checked) interests.push(interestPython.value);
  if (interestDesign.checked) interests.push(interestDesign.value);
  //   console.log(interests.join("+++"));

  const formData = {
    name: fullNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: "*".repeat(passwordInput.value.length),
    age: ageInput.value || "არ არის მითითებული",
    city: citySelect || "არ არის არჩეული",
    interests: interests.length > 0 ? interests.join(",") : "არ არის არჩეული",
    bio: bioTextarea.value.trim() || "არ არის შეყვანილი",
  };

  formOutput.textContent = `რეგისტრაცია წარმატებულია!
  
  სახელი: ${formData.name}
  ელ-ფოსტა: ${formData.email}
  პაროლი: ${formData.password}
  ასაკი: ${formData.age}
  ქალაქი: ${formData.city}
  ინტერესები: ${formData.interests}
  ბიოგრაფია: ${formData.bio}`;
});
