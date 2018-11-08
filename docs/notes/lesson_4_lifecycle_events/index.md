# Introduction

`render()` is for rendering only.  It should not: 
- make any http requests
- fetch data used to display the content
- alter the DOM
- call any functions that do any of these things

Code that handles things like Ajax requests should be placed in `lifecycle events`.  

## Lifecycle Events
Default methods that are automatically bound to the component instance and React will call these methods naturally at certain times during the life of a component. 

**Commonly used lifecycle events**
_Mounting_
- `componentDidMount()`
  * invoked immediately _after_ the component is _inserted_ into the DOM.  
- `componentWillUnmount()`
  * invoked immediately _before_ a component is _ removed_ from the DOM
- `getDerivedStateFromProps()`
  * invoked after a component is instantiated as well as when it receives brand new props.

###- `componentDidMount()` 
Can be used when using an ajax request.  

```
componentDidMount() {

//make ajax request using the fetchUpdate()`
  * invoked immediately _after_ updating occurs.  Not called for the initial render.   Userd ajax method
fetchUser().then(

//now we upds an opportunity to operate on the state of the user object from our ajax request
    user => this.setState({
        name: user.name
    })
)
}

render() {
    return (
        <div>
            <p>name:  {this.stae.name}</p>
        </div>
        
    )
}
``` 
DOM when the component has been updated.  


<!--stackedit_data:
eyJoaXN0b3J5IjpbMjEyNDYxNTE2MSwtMTYwNzc1NzY4MiwtMT
ExNDY5ODYwN119
-->