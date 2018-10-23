import React from "react";
import Header from "../Header/Header";
import "./styles.css";
// import mosaic from "./img/mosaic.jpg";
// import starwars from "./img/starwars.jpg"

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="homePage">
        <Header />
        <div className="container">
          <div className="titleCard">
            <h1>Tessellations</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
