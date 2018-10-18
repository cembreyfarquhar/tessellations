import React from "react";
import "./styles.css";
import Nav from "./Nav";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <header className="header">
        <h1 id="grad1">Tessellations</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;