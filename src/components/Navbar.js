import React, { Component } from 'react';
import './Navbar.css';
import { SocialIcon } from 'react-social-icons';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Nav-bar">
        <div className="Nav-holder">
          {/* <div className="Symbol-holder" /> */}
          <div className="Social-container">
            {/* <div className="Social-icon"> */}
            <SocialIcon url="https://www.google.com/" />
            {/* <div className="Social-icon"> */}
            <SocialIcon url="https://www.facebook.com/" />
            {/* <div className="Social-icon"> */}
            <SocialIcon url="https://twitter.com/" />
            {/* <div className="Social-icon"> */}
            <SocialIcon url="http://www.linkedin.com/" />
          </div>
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
