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


























