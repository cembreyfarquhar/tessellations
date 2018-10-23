import React from "react";
import Header from "../Header/Header"

class Jewelry extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="jewelryPage">
        <Header />
        <h1>Jewelry</h1>
      </div>
    );
  }
}

export default Jewelry;
