// Primitive types inside arrays

// When assigning value, no need for type annotation
const carMakersInferred = ["ford", "chevy", "toyota"];
// Need to put type annotation when creating and not assigning any value. Otherwise will be of "any" type
const carMakersAnnotation: string[] = [];

// More complex types inside arrays
const dates = [new Date(), new Date()];
const carsByMake = [["f150"], ["corolla"], ["camaro"]]; // Type string[][] - no need to anontate this as we are initializing the array of arrays

// TS can help with inference when extracting values.
const car = carMakersInferred[0]; // TS inferre car to be a string

// TS preventing incompatible values
// carMakersInferred.push(5) // Bad -- TS prevent it
carMakersInferred.push("5"); // Good

// Help with map
carMakersInferred.map((car: string): string => {
    return car; // TS give us all methods when trying to acces methods in that variable '.'
});

// Arrays can be have flexible types
// const importantDates = [new Date()];
// importantDates.push('1993-26-09') // Bad - Not date type

const importantDates: (Date | string)[] = []; // Equal inferred : const importantDates = [new Date(), '1993-26-09'] - Good
importantDates.push("1993-26-09"); // Good - We can do this now

// Tuple
// const drink = { color: 'red', carbonated: true } // As an object
const drinkArray = ["red", true]; // As a tuple - BUt it does not prevent changing order or adding and removing elements

const drinkTuple: [string, boolean] = ["red", true]; // Good - drinkTuple now will be consistent with types orders

// Better - Type alias
type Drink = [string, boolean];

const coca: Drink = ["red", true];
const sprite: Drink = ["green", true];
