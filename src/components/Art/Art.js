import React from "react";
import Header from "../Header/Header"

class Art extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="artPage">
        <Header />
        <h1>Art</h1>
      </div>
    );
  }
}

export default Art;
