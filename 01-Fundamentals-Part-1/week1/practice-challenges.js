////////////////////////////////////
// Practice Coding Challenge #1 - Age Calculator

/*
Emma and Michael want to find out who is older and by how many years.

1. Store Emma's and Michael's birth years in variables
2. Calculate the current age for both (use 2026 as current year)
3. Create a boolean variable 'emmaIsOlder' containing information about whether Emma is older than Michael
4. Calculate the age difference between them

TEST DATA 1: Emma was born in 1995, Michael was born in 1998
TEST DATA 2: Emma was born in 2001, Michael was born in 1999

GOOD LUCK 😀
*/

// const birthYearEmma = 1995;
// const birthYearMichael = 1998;
// const currentYear = 2026;

// const ageEmma = currentYear - birthYearEmma;
// const ageMichael = currentYear - birthYearMichael;
// const emmaIsOlder = ageEmma > ageMichael;
// const ageDifference = ageEmma > ageMichael ? ageEmma - ageMichael : ageMichael - ageEmma;

// console.log(ageEmma, ageMichael, emmaIsOlder, ageDifference);


////////////////////////////////////
// Practice Coding Challenge #2 - Temperature Converter

/*
You need to create a simple temperature converter and comparator.

1. Store two temperatures in Celsius in variables (temp1C and temp2C)
2. Convert both temperatures to Fahrenheit using the formula: F = C * 9/5 + 32
3. Print a nice output saying which temperature is higher in both Celsius and Fahrenheit
4. Use template literals to include the actual values

TEST DATA 1: temp1C = 20, temp2C = 25
TEST DATA 2: temp1C = 30, temp2C = 15

HINT: Use an if/else statement and template literals

GOOD LUCK 😀
*/

// const temp1C = 20;
// const temp2C = 25;

// const temp1F = temp1C * 9/5 + 32;
// const temp2F = temp2C * 9/5 + 32;

// console.log(`Temperature 1: ${temp1C}°C (${temp1F}°F)`);
// console.log(`Temperature 2: ${temp2C}°C (${temp2F}°F)`);

// if (temp1C > temp2C) {
//   console.log(`Temperature 1 (${temp1C}°C / ${temp1F}°F) is higher than Temperature 2 (${temp2C}°C / ${temp2F}°F)`);
// } else {
//   console.log(`Temperature 2 (${temp2C}°C / ${temp2F}°F) is higher than Temperature 1 (${temp1C}°C / ${temp1F}°F)`);
// }


////////////////////////////////////
// Practice Coding Challenge #3 - Movie Rating System

/*
Three friends rate a movie from 1 to 10. You need to calculate the average and determine if they should watch it.

1. Calculate the average rating of all three friends
2. The movie is "recommended" if the average is >= 7
3. The movie is "worth watching" if the average is >= 5 but < 7
4. The movie is "not recommended" if the average is < 5
5. Also, only recommend if ALL individual ratings are at least 4 (no one completely hated it)

TEST DATA 1: Friend1 = 8, Friend2 = 9, Friend3 = 7
TEST DATA 2: Friend1 = 5, Friend2 = 8, Friend3 = 3
TEST DATA 3: Friend1 = 6, Friend2 = 6, Friend3 = 5

HINT: Use logical operators (&&, ||) and multiple if/else if statements

GOOD LUCK 😀
*/

// const ratingFriend1 = 8;
// const ratingFriend2 = 9;
// const ratingFriend3 = 7;

// const averageRating = (ratingFriend1 + ratingFriend2 + ratingFriend3) / 3;
// console.log(`Average rating: ${averageRating}`);

// if (averageRating >= 7 && ratingFriend1 >= 4 && ratingFriend2 >= 4 && ratingFriend3 >= 4) {
//   console.log(`⭐ Recommended! Average rating: ${averageRating}`);
// } else if (averageRating >= 5 && ratingFriend1 >= 4 && ratingFriend2 >= 4 && ratingFriend3 >= 4) {
//   console.log(`👍 Worth watching. Average rating: ${averageRating}`);
// } else {
//   console.log(`👎 Not recommended. Average rating: ${averageRating}`);
// }


////////////////////////////////////
// Practice Coding Challenge #4 - Parking Fee Calculator

