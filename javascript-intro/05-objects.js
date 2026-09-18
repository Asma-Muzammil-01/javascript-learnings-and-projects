const cookie = {
    name: "Chocolate Chip",
    flavor: "Sweet",
    shape: "Round",
    //adding a function to the object   
    bake: function() {
        console.log(`Baking a ${this.name} cookie with ${this.flavor} flavor and ${this.shape} shape.`);
    }
};

//change name of object property
cookie.name = "Oatmeal Raisin";
//change flavor
cookie.flavor = "Nutty";
//change shape
cookie.shape = "Oval";
console.log(cookie); // Output: { name: "Oatmeal Raisin", flavor: "Nutty", shape: "Oval" }

//classes are a blueprint for creating objects with similar properties and methods. They provide a way to define the structure and behavior of objects in a more organized manner.
//constructors are special methods that are called when an object is created from a class. They are used to initialize the properties of the object.
class Cookie {
    constructor(name, flavor, shape) {
        this.name = name;
        this.flavor = flavor;
        this.shape = shape;
    }
}
const myCookie = new Cookie("Iced Oatmeal", "Nutty", "Round");
//funtions to call
myCookie.bake(); // Output: Baking a Iced Oatmeal cookie with Nutty flavor and Round shape.
