import React from "react";
import Header from "../Header/Header";

class Crafts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="craftsPage">
        <Header />
        <h2>Crafts</h2>
      </div>
    );
  }
}


export default Crafts;