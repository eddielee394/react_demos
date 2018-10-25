
# Functions

## Arrow Functions
Similar to regular functions except arrow functions are always expressions
Can be used as: 
- Stored as variable
- passed as an argument to a function
- stored as an object property
- affects `this` keyword depending on where the arrow function is located within the code

When stored as a variable, a single paramter **does not** require parenthesis.  Multiple parameters or no params **do** require parenthesis.  
```
//single param no parenthesis
const foo = bar => console.log(bar); 

//empty param requires parenthesis
const foo = () => console.log(bar); 

//multiple params requires parenthesis
const foo = (bar, baz) => console.log(bar,baz); 
```
### Concise and block body syntax
**Concise body syntax**:
Generally used with single expression as the function body.  
- Used when we only need to return a single expression
- has no curly braces surrounding the function body
- automatically returns the expression

```
//Concise body syntax with implicit return
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);
```

**Block body syntax**
Used with multiple expressions in the functions body.  
- Uses curly braces to wrap the function body
- uses a `return` statement 

```
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});
```

### "this" keyword
Value of `this` is based on the _functions' surrounding context_.  The value of `this` inside an arrow function is the same as the value of `this` outside the function.  

- When referencing `this` within an arrow function, always make sure it's within the correct scope.  

### Default function Parameters
Default values are assigned to the params with in the function declaration.  
```
function greet(name = 'Student') {
    return `${student}`;
}

console.log(greet())
//outputs "Student"

console.log(greet("Joe"));
//outputs "Joe"; 
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc0MzEwNTA3MSwxMzA0NDY2MDgxXX0=
-->