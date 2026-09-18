//Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return an output (result).
function sum(a, b) {
  return a + b;
}

console.log(sum(5, 10)); // Output: 15

function product(a, b) {
  return a * b;
}

console.log(product(5, 10)); // Output: 50

//Saving the result of the product function to a variable
const bigProduct = product(100, 200);
console.log(bigProduct); // Output: 20000

//2 types of functions: Anonymous Function and Arrow Functions
//Anonymous Function have no name and are often used as arguments to other functions or assigned to variables.
setTimeout(function() {
  console.log("This is an anonymous function executed after 2 seconds");
}, 2000);

//Arrow Functions are a more concise syntax for writing functions. They are often used for short functions and callbacks.
const divide = (a, b) => {
  return a / b;
};