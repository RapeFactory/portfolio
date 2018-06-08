import React, { Component } from 'react';
import './Header.css';
import Contacts from '../Contacts';
import lorem from './lorem';
const { loremla, loremru } = lorem;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      over: false
    };
  }

  mouse = () => {
    this.setState({ over: !this.state.over });
  };

  render() {
    const { over } = this.state;
    return (
      <div className="header grid" onMouseLeave={this.mouse} onMouseEnter={this.mouse}>
        <h1>Portfolio Header</h1>
        <p>{over ? loremru : loremla}</p>
        <Contacts />
      </div>
    );
  }
}

export default Header;
