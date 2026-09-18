//while loops are used to repeat a block of code as long as a specified condition is true
let password = "secret";
let userGuess = "";

while (userGuess !== password) {
    //code to be executed
    userGuess = prompt("Enter the password: ");
}

alert("Access granted!");

//not the usual way to use a while loop, but it works


//do while loops are similar to while loops, but the code block will always execute at least once, even if the condition is false
//5 * 4 * 3 * 2 * 1
let factorial = 1;
let number = 5;
do {
    factorial = factorial * number;
    number--;
} while (number > 0);

console.log(factorial); //120
