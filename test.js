// const age = [11, 21, 13, 41, 15];
// const result = age.filter(checkAge);

// function checkAge(age) {
//   return age > 18;
// }
// console.log(result);

// by arrow function

// const age = [11, 21, 13, 41, 15];
// const result = age.filter(age => age > 18);
// console.log(result);


// npm prompt-sync
var prompt = require("prompt-sync")();

//----------------- 1 -----------------
const age = prompt("Enter your age : ");
age >= 18
  ? console.log("You are eligible to vote")
  : console.log("You are not eligible to vote");


















  