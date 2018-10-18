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
        <Nav />
      </header>
    );
  }
}

export default Header;