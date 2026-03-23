//Printing
console.log("Hello, World!");

//Variable Definition
let age: number = 20; //age variable, of type number, assigned value of 20.

//Function Definition (with "any" type parameter)
function render(document: any){ // document parameter of type any, meaning it can accept any type of value.
    console.log(document);
}

//Array Definition
let numberArray : number[] = [1, 2, 3, 4, 5]; //numberArray variable, of type array of numbers
render(numberArray);

//Array with "any" type values
let randomArray = []; //no explicit type defined, so it is of type any[] (array of any type)
randomArray.push(1);
randomArray.push("Two"); 
render(randomArray);

//Tuple Defintion
let user: [number, string] = [1, "John Doe"];

//Constants
/*
const small = 1;
const medium = 2;
const large = 3;
*/

//Enum Definition
enum Size { small = 1, medium, large }; //Enum increments values after first is set
let mySize: Size = Size.medium;
console.log(mySize); //Output: 2


//Functions
function calculateTax(income: number): number { //return type of number defined at the end of the funtion
    if (income <= 50_000)
        return income * 1.2; // {} only needed for multiple statenments, optional for single line. 
    
    return income * 1.3;
}

console.log(calculateTax(30_000)); //Output: 36000

//Objects - dymamic properties
type Employee = { //type alias for a re-usable object structure
    readonly id: number,
    name: string, 
    gender?: string //optional property, denoted by "?"
    retire: (date: Date) => void //method definition, takes a Date parameter and returns void (no return value)
}

let employee1: Employee= { id: 1, name: "Travis", retire: (date: Date) => console.log(date) };
// employee.id = 2; readonly property cannot be reassigned, will cause error

//Union Types
function kgToLbs(weight: number | string): number{
    //Narrowing
    if (typeof weight === "number"){
        return weight * 2.2;
    }

    else{
        return parseInt(weight) * 2.2; //parseInt converts string to number, then converts to pounds
    }
}

console.log(kgToLbs(10)); //Output: 22
console.log(kgToLbs("10kg")); //Output: 22

//Intersection Types
type Draggable = {
    drag: () => void //drag method
}

type Resizable = {
    resize: () => void //resize method
}

type UIWidget = Draggable & Resizable; //Intersection type
let testBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

//Literal Types (exact or specific values)
type Quantity = 50 | 100; //type alias for literal types, can only be 50 or 100
let quantity: Quantity = 100;
//quantity = 51; //errors, not assignable to type '50 | 100'

type Metric = "cm" | "inch"; //string implementation

//Nullable Types
function greet(name: string | null | undefined){  //name parameter can be string, null, or undefined
    if(name)
        console.log("Hello, " + name.toUpperCase() + "!");
    else
        console.log("Hola!");
}

greet(null); //Null will default to an error. 
greet(undefined); //Undefined will default to an error.
greet("Travis"); //Output: Hello, TRAVIS!

//Optional Chaining
type Customer = {
    birthday: Date 
}

function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date() }; 
}

let customer = getCustomer(0);
let customer1 = getCustomer(1);
//console.log(customer.birthday); //Error, customer is null
console.log(customer?.birthday); //The ?. is the optional chaining operator, it checks if customer is not null before trying to access birthday
console.log(customer1?.birthday?.getFullYear() ); //nested properties with optional chaining
