// var fs = require("fs");
// var os = require("os");

// var user = os.userInfo();
// console.log(user);
// console.log(user.username);

// fs.appendFile("greetings.txt", `Hello ${user.username}!\n`, () => {
//   console.log("Unable to write to file");
// });

var _ = require('lodash');  // Extract unique data from any data

var data = ["Chandan", "Suman", "Rajesh", "Chandan", "Suman", "age", "Chandan", "Suman", "Name", ]
var filteredData = _.uniq(data);
console.log(filteredData);

console.log(_.isString(123));
console.log(_.isString("123"));




const notes = require("./notes.js");
console.log("Server file loaded");

var age = notes.age;
console.log(age);
var result = notes.addNumbers(18, 20);
console.log("Result is now", result);









