import React from "react";
import Header from "../Header/Header";
import "./styles.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <Header />
        <h2 id="grad1">Tessellations</h2>
      </div>
    );
  }
}

export default Home;
