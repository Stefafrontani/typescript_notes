/* Variables */
// Primitives
let applesAnnotation: number = 5;
let applesInfered = 5; // Typescript can infer the type from the value assign in the same line the variable is declared.

let speed: string = "fast";
let hasName: boolean = false;
let nothingMuch: null = null;
let nothing: undefined = undefined;

/* Ojbect Literal annotations */

// Built-in Objects
let now: Date = new Date();

// Arrays
let colors: string[] = ["red", "green", "blue"]; // Defined an array with only strings in it
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// Classes
class Car {}
let car: Car = new Car();

// Objects literal
let point: { x: number; y: number } = { x: 10, y: 25 };

// Functions
const logNumber: (i: number) => void = (i) => {
    console.log(i);
};

// When to use annotations
//
// 1) When using a function that returns an any type
// i.e.: JSON.parse()
// JSON.parse('false') // Output: boolean
// JSON.parse('4') // Output: number
// JSON.parse('{ name: 'stefano '}') // Output: { name: string }
// JSON.parse('{ age: 'stefano '}') // Output: { age: number }

// JSON.parse() can return different values depending of what string you use to call the funciton with (boolean, string, object, etc)
// This is the reason why typescript does not know te type of the value return by that function and either can inferred it and associate an "any" type to the return value of JSON.parse()
//
const coordinatesInferredWithAny = JSON.parse("{ x: number, y: number }");

//
// In the case mention aboved, we should give a type to the variable used to store the return value by the JSON.parse() function.
//
const coordinatesAnnotation: { x: number; y: number } = JSON.parse(
    "{ x: number, y: number }"
);

// 2) When we declare a variable in one line and initialize it later.
let words = ["red", "green", "blue"];
// let foundWord; // Bad -- Type: any
let foundWord: boolean; // Good -- Type annotation

for (let word of words) {
    if (word === "green") {
        foundWord = true;
    }
}

// 3) When we declare a variable and it can take more than 1 types.
let numbers = [-12, -3, 10];
// let numberAboveZero = false // Bad -- inferred as boolean, but it can be a number also
let numberAboveZero: boolean | number; // Good -- Type every case scenario

for (let number of numbers) {
    if (number > 0) {
        numberAboveZero = number;
    }
}
