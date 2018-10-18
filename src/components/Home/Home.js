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
      </div>
    );
  }
}

export default Home;
