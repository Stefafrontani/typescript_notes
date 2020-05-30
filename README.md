# Typescript

## Intro

It does not make any performance optimizations
It only works on development.
It did not make it to the browser, production environment. Browser does not know what ts is

We write just javascript with a "TypeSystem" layer, which eventually ends up compiling (through ts compiler) to plain javascript.

In other words:

-   Writing typescript is the same as wrting just normal javascript with some "extra documentation"
-   TS has no effect on how our code gets executed in node/browser
-   TS is our pair in extreme programming

## Types

### Definition

A type is an easy way to refer to the properties and functions (methods) that a particular value has
Value, in this context, is whatever that can be assigned to a variable.
In typescript EVERY value has a type

### Types in javascript

Primitive types

-   number
-   string
-   boolean
-   null
-   undefined
-   symbol
-   void

Object types

-   arrays
-   functions
-   classes
-   objects

### Why do we use them?

Types are used by typescript to analyze our code and cath errors.
Types are useful to create documentation useful for others devs to understand our code more easily

### Examples

Working with Date object

```
const date = new Date();

/*
 * When accesing date properties, `data.` we would see the possible operations that can be done inside
 */
```

Working with classes

```
class Color {};

const color = new Color();

/*
 * The type of color variable will be Color.
 * As soon as we start typing methods on Class Color, we would be able to access them inside color too
 */
```

### When we use them?

Everywhere.
Every value inside our code, will have a type associated.

## Type Annotations VS Type Inference

Type Annotations
Code we add to tell typescript what type of value a variable will refer to.

Type Inference
Typescript by itselft will try to figure out what type of value a variable refers to

HAsta el 558

### Type Annotations

#### When to use it?

When a function returns the 'any' type and we need to clarify the value.
When we declare a variable in a line and assign value in another one.
When we want a variable to have a type that can not be inferred

### Type Inference

Every time we initialize a variable and assign a value `const name = 'stefano'`, we really are doing two steps at the same time:
Declaration : `const name;`
Initialization : `name = 'Stefano';`
When we declare a value and assign a value in the same line, typescript can infere the value of that variable.
Use always (Whenever we can).

## Any Type

Whenever we see Any Type:

-   It's just a type, such as string or number
-   Means TS has no idea of what this is, can not check for correct property references.
-   Avoid them at all cost

## Type Annotations and Inference for functions

### Type annotations

Code we add to tell TS what type of arguments a function will receive and what types of values it will return.

In a previous commit "Annotations examples", when we typed a function, we did not type the function itself but the variable that would be assign that funcion as its value.
To typed the function itself, the syntax goes
From:
`const functionDeclaration: (argument: type) => : type`
To:
`const variable = (argument: type) : type => { /_ function block code _/ }`

### Type Inference

TS will only try to figure out what type of value a function will return

## Void and Never Types

### Void

We use void in the return type of a function that never returns anything

### Never

We use never when not only a function wont return anything but alse has a 100 % chance to stop its execution

## Annotations and Destructuring

When we destructure the variables passed to a function, we should always mantain separated the arguments and its type with a color ":".
const func = ({ argumentFromObjPassedOne, argumentFromObjPassedTwo }: { argumentFromObjPassedOneType; argumentFromObjPassedTwoType }): returnType => {}

## Type Annotations for objects

See examples in /annotations/objects.ts. Has a nice multi-level-properties-object destructuring.

## Arrays

TS can help with inference when extracting values.
TS can prevent incompatible values. Do not push a number in a []string type
TS can help with .map. i.e.:autocomplete for the methods of the variable been passed to the map function

### Tuple - Is an array

ORganize a collection of records, like an array, but the collection of records inside a tuple represents instead represents different properties of THE RECORD.

An array:
const drink = { color: 'red', carbonated: true }

A tuple:
const drink = ['red', true ]

Order is crucial

Ideally, object-format is a better representation of a record because we have keys attached to it that let us read and understand what we are working with. Not happen with tuples.

## Interfaces

Cerate a new type, describing the propperty name and value types of an object.
Interfaces allow not only reference primitive values inside of interface but also functions and other more complex objects

Objects created as variables with a type interface must fullfilled the interface contract.
If the interface has 1 property, ts will only check if the object has that list of 1 property. We can add others properties and TS will not complain.

We can use a single interface to describe properties of very different objects. We we do, we can have those objects interact with different functions.

The general strategy for reusable code in TS:

-   Create functions that accept arguments that are typed with interfaces
-   Objects/Classes can decide to implement a given interface to work with a function

The general picture is: we have some functionX that implements interfaxeY. If we create objectA and objectB and want to make them work with functionX, those objects must satisfy the interfaceY

## Classes

Blueprint to create an object with some fields (values) and methods (functions) to represent a thing

### Inheritance

Same as js. class ClassName extends OtherClassname so the class ClassName inherits the methods on the OtherClassName

If no constructor function is defined inside the child class, when intantiated a childClass, it will go and look for construct function in the parent

If we define a constructor funciton inside our ChildClass, ts will complain that you must have a super call, we have to call to the constructor of the parent as well, with the specific parameters the ClassParent received.

### Class methods modifiers

1. public: This method can be called any where, any time
2. private: This method can only be called by other methods in the same class. No layer of security at all.
3. protected: This method can be called by other methods in this class, or by other methods in child classes.

Modiferies also works with values / properties of classes

## Importing modules

We can add any JS library inside our TS code
But those should have attached to them a type definition file that will have:
They are kind of adapter between ts code and js library
These files will tell TS:

-   Functions available inside the library
-   Arguments they take
-   Values they return

These types definitions files sometimes are inside the library and other times we need to install with the syntax @types/{libraryNAme} - Almost all known libraries already have these types definitions files.

These types are placed in a mega repo DefinitivelyTyped - @types

## Exports Statements

Same as js modules.
Could be:

-   Default: export default Module
    Then import as `import RandomName from './path/to/module'`
-   Non-default export Module
    Then import as `import { ExactModuleName } from './path/to/module'`

## Make TS found source of errors

./Mappable.ts
interface Mappable { name: string; age: number; }

./User.ts
class User { name: string; constructor(name) {this.name = name} }
// Improve class User:
class User implements Mappable

./index.ts
function logNameAge(elem: Mappable) { console.log(elem.name, elem.age) }

const user = new User('stefano');
logNameAge(user);

We have a function that receives an argument with type Mappable inside index.ts `function logNameAge(elem: Mappable)`. If we call that function with a user that does not meet the contract requirements by Mappable `logNameAge(user);`, TS will let you know that there is an error in the function call because USer does not have age property (missing a property)

The "problem" is that TS will never tell you that the error is in the index.ts file, wihtin the row where the funciton is called with user that does not have a certain property define inside it

Adding an implementation to that User class like `class User implements Mappable`, this time TS will point out to the exact source of the problem, the file when te class User si defined. ./User.ts as well as ./index.ts

Look at the code of the commit of previous commit.
