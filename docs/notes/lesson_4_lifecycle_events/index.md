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
- `componentDidMount()`
  * invoked immediately _after_ the component is _inserted_ into the DOM.  
- `componentWillUnmount()`
  * invoked immediately _before_ a component is _ removed_ from the DOM
- `getDerivedStateFromProps()`
  * invoked after a component is instantiated as well as when it receives brand new props.

### `componentDidMount()` 
Can be used when using an ajax request.  

```
componentDidMount() {

//make ajax request using the fetchUser ajax method
fetchUser().then(

//now we update the state of the user object from our ajax request
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



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE2MDc3NTc2ODIsLTExMTQ2OTg2MDddfQ
==
-->