
// Values and Variables 
// let js = "11"
//  if(js == 10) alert("Javascript is amazing")


// console.log("Jonas")
// console.log(23)

// let firstName = "Matilda"

// console.log("firstName")
// console.log(firstName)
// console.log(firstName)

// Variables name conventions 

// let ponas_matilda = "JM";
// let $function = 27;

// let person = "jonas";
// let PI = 3.1415;


// let myFirstJob = "Coder";
// let mySecondJon = "teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// let hasChildren;
// console.log("hasChildren",typeof hasChildren);

// let emptyValue = null
// let user1 = Symbol("Giorgi")
// let user2 = Symbol("Giorgi")
// console.log("eqaulityCheck",user1 == user2);

// initialSymbol = 10
// console.log(initialSymbol);
// let bigNumber = BigInt(10)
// console.log(typeof job1);
// console.log(typeof user1);

// console.log(typeof emptyValue);
// console.log(typeof emptyValue);
// console.log(typeof initialSymbol);
// console.log(typeof bigNumber);




// console.log(hasChildren);



// if(person == "jonas") hasChildren = true
// console.log(hasChildren);

// let age = 26;
// let birthYear = 1999;


// age = "twenty five"
// let currentYear =  age;

// console.log(currentYear);


// let,const,var 

// let myAge = 26;
//  myAge = 27;

// let withoutValue;

// const birthYear = 1999;

// birthYear = 2000

// var job = "programmer"
// var job = 10


// const now = 2037

// const now = 2026;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas,ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2**3);


// const lastName ="Schmedtman"
// const fullName = firstName + " " + lastName;
// console.log(firstName + " " + lastName);
// console.log(firstName,lastName);


// Assignment operators

// let x = 10 + 5
// x += 10 // x = x + 10
// x *=4   // x = x * 4
// x /=2.  // x = x / 2
// x++     // x = x + 1
// x--    // x = x - 1

// console.log(x);


// Comparison Operators 

// console.log(ageJonas > ageSarah);  // >, <,>=, <=
// console.log(ageSarah <= 8);

// const isFullAge = ageSarah >= 18




// Operator precendence
// console.log(now - 1991 > now - 2018);
// x = y = 25 - 10 - 5


// const averageAge = (ageJonas + ageSarah) / 2;

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// let massMark = 78;
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.95

// let BMIMark = massMark / heightMark ** 2
// let BMIJohn = massJohn / (heightJohn * heightJohn)

// let markHigherBMI = BMIMark > BMIJohn

// console.log("BMIMark - ",BMIMark,"BMIJohn - ", BMIJohn, "markHigherBMI -", markHigherBMI  );

// Strings and Template  

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`
// console.log(jonasNew);

// console.log('String with \n\
//     multiple \n\
//     lines');

//     console.log(`String
//         multiple
//         lines`);
    
// const age = 15;
// const isOldEnaugh = age >= 18

// if(isOldEnaugh) {
//     console.log("Sarah can start driving license 🚗"); 
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years! `);
// }


// if(isOldEnaugh == false) {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, Wait another ${yearsLeft} years! `);
// } else {
//     console.log("Sarah can start driving license 🚗"); 

// }

// const birthYar = 2012;

// let century;
// console.log(century);

// if(birthYar <= 2000) {
//     century = 20;
// } else {
//     century = 21
// }
// console.log(century);

// let massMark = 78;
// let heightMark = 1.69
// let massJohn = 92
// let heightJohn = 1.95

// let BMIMark = massMark / heightMark ** 2
// let BMIJohn = massJohn / (heightJohn * heightJohn)

// let markHigherBMI = BMIMark > BMIJohn

// if(BMIMark > BMIJohn) {
//  console.log(`Mark's BMI (${BMIMark}) is higher than John's BMI (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
// }

// if (markHigherBMI) {
//   console.log("Mark's BMI (" + BMIMark + ") is higher than John's (" + BMIJohn + ")");
// } else {
//   console.log("John's BMI (" + BMIJohn + ") is higher than Mark's (" + BMIMark + ")");
// }
// type conversion 
// const inputYear = "1991"
// console.log(Number(inputYear),inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23),23);


// type coercion 
// console.log("23" + 23 + '23');
// console.log('23' - 'dasdasd');
// console.log('23' / '2');
// console.log('24' * '22');


// let n = '1' + 1;
// n = n - '1';

