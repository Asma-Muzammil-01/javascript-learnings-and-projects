//loops help repeat code multiple times without having to write it out each time
//for loop is used to repeat a block of code a specific number of times
const names = ["John", "Jane", "Jack", "Jill"]; 

for (let i = 0; i < names.length; i++) {
    console.log(names[i]); //0, 1, 2, 3
}

const numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i] * 2); //2, 4, 6, 8, 10
}
