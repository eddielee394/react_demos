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

### Further Research
https://facebook.github.io/react/docs/components-and-props.html

# Functional Components

If the class only contains a `render()` method, than a regular javascript function can be used to generate the component: 

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

_Functional Component_
```
function User(props) {
    return (
        <p>Username:  {props.username}</p>
    )
}
```
In functional components, props are not accessed using the `this` keyword.  Instead props are passed as an argument to the function.  
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTMxNDk2ODk1M119
-->