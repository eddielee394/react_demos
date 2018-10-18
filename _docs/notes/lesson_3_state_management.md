- [Component Data & Props](#component-data-and-props)   
   * [Further Research](#further-research)
       + [test](#test)
    * [test](#test)
- [Functional Components](#functional-components)
___

# Component Data and Props

Any attributes added to a component is accessible on the props object from inside that component.  

```
//app.js
import React, { Component } from 'react';
import ListContacts from './ListContacts'

const contacts = [
    {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
    },
    {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
    },
    {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
    }
];

class App extends Component {
    render() {
        return (
            <div>
                <ListContacts contacts={contacts} />
            </div>
        );
    }
}
//ListContacts.jsx
class ListContacts extends Component {
    render() {
        console.log('Props', this.props);
        return (
            <ol className={'contact-list'}>
            </ol>
        );
    }
}
```

Props can be passed to a component by adding the prop name and value:  
`<Clock currentTime={new Date().getTime()} />`
Where `currentTime` is the prop and `{new Date().getTime()}` is the value. 

All props are stored in the `this.props` object. To access the value from inside the component we'd use:  
`this.props.currentTime`

**[Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)**
Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. They were called "template strings" in prior editions of the ES2015 specification. 

Template literals are enclosed by back-ticks instead of double/single quotes. 

### Further Research
https://facebook.github.io/react/docs/components-and-props.html

# Stateless Functional Components

If your component does not keep track of internal state & only contains a `render()` method, than a regular javascript function can be used to generate the component: 

_Class Based Component_
```
class User extends Component {
    render() {
       return (
          <p>Username: {this.props.username} </p>
       )
    }
}
```

_Stateless Functional Component_
```
//using a regular js function
function User(props) {
    return (
        <p>Username:  {props.username}</p>
    )
}

//ES6 function with an implicit return
 const Email = (props) => (
 <div>
   {props.text}
 </div>
);
```
## Props
In functional components, props are not accessed using the `this` keyword.  Instead props are passed as an argument to the function.  
```
function User(props){
    //..do something
}
```
## Binding Events

The bind keyword isn't necessary for a stateless component.  Removing the class eliminates the need for calling `bind()` to pass the `this` context.  
```
//Component Class onClick bind
onClick={this.sayHi.bind(this)}>Say Hi</a>

//Stateless Component without bind
onClick={sayHi}>Say Hi</a>
```
## Benefits of Stateless Functional Components
- No Class needed
- No `this` keyword
- Helps enforce best practices
  * SFC are useful for _presentational components focused on UI rather than behavior_ 
- High Signal-to-Noise ratio
  * Allows easier to read & fewer lines of code especially with [ES6 destructuring](https://wesbos.com/destructuring-objects/)
- Improved code completion
  * When using destructuring, data is now specified in a simple argument allowing for better code IDE completion.  
- Better code smell
  * When using destructuring the argument list clearly conveys component dependencies, thus easier to spot components that can be refactored into separate components.
- Easy to test
  * Assertions are much more straightforward:  _Given these values for props, I expect it to return this markup_

## Further Reading
https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/


# Component State
A components state represents mutable data that ultimately affects what is rendered on the page.   State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

Two primary concerns with Reactjs:  
- What is the state of my application?
- How does the UI change based on that state? 

```
class User extends Component {
    state = {
        username: 'Tyler'
    }
    render() {
        return (
            <p>Username: {this.state.username}</p>
        )
    }
}
```

By having a component manage its own state, any time there are changes made to that state, React will know and _automatically_ make the necessary updates to the page.

React compares the previous output and new output, determines what has changed, and makes these decisions of what should be rendered for us. This process of determining what has changed in the previous and new outputs is called `Reconciliation`.

**Class Fields**
When an object is directly inside of a class & not in a constructor method it's considered a _Class Field_

```
class User extends React.Component {
//Class field
 state = {
   username: 'Tyler'
 } 
}
```

**Props in Initial State**
When defining a component's initial state, avoid initializing that state with `props`. This is an error-prone _anti-pattern_, since state will only be initialized with `props` when the component is first created.
```
this.state = {
 user: props.user
}
```
If props are ever updated, the current state will not change unless the component is "refreshed".  Using props to produce a components initial states leads to duplication of data, removing our _Single Source of Truth_

## Further Research
https://facebook.github.io/react/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live


# Update State with setState()
You cannot update a components state directly, as React won't know the state has been updated.  Instead, use the `setState()` helper method.  
Two ways to use `setState()`: 
1. Passing a function
 -  Typically used when the new state depends on the previous state of the component. 
```
//function is passed the prevState as the 1st argument
this.setState((prevState) => ({
    //the object returned will be merged with the current state to form the new state
    count: prevState.count + 1; 
}))
```
2. Passing an Object
- Used in most instances where component doesn't rely on previous state. 
```
//object is passed to the setState method
this.setState({
   //object returned will be merged with the current object to form the new state
   username: 'Tyler'
})
```

When `setState()` is invoked, UI will be updated.  Component will call the `render()` method.  

## Further Research
-   [Using State Correctly](https://facebook.github.io/react/docs/state-and-lifecycle.html)  from the React Docs
-   [Build with React](http://buildwithreact.com/tutorial/state)'s article on State


<!--stackedit_data:
eyJoaXN0b3J5IjpbMTY5NTA5NDAzNCwtNTY5Njk0MzMxLC0xMD
g5NDA0MDMsMjY2OTQyNjg4LC0xOTAwMjU5NzcwLC0zMTQ5Njg5
NTNdfQ==
-->