// In here we are typying the function itself and the add variable is being inferred
// Arguments: We never get inference for function arguments so they must always be placed there.
// Return Value: TS can figure out the return value. It has a return statement of two numbers. Ok, it retuns a number

// const add = (a: number, b: number): number => { // Good -- but note that number is infered by TS
// return a + b;
// };

// It also works as expected.
const add = (a: number, b: number) => {
    return a + b;
};
// The negative example:
// TS will think this function will return nothing so it will inffere void type to that return value. Wrong. This was an code typo
const substract = (a: number, b: number) => {
    a - b;
};
