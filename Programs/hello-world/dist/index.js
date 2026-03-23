"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Printing
console.log("Hello, World!");
//Variable Definition
let age = 20; //age variable, of type number, assigned value of 20.
//Function Definition (with "any" type parameter)
function render(document) {
    console.log(document);
}
//Array Definition
let numberArray = [1, 2, 3, 4, 5]; //numberArray variable, of type array of numbers
render(numberArray);
//Array with "any" type values
let randomArray = []; //no explicit type defined, so it is of type any[] (array of any type)
randomArray.push(1);
randomArray.push("Two");
render(randomArray);
//Tuple Defintion
let user = [1, "John Doe"];
//Constants
/*
const small = 1;
const medium = 2;
const large = 3;
*/
//Enum Definition
var Size;
(function (Size) {
    Size[Size["small"] = 1] = "small";
    Size[Size["medium"] = 2] = "medium";
    Size[Size["large"] = 3] = "large";
})(Size || (Size = {}));
; //Enum increments values after first is set
let mySize = Size.medium;
console.log(mySize); //Output: 2
//Functions
function calculateTax(income) {
    if (income <= 50_000)
        return income * 1.2; // {} only needed for multiple statenments, optional for single line. 
    return income * 1.3;
}
console.log(calculateTax(30_000)); //Output: 36000
let employee1 = { id: 1, name: "Travis", retire: (date) => console.log(date) };
// employee.id = 2; readonly property cannot be reassigned, will cause error
//Union Types
function kgToLbs(weight) {
    //Narrowing
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    else {
        return parseInt(weight) * 2.2; //parseInt converts string to number, then converts to pounds
    }
}
console.log(kgToLbs(10)); //Output: 22
console.log(kgToLbs("10kg")); //Output: 22
let testBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
//Nullable Types
function greet(name) {
    if (name)
        console.log("Hello, " + name.toUpperCase() + "!");
    else
        console.log("Hola!");
}
greet(null); //Null will default to an error. 
greet(undefined); //Undefined will default to an error.
greet("Travis"); //Output: Hello, TRAVIS!
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
let customer1 = getCustomer(1);
//console.log(customer.birthday); //Error, customer is null
console.log(customer?.birthday); //The ?. is the optional chaining operator, it checks if customer is not null before trying to access birthday
console.log(customer1?.birthday?.getFullYear()); //nested properties with optional chaining
