import React from "react";
import Header from "../Header/Header"

class Store extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="storePage">
        <Header />
        <h1>Store</h1>
      </div>
    );
  }
}

export default Store;
