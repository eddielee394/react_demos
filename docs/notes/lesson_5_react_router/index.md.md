# React Router

React Router is a collection of navigational components that compose declaratively with your application.

```
npm install --save react-router-dom

```

## Default Components
### BrowserRouter
 renders a `Router` component and passes a `history` prop that listens to changes in the url and makes sure the app is made aware of those changes. 

 ### Link
Provides declarative, accessible navigation around your application. By passing a  `to`  property to the  `Link`  component, you tell your app which path to route to.
- Used in place of `<a>` tags 
- Accepts a strings and objects
- Behaves the same as a normal link

```
//to prop with string
<Link to="/about">About</Link>

//to prop with object
<Link to={{
    pathname: '/courses',
    search: '?sort=name',
    hash: '#the-hash',
    state: { fromDashboard: true }
}}>
About
</Link>
```
### Route

Determines which components are rendered based on the current URL path. 
- use the `render` property to pass props to your component. 
- use the `component` property if your component has no props.  
- use `path` to define the url path
- use `exact path` to explicitly match the url path

```
//Renders the list component if the path is '/'.  Or will render the 'CreateContact' component if the path is '/create'
<Route  
  exact  
 path="/"  
  render={() => (  
    <ListContacts  
  contacts={this.state.contacts}  
      onDeleteContact={this.removeContact}  
    />  
  )}  
/>  
<Route path="/create" component={CreateContact} /> 
```


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE5NDI1MDk1NjldfQ==
-->