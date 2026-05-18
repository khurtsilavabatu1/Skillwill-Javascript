// 'use strict';
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');


// // const interface = 'Audio';
// // const private = 534


// // Functions 

// function logger() {
//     console.log('My Name is Jonas');
// }

// logger();
// logger();
// logger();
// function fruitProcessor(apples,oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }
// console.log(hasDriversLicense);

// function makeHasDriversLicenseFalse () {
//     hasDriversLicense = false
// }
// console.log(hasDriversLicense);

// makeHasDriversLicenseFalse()
// console.log(hasDriversLicense);

// // console.log(fruitProcessor(5,0));
// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2,4)
// console.log(appleOrangeJuice);
// // console.log(num);

// const num = Number('23')

// // function declaration 
// // calcAge1(1991)
// // calcAge2(1991)
// calcAge1(1991)
// // calcAge2(1992)
// function calcAge1(birthYear) {
//     return 2026 - birthYear
// }
// const age1 = calcAge1(1991);

// // Function expression 

// const calcAge2 = function(birthYar) {
//     return 2026 - birthYar
// }

// const age2 = calcAge2(1991);

// console.log(age1,age2);

// // Arrow Functions 

// const calcAge3 = birthYar => 2026 - birthYar
// const age3 = calcAge3(1991)
// console.log(age3);


// // const yearsUntilRetirement = (birthYar,firstName) => {
// // const age = 2026 - birthYar;
// // const retirement = 65 - age
// // return `${firstName} retires in ${retirement} years `
// // }

// // console.log(yearsUntilRetirement(1991,'Jonas'));
// // console.log(yearsUntilRetirement(1980,'Bob'));

// // Functions Calling Other functions 

// function cutFruitPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples,oranges) {
//     const applePieces = cutFruitPieces(apples)
//     const orangePieces = cutFruitPieces(oranges)
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces orange`;
//     return juice
// }

// console.log(fruitProcessor(2,3));
// console.log(fruitProcessor(true,false));
// console.log(Number);


// const yearsUntilRetirement = (birthYear,firstName) => {
// if( typeof birthYear !== "number" ) {
//     console.error(`Invalid argument birthYear - ${birthYear}`)
//     return}
// const age = 2026 - birthYear;
// const retirement = 65 - age
// console.log(retirement);
// console.log(retirement > 0);

// if(retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement
// } else {
//     console.log(`${firstName} has already retired`);
//     return `${firstName} has been already retired, for ${-retirement} years`
// }

// }

// console.log(yearsUntilRetirement(1999,'Jonas'));


// // console.log(yearsUntilRetirement(1910,'Mike'));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Miachel','Steven','Peter']
// console.log(friends);

// const y = new Array(1991,1984,2008,2020)
// console.log(y);

// console.log(y[0]);
// console.log(y[2]);


// console.log(friends.length);
// console.log(friends[friends.length-1]);

// friends[2] = 'Jay'
// console.log(friends);
// // friends = ['Bob','Alice']
// console.log(friends);


// const firstName = 'Jonas';
// const jonas = [firstName,'Schmedtmann',2037 - 1991,'teacher',friends]
// console.log(jonas);
// console.log(jonas.length);

// Excercise 

// const years = [1990,1967,2002,2010,2018];
// function calcAge(birthYear) {
//     return 2026 - birthYear
// } 
// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[2])
// const age4 = calcAge(years[3])
// const age5 = calcAge(years[years.length - 1])
// const ages = [age1,age2,age3,age4,age5]
// console.log(ages);

// const ages = [calcAge(years[0]),calcAge(years[1]),calcAge(years[2],calcAge(years[3],calcAge(years[4])))]

// Basic Array Operations (Methods)

const friends = ['Michael','Steven','Peter','Steven']

// Add elements
const newLength = friends.push('Jay')
console.log();

console.log(newLength);
console.log(friends);

const unshifted = friends.unshift('John')
console.log('unshifted',unshifted);

console.log(friends);

// Remove elements 

const popped = friends.pop();
console.log('popped',popped);

console.log(friends);

const shifted = friends.shift();
console.log(shifted);
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));





// Let's improve Steven's tip calculator even more, this time using loops!

// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

// 4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
//   4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
//   4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
//   4.3. Call the function with the 'totals' array

// GOOD LUCK 😀
// */

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length;i++ ) {
    const bill = bills[i]
    const tip = calcTip(bill)
    tips.push(tip)
    totals.push(tip + bill)
}

console.log(bills,tips,totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {   
        sum= sum + arr[i]
    }
    return sum / arr.length
}

console.log(calcAverage(tips));
console.log(calcAverage(bills));
console.log(calcAverage(totals));





















