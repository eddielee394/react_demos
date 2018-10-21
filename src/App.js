import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ItemsList from "./components/ItemsList";
import Item from "./components/Item";
import AddItem from "./components/AddItem";
import DeleteItem from "./components/DeleteItem";

class App extends Component {
  state = {
    items: []
  };

  //handler that checks the prev state of the items & updates the item state
  handleAddItem = item => {
    this.setState(prevState => ({
      items: [...prevState.items, item]
    }));
  };

  //Item delete handler needs to check the prev state of the items & then update it
  handleDeleteItem = event => {
    this.setState(prevState => ({
      items: this.state.items.slice(0, -1)
    }));
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
        <AddItem onAddItem={this.handleAddItem} />{" "}
        <DeleteItem
          onDeleteItem={this.handleDeleteItem}
          buttonDisabled={this.noItemsFound()}
        />
        <ItemsList
          items={this.state.items}
          callbackfn={(item, index) => <Item key={index} item={item} />}
        />
      </div>
    );
  }
}

export default App;
