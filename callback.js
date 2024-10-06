 /* function callback() {
  console.log("Now adding is successfully completed.");
}

const add = (a, b, callback) => {
  var result = a + b;
  console.log('Result : ', result); // main function wrok completed
  callback();
};

var result = add(100, 100, callback);
 */


const add = function(a, b, callback) {
    var result = a + b;
    console.log('Result : ', result); // main function wrok completed
    callback();
}

add (10, 100, function() {
    console.log("Now adding is successfully completed.");
});


add (10, 10, () => {
    console.log("Now adding is successfully completed.");
});