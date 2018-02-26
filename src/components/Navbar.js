import React, { Component } from 'react';
import './Navbar.css';
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
            <a class="nav-link js-scroll-trigger" href="#skills">
              <li>SKILLS</li>
            </a>
            <a class="nav-link js-scroll-trigger" href="#projects">
              <li>PROJECTS</li>
            </a>
            <a class="nav-link js-scroll-trigger" href="#contact">
              <li>CONTACT ME</li>
            </a>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
