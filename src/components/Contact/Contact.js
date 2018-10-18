import React from "react";
import Header from "../Header/Header";


class Contact extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="contactPage">
        <Header />
        <h2>Contact</h2>
      </div>
    );
  }
}

export default Contact;