import React from "react";
import "./styles.css"
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render(){
      return(
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/store">Store</Link>
            <Link to="/contact">Contact</Link>
          </nav>
      )
  }
}

export default Nav;