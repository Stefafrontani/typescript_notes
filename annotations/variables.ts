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
