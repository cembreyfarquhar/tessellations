import React from "react";
import Header from "../Header/Header";


class Clothing extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="clothingPage">
        <Header />
        <h2>Contact</h2>
      </div>
    );
  }
}

export default Clothing;