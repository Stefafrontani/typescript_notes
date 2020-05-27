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
