import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Art from "./components/Art/Art";
import Clothing from "./components/Clothing/Clothing";
import Jewelry from "./components/Jewelry/Jewelry";
import Crafts from "./components/Crafts/Crafts";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Route exact path="/" render={props => <Home />} />
        <Route exact path="/art" render={props => <Art {...props} />} />
        <Route exact path="/clothing" render={props => <Clothing {...props} />} />
        <Route exact path="/jewelry" render={props => <Jewelry {...props} />} />
        <Route exact path="/crafts" render={props => <Crafts {...props} />} />
      </div>
    );
  }
}

export default App;
