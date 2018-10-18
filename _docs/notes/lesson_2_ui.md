- [Creating Elements and JSX](#creating-elements-and-jsx)   
   * [Rendering Elements onto The Dom](#rendering-elements-onto-the-dom)
  * [Nesting](#nesting)
  * [JSX](#jsx)
  * [Components](#components)
    + [Declaring Components in React](##declaring-components-in-react)
    * [Further Research](#further-research)
- [Create React App](#create-react-app)
- [Component Composition](#component-composition)
___

# Creating Elements and JSX


## Rendering Elements onto The Dom

```
React.createElement(/* type */, /*props */, /* content */) 
```
-   `type`  – either a string or a React Component
    
    * This can be a string of any existing HTML element (e.g.  `'p'`,  `'span'`, or  `'header'`) or you could pass a React  _component_  (we'll be creating components with JSX, in just a moment).
    

-   `props`  – either  `null`  or an object
    
     * This is an object of HTML attributes and custom data about the element.
    

-   `content`  –  `null`, a string, a React Element, or a React Component 
    * Anything that you pass here will be the content of the rendered element. This can include plain text, JavaScript code, other React elements, etc.

**.createElement() Returns _ONE_ Root Element**
```
const element = React.createElement('div',null,'hello world');

ReactDom.render(
element,
document.getElementById('root')
);
```


Apps built with React typically have a single root DOM node. For example, an HTML file may contain a <div> with the following:

`<div id="root"></div>`

When creating attributes, remember that we're referencing DOM nodes.  
React Attributes: https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes

### Nesting
React elements can be nested within a parent element.  
```
const people = [
{name: 'Tyler'},
{name: 'Karen'},
{name: 'Richard'}
];

const element = React.createElement('ol',null,
    people.map((person) => (
        React.createelement('li', {key: person.name}, person.name)
        );
)
```
_When mapping an array each element needs a key prop defined.  i.e. `{key: person.name}`_

## JSX
JSX is a syntax extension that allows us to write code similar to html.  
```
const people = [
{name: 'Tyler'},
{name: 'Karen'},
{name: 'Richard'}
];

const element = 
//<ol>, <li> are jsx tags
<ol> 
//now we add our js object to map/loop the array to our <li> jsx tag
{ people.map((person) => ( //
    <li>{person.name}</li>
))}
</ol>
```

**JSX also returns _One_ main element**
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there  _must_  be a single root element wrapping your overall JSX (typically a  `<div>`  or a  `<span>`). 
Sibling elements must be wrapped in enclosing tag otherwise React returns an error.  

## Components
Components refer to _resuable_ pieces of code responsible for returning HTML to be rendered onto the page . Usually written with JSX.  
   - Can be thought of as _Factories_ used to create instances of React elements/component classes. 
- `render()` is only method _absolutely_ required in any React component class.  
- React is only concerned with the View layer of our app.
- Component classes should always follow _single responsibility principle_


### Declaring Components in React
A component is defined as a JavaScript class that inherits from `React.Component`

```
class ContactList extends React.Component {
    render() {
        //define the array const
        const people = [
            {name: 'Tyler'},
            {name: 'Karen'},
            {name: 'Richard'}
        ];
        
        //map the array & return the looped list
        return <ol>
            { people.map((person) => (
                <li>{person.name}</li>
            ))}
        </ol>;
    }
}

ReactDOM.render(
    //render the ContactList component
    <ContactList />,
    document.getElementById('root'));
```

React.Component can also be imported so the parent class alias can be used as: 
```
//import parent React.Component class
import React, {Component} from 'react'; 

//Extend the parent class alias 
class ContactList extends Component{
//...
}
```

### Further Research
https://facebook.github.io/react/docs/rendering-elements.html


# Create React App

`create-react-app` is a package developed to scaffold React applications.  Zero config install & includes:  Webpack, Babel, react, react-dom, react-scripts

`create-react-app contacts` -- Creates React scaffold project

`yarn start` or `npm start` -- Starts the built-in node server

# Component Composition
Components are building blocks of React & main unit of encapsulation.  Breaks down UI into smaller pieces.  
-  Encourages composition over inheritance
- React components are never extended more than once.  
- Instead of extending base components to add additional behavior,  we compose elements using nesting & props.  
    * Allows UI components to be independent, focused  & reusable

```
import React, { Component } from 'react';

class ContactList extends Component {
    render() {
        //define the array const, using the component props
        const people = this.props.contacts;
        
        //map the array & return the looped list
        return <ol>
            {people.map((person) => (
                <li key={person.name}>{person.name}</li>
            ))}
        </ol>
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
              {/*"contacts" prop is passed to the component allowing different arrays per component */}
                <ContactList contacts={[
                    {name: 'Tyler'},
                    {name: 'Karen'},
                    {name: 'Richard'}
                ]} />
                <ContactList contacts={[
                    {name: 'Ryan'},
                    {name: 'Jan'},
                    {name: 'Frank'}
                ]} />
            </div>
        );
    }
}

export default App;

```

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5MDY4MTQ0N119
-->