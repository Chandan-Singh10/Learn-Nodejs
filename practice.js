const objectToConvert = {
  name: "John",
  age: 25,
};

const jsonString = JSON.stringify(objectToConvert);
console.log(jsonString);

console.log(typeof jsonString);

// function add(a, b) {
//   return a + b;
// }

// var add = function(a, b) {
//   return a + b;
// }

// var add = (a, b) => {
//   return a + b;
// };

var add = (a, b) => a + b;

var result = add(100, 100);
console.log(result);