/*
A parking lot charges different rates based on how long you park:
- First 2 hours: $5 per hour
- 3 to 5 hours: $4 per hour
- More than 5 hours: $3 per hour (flat rate for all hours)

1. Calculate the parking fee based on the number of hours
2. Use a ternary operator to add a $2 weekend surcharge if it's a weekend
3. Print the total fee with a nice message

TEST DATA 1: 3 hours, weekday
TEST DATA 2: 6 hours, weekend
TEST DATA 3: 1 hour, weekend

HINT: You can nest ternary operators, but it might be easier to use if/else first
HINT: Use a boolean variable like isWeekend = true or false

GOOD LUCK 😀
*/

// const hours = 6;
// const isWeekend = true;

// let parkingFee;
// if (hours <= 2) {
//   parkingFee = hours * 5;
// } else if (hours <= 5) {
//   parkingFee = hours * 4;
// } else {
//   parkingFee = hours * 3;
// }

// const weekendSurcharge = isWeekend ? 2 : 0;
// const totalFee = parkingFee + weekendSurcharge;

// console.log(`Parking for ${hours} hours${isWeekend ? ' (weekend)' : ''}: $${totalFee}`);
// console.log(`Base fee: $${parkingFee}, Weekend surcharge: $${weekendSurcharge}, Total: $${totalFee}`);


////////////////////////////////////
// Practice Coding Challenge #5 - Grade Calculator

/*
Calculate a student's final grade and letter grade based on their scores.

The final grade is calculated as:
- Homework: 20% of final grade
- Midterm: 30% of final grade
- Final Exam: 50% of final grade

Letter grades:
- A: >= 90
- B: >= 80 and < 90
- C: >= 70 and < 80
- D: >= 60 and < 70
- F: < 60

Also, the student passes only if:
- Final grade >= 60 AND
- Final exam score >= 50 (they must do reasonably well on the final)

TEST DATA 1: Homework = 85, Midterm = 78, Final = 92
TEST DATA 2: Homework = 95, Midterm = 88, Final = 45
TEST DATA 3: Homework = 70, Midterm = 65, Final = 68

GOOD LUCK 😀
*/

// const homework = 85;
// const midterm = 78;
// const finalExam = 92;

// const finalGrade = (homework * 0.20) + (midterm * 0.30) + (finalExam * 0.50);
// console.log(`Final Grade: ${finalGrade}`);

// let letterGrade;
// if (finalGrade >= 90) {
//   letterGrade = 'A';
// } else if (finalGrade >= 80) {
//   letterGrade = 'B';
// } else if (finalGrade >= 70) {
//   letterGrade = 'C';
// } else if (finalGrade >= 60) {
//   letterGrade = 'D';
// } else {
//   letterGrade = 'F';
// }

// const passed = finalGrade >= 60 && finalExam >= 50;

// console.log(`Letter Grade: ${letterGrade}`);
// console.log(`Status: ${passed ? 'PASSED ✅' : 'FAILED ❌'}`);

// if (!passed && finalGrade >= 60) {
//   console.log('Note: Failed due to low final exam score (must be >= 50)');
// }


////////////////////////////////////
// Practice Coding Challenge #6 - Shopping Discount Calculator

/*
An online store has the following discount rules:
- Orders under $50: no discount
- Orders $50 to $100: 10% discount
- Orders over $100: 15% discount
- Additional 5% discount if you're a premium member (on top of the above)

1. Calculate the final price after discounts
2. Use ternary operators where possible
3. Print the original price, discount amount, and final price

TEST DATA 1: orderAmount = 75, isPremiumMember = false
TEST DATA 2: orderAmount = 120, isPremiumMember = true
TEST DATA 3: orderAmount = 45, isPremiumMember = true

GOOD LUCK 😀
*/

const orderAmount = 120;
const isPremiumMember = true;

let discountPercent;
if (orderAmount < 50) {
  discountPercent = 0;
} else if (orderAmount <= 100) {
  discountPercent = 10;
} else {
  discountPercent = 15;
}

const additionalDiscount = isPremiumMember ? 5 : 0;
const totalDiscountPercent = discountPercent + additionalDiscount;

const discountAmount = orderAmount * (totalDiscountPercent / 100);
const finalPrice = orderAmount - discountAmount;

console.log(`Original Price: $${orderAmount}`);
console.log(`Discount: ${totalDiscountPercent}% (Base: ${discountPercent}%${isPremiumMember ? ' + Premium: 5%' : ''})`);
console.log(`Discount Amount: $${discountAmount}`);
console.log(`Final Price: $${finalPrice}`);
