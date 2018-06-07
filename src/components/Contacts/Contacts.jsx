import React, { Component } from 'react';
import GitHub from './GitHub.png';
import './Contacts.css';

class Contacts extends Component {
  render() {
    return (
      <div className="contacts">
        <a href="http://github.com/RapeFactory" about="GitHub">
          <img src={GitHub} alt="GitHub"/>
        </a>
      </div>
    );
  }
}

export default Contacts;
