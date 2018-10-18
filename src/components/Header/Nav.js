import React from "react";
import "./styles.css";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      navItems: [
        {
          name: "home",
          clicked: false,
          classes: "home"
        },
        {
          name: "art",
          clicked: false,
          classes: "artExpanded"
        },
        {
          name: "clothing",
          clicked: false,
          classes: "clothingExpanded"
        },
        {
          name: "jewelry",
          clicked: false,
          classes: "jewelryExpanded"
        },
        {
          name: "crafts",
          clicked: false,
          classes: "craftsExpanded"
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.expandNav = this.expandNav.bind(this);
    this.getClasses = this.getClasses.bind(this);
  }

  handleClick(ev) {
    this.setState({
      navItems: this.state.navItems.map(item => {
        return (item.clicked = false);
      })
    });
    const clickedText = ev.target.innerText;
    const navItem = this.state.navItems.filter(item => {
      return item.name === clickedText;
    });
    const unclickedItems = this.state.navItems.filter(item => {
      return item.name !== clickedText;
    });
    this.state.navItems.forEach(item => {
      this.getClasses(item.name);
    })
    navItem[0].clicked = true;
    this.setState({
      navItems: [...unclickedItems, navItem[0]]
    });
  }

  expandNav() {
  
  }

  getClasses(navItem) {
    this.state.navItems.forEach(item => {
      if(item.name === navItem && item.clicked === true) {
        console.log(item)
        item.classes = `${item.classes} expanded`
      }
    })    
  }

  render() {
    return (
      <div className="navigation">
        <nav className="nav">
          <span onMouseOver={this.handleClick}>home</span>
          <span onClick={this.handleClick}>art</span>
          <span onClick={this.handleClick}>clothing</span>
          <span onClick={this.handleClick}>jewelry</span>
          <span onClick={this.handleClick}>crafts</span>
        </nav>
        <div className={this.state.navItems[1].classes}>
          <h2>Art stuff :)</h2>
        </div>
      </div>
    );
  }
}

export default Nav;
