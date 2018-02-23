import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Nav-bar">
        <div className="Symbol-holder" />
        <div className="Nav-holder">
          <ul>
            <Link to="/skills">
              <li>SKILLS</li>
            </Link>
            <Link to="/projects">
              <li>PROJECTS</li>
            </Link>
            <Link to="/contact">
              <li>CONTACT ME</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
