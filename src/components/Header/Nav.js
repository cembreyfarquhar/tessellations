import React from "react";
import "./styles.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      home: {
        clicked: false,
        class: ""
      },
      art: {
        clicked: false,
        class: ""
      },
      clothing: {
        clicked: false,
        class: ""
      },
      jewelry: {
        clicked: false,
        class: ""
      },
      crafts: {
        clicked: false,
        class: ""
      }
    };
    this.expandArt = this.expandArt.bind(this);
    this.expandClothing = this.expandClothing.bind(this);
    this.expandJewelry = this.expandJewelry.bind(this);
    this.expandCrafts = this.expandCrafts.bind(this);
  }

  expandArt() {
    this.setState({
      clothing: {
        clicked: false,
        class: ""
      },
      jewelry: {
        clicked: false,
        class: ""
      },
      crafts: {
        clicked: false,
        class: ""
      }
    });
    if (this.state.art.clicked === false) {
      this.setState({
        art: {
          clicked: true,
          class: "expanded"
        }
      });
    } else {
      this.setState({
        art: {
          clicked: false,
          class: ""
        }
      });
    }
  }

  expandClothing() {
    this.setState({
      art: {
        clicked: false,
        class: ""
      },
      jewelry: {
        clicked: false,
        class: ""
      },
      crafts: {
        clicked: false,
        class: ""
      }
    });
    if (this.state.clothing.clicked === false) {
      this.setState({
        clothing: {
          clicked: true,
          class: "expanded"
        }
      });
    } else {
      this.setState({
        clothing: {
          clicked: false,
          class: ""
        }
      });
    }
  }

  expandJewelry() {
    this.setState({
      clothing: {
        clicked: false,
        class: ""
      },
      art: {
        clicked: false,
        class: ""
      },
      crafts: {
        clicked: false,
        class: ""
      }
    });
    if (this.state.jewelry.clicked === false) {
      this.setState({
        jewelry: {
          clicked: true,
          class: "expanded"
        }
      });
    } else {
      this.setState({
        jewelry: {
          clicked: false,
          class: ""
        }
      });
    }
  }

  expandCrafts() {
    this.setState({
      clothing: {
        clicked: false,
        class: ""
      },
      jewelry: {
        clicked: false,
        class: ""
      },
      art: {
        clicked: false,
        class: ""
      }
    });
    if (this.state.crafts.clicked === false) {
      this.setState({
        crafts: {
          clicked: true,
          class: "expanded"
        }
      });
    } else {
      this.setState({
        crafts: {
          clicked: false,
          class: ""
        }
      });
    }
  }

  render() {
    return (
      <div className="navigation">
        <nav className="nav">
          <span>home</span>
          <span onClick={this.expandArt}>art</span>
          <span onClick={this.expandClothing}>clothing</span>
          <span onClick={this.expandJewelry}>jewelry</span>
          <span onClick={this.expandCrafts}>crafts</span>
        </nav>
        <div className={`artExpanded ${this.state.art.class}`}>
          <h2>Art stuff</h2>
        </div>
        <div className={`clothingExpanded ${this.state.clothing.class}`}>
          <h2>clothes</h2>
        </div>
        <div className={`jewelryExpanded ${this.state.jewelry.class}`}>
          <h2>Jewels</h2>
        </div>
        <div className={`craftsExpanded ${this.state.crafts.class}`}>
          <h2>Crafts :)</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
