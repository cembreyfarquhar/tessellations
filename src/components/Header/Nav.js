import React from "react";
import "./styles.css";
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  constructor() {
    super();
    this.state={}
  }

  render() {
    return (
      <div className="navigation">
        <nav className="nav">
          <Link to='/'>home</Link>
          <Link to='/art'>art</Link>
          <Link to='/clothing'>clothing</Link>
          <Link to='/jewelry'>jewelry</Link>
          <Link to='/crafts'>crafts</Link>
        </nav>
      </div>
    );
  }
}

export default Nav;
