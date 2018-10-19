import React from "react";
import Header from "../Header/Header";
import "./styles.css";
import mosaic from "./img/mosaic.jpg";
import starwars from "./img/starwars.jpg"

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
          <h2>Custom Mosaics</h2>
          <div className="mosaics-banner">
          <img src={mosaic} alt="custom mosaics" />
          <img src={starwars} alt="custom mosaics" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
