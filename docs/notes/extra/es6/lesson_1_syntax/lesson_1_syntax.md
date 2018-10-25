# ES6 Syntax

## Let and Const

Variables declared with `let` and `const` are in the block scope, instead of globally or locally. This eliminates the issue of [_Hoisting_](https://medium.com/javascript-in-plain-english/https-medium-com-javascript-in-plain-english-what-is-hoisting-in-javascript-a63c1b2267a1) that occurs when using `var`. 

- prevents variables from being accessed only until after they’ve been declared.
 
```
//Written function using var
function getClothing(isCold) {
  if (isCold) {
    var freezing = 'Grab a jacket!';
  } else {
    var hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

//Hoisted function using var after being interpreted by the browser
function getClothing(isCold) {
var freezing, hot;
  if (isCold) {
    freezing = 'Grab a jacket!';
  } else {
    hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}

//Written function using let/const
function getClothing(isCold) {
  if (isCold) {
    // freezing only accessible in this block
    const freezing = 'Grab a jacket!';
  } else {
    //hot only accessible in this block
    const hot = 'It’s a shorts kind of day.';
    console.log(freezing);
  }
}
```
### Rules
-   Variables declared with  `let`  can be reassigned, but can’t be redeclared in the same scope.
-   Variables declared with  `const`  must be assigned an initial value, but can’t be redeclared in the same scope, and can’t be reassigned. 

### Use Cases
-   use  `let`  when you plan to reassign new values to a variable, and
-   use  `const`  when you don’t plan on reassigning new values to a variable.

## Template Literals
**Template literals**  are essentially string literals that include embedded expressions.

Denoted with backticks (`` ` ` ``) instead of single quotes (  `''`  ) or double quotes (  `""`  ), template literals can contain placeholders which are represented using  `${expression}`. This makes it  _much easier_  to build strings.

```
let message = `${foo.bar} foo bar baz ${foo.baz} bal foo ban.`  
```
- No need for concatenation, `+` quotes or newline characters.  
- Can reference object's properties, perform operations, call functions and use loops

## Destructuring
Extract data from arrays and objects into distinct variables using _Destructuring_.  
Elements you want to extract are specified on the left side of an assignment.  

```
//set foo to an array
const foo = [10, 25, -34];

//destructure the foo array
const [x, y, z] = foo; 

//Outputs 10 25 -34
console.log(x, y, z);

//skip an element in the array
const[x,,z] = foo;

//Outputs 10 -34
console.log(x,z)
```

**Important**
When destructuring an object, functions assigned to variables within that object will no longer have access to `this`
_Example_: 
```
const foo = {
    bar: 10
    baz: function() {
        //uses this to reference bar property
        return this.bar;
    }
}
//destructure baz from foo object
let {baz} = foo;

//will return NaN
console.log(baz());
```

## Object Literal Shorthand
### Var Declarations
If object properties have the same name as variables being assigned, you don't have to  declare the variable name as the value for the object property.  

### Method Declarations
Methods can also be implicitly declared by dropping the `function` keyword. 

```
//initil variable declarations have same name as object properties
let type = 'foo'; 
let color = 'bar'; 
let carat = 'baz'; 

//explicitly declaring the variables and method
let gemstone = {
   type = type, 
   color = color,
   carat = carat,
   calculateWorth: function() {
    ..// do stuff
  }
};

//implicitly declaring the variables instead
let gemstone = {
   type,
   color,
   carat,
   calculateWorth() {
   ..// do stuff
   }
}
```

## Iteration
The iterable protocol allows _JavaScript_ objects to _define_ or customize their iteration behavior, such as what values are looped over in a for loop. 
* `i` in a for loop stands for _iterator_
* Object data types are not iterable, by default


### For Loops
Applicable to iterable data types: 
- String
- Array
- Map
- Set

**Cons of using each loop type**
- for loop
  *  keeping track of the counter & exit condition
- for...in loop
  *  doesn't need count & exist condition
  *  still needs to keep track of the index
  *  loops over all enumerable properties, so if additional properties are added to the array - it will also appear in the loop.
  * Not good for arrays
- forEach loop
  * Only can be used with an array.
  *  No way to stop or break 

### for...of loop
- Used to loop of any iterable data type. 
- Written like a `for...in` loop, without the index.  
```
const digits = [1,2,3,4,5]
for(const digit of digits) {
    console.log(digit); 
}

//Output
1,
2,
3,
4,
5
```
**Benefits**
- Can stop/break using `continue`
- Adding new properties doesn't affect it, since it only loops over values in an object. 

## Spread... Operator
Expands iterable objects in to multiple elements
- Written as:  `...`
- Useful when combining arrays

```
//basic spread operator usage
const foo = [1,2,3,4,5];
const bar = [6,7,8,9,10]
//Single array - outputs 1 2 3 4 5
console.log(...foo);

//Concatenating multiple arrays - outputs 1 2 3 4 5 6 7 8 9 10
console.log(...foo,...bar);

```

## Rest Parameter
Represents an indefinite number of elements in an array.  
- Written as:  `...` 
- Useful when assigning values of an array to variables

```
const order = [1,2,3,"foo","bar","baz"]

//destructure the array grab the first 3 elements and assign them to the price, subtotal & total variables.  Then iterate of the rest of the elements in the array using rest and assign to items variable as a new array. 
const [price,subtotal,total,...items] = order; 

//Outputs:  1 2 3 ["foo","bar","baz"]
console.log(price,subtotal,total,items); 
```

### Variadic Functions
**Variadic functions** are functions that take an indefinite number of arguments.
```
function sum(...numbers) {
    let total = 0; 
    for(const number of numbers) {
        total += number;
    }
    return total; 
}

//add 1 + 5 + 9
console.log(sum(1,5,9));
//Output: 15
```

### Import/Exports (Modules)
Inside of a js file we can import content from other files so the parent file is aware of it's dependencies. 

- Default Export
     * Imports default and _Only_ export of the file name in the receiving file can be changed. 
     * Always defaults to the class.   Name doesn't matter
 - Named export
   * Refers to an explicit name defined in the module. 
   * Requires braces around component name

```
//Default export
../person.js
const person = foo => console.log(bar)

export default person; 

//Named export
../utility.js
export const foo = () => bar; 

../App.js
import prs from './person.js'
import { foo } from './utility.js'
```
<!--stackedit_data:
eyJoaXN0b3J5IjpbNTM2ODUxMjMyLC0xMDM1MTg1MzldfQ==
-->