// console.log(n);
// console.log(3/10);

// console.log(Boolean(10));
// console.log(Boolean("Name"));

// Falsy Values
// 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// let money = 0;

// if(money) {
//     console.log("Don't spend it all"); 
// } else {
//     console.log("You should get a job"); 
// }



//  money = 100;

// if(money) {
//     console.log("Don't spend it all"); 
    
// } else {
//     console.log("You should get a job"); 
// }

// Equality Operators 
// const age = "18";
// if(age === 18) console.log("You just became an adult strict");

// if(true == 18) console.log("You just became an adult loose");



// const favourite = Number(prompt('What is your favourite number?'))
// console.log(favourite);

// if(favourite === 23) {
//     console.log("Cool! 23 is amazing number");
    
// } else if(favourite === 7) {
// console.log("7 is also a cool number");

// } 
// else if(favourite === 9) {
// console.log(" is also a cool number");

// } 

// else {
//     console.log("Number is not 23 or 7 or 9");
// }


// Logical Operators
// const age = 16;
// const a = age >= 20;
// const b = age < 30;

// console.log('age-',age,'a-',a,'b-',b);

// console.log('!a',!a);
// console.log('a && b',a && b);
// console.log('a || b',a || b);
// console.log('!a || b',!a || b);
// console.log('a || !b',a || !b);


// const hasDriversLicense = true;
// const hasGoodVision = true;

// // console.log(hasDriversLicense && hasGoodVision);
// // console.log(hasDriversLicense || hasGoodVision);
// // console.log(hasDriversLicense || !hasGoodVision);
// // console.log(hasDriversLicense && !hasGoodVision);



// if (hasDriversLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
    
// } else {
//     console.log("Someone else should drive...");
    
// }


// const isTired = true;
// console.log(hasDriversLicense && !hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
    
// } else {
//     console.log("Someone else should drive...");
    
// }


let a = 10; 
let b = 5; 
let c = 0; 
let result = a < b || b === 5 && c > 0 || a === 10;
// a < b || true && false|| a === 10;
// false || false || true;
// false || true && false || true

// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/


// const scoreAverageDolphins = (96+108+89)/3;
// const scoreAverageKoalas = (88+91+110)/3;

// if(scoreAverageDolphins > scoreAverageKoalas && scoreAverageDolphins >=100) {
//     console.log("Dolphins win the trophy");
// } else if ( scoreAverageKoalas > scoreAverageDolphins && scoreAverageKoalas >=100) {
//     console.log("Koalas win the trophy");
// } else if(scoreAverageKoalas === scoreAverageDolphins && scoreAverageKoalas >=100) {
//     console.log("Both win the trophy");
// } else {
//     console.log(scoreAverageDolphins,scoreAverageKoalas);
//     console.log("No one win the tropy");
    
// }

// The Switch Statement 
const day = "monday"
switch (day) {
    case "monday":
        console.log("plan course structure");
        console.log("Go to coding meetup");
        break;
    case "tuesday":
        console.log("Prepare theory videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("write code examples");
        break;
        
    case "friday":
        console.log("Record videos");
        break;
        
    case "saturday":
    case "sunday"  :
        console.log("Enjoy the weekend");
         break;

    default:
        console.log("not a valid day!");
}


if(day === 'monday') {
    console.log("plan course structure");
    console.log("Go to coding meetup");
} else if(day === "tuesday") {
    console.log("Prepare theory videos");
} else if(day === 'wednedsday' || day === 'thursday') {
    console.log("write code examples");
} else if (day === 'friday') {
    console.log("Record videos");
} else if(day === 'saturday' || day ==="sunday") {
      console.log("Enjoy the weekend");
} else {
    console.log("not a valid day!");
}

if(23 > 10) {
    const str = '23 is bigger'
}

const me ='Jonass'
console.log(`I'm ${2037 - 1991} years old ${me}`);


// Conditional operator

const age = 19;
age <= 18 ? 
console.log('I like to drink wine') 
: age <= 20 
? console.log("don't know") 
: console.log('I like to drink water');


const drink = age >= 18 ? 'wine' : 'water'

let drink2;
if(age <=18) {
     drink2 = 'water'
    
} else {
   drink2 = 'wine'
}

console.log(`I like to drink ${true ? 'wine' : "water"}`);


const bill = 430;
const tip = bill <= 300 && bill >=50 ? bill * 0.15 : bill * 0.2

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);















