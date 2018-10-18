import React from "react";
import Header from "../Header/Header"

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="galleryPage">
        <Header />
        <h1>Gallery</h1>
      </div>
    );
  }
}

export default Gallery;
