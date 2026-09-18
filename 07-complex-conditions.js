const car = { 
    price: 20000,
    color: "blue",
    type: "benz"
}

if (car.color === "red" || car.type === "sedan") {
    console.log("The car is a red sedan");

    // and operator (&&) is used to check if both conditions are true. In this case, it checks if the carColor is "red" and the carType is "sedan". If both conditions are true, it will execute the code inside the if block.
    // or operator (||) is used to check if at least one of the conditions is true. In this case, it checks if the carColor is "red" or the carType is "sedan". If at least one of the conditions is true, it will execute the code inside the if block.
} else if (car.color === "blue" && car.type === "benz") {
    console.log("The car is a blue benz");
}   