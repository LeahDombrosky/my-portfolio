import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import ShoppingBag from 'react-icons/lib/fa/shopping-bag';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main-container">
          <section id="about">
            <div className="SectionAbout">
              <Navbar />
              <div className="Introduction">
                <p id="Name">LEAH DOMBROVSKY</p>
                <p id="Occupation">Web Developer</p>
                <p class="boxe1">
                  {' '}
                  -Radiologyst from Azerbaijan<br />
                  -RPG Programmer<br />
                  -My new passion and hopefully new career is Web Design<br />
                  LET'S JORNEY BEGIN!!!
                </p>
              </div>
            </div>
          </section>
          <section id="skills">
            <div className="SectionSkills">
              <div className="Skills">
                <p id="Skills">SKILLS</p>
                <div className="Row1">
                  <div className="Javascript">
                    <img
                      src="http://www.seas.upenn.edu/~cis197/images/logo.png"
                      alt="Javascript"
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="React">
                    <img
                      src="https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
                      alt="React"
                    />
                    <p>React</p>
                  </div>
                  <div className="Angular">
                    <img
                      src="https://user-images.githubusercontent.com/5389035/27643779-a108039c-5c3f-11e7-83fe-2f57fba40887.png"
                      alt="Angular"
                    />
                    <p>Angular</p>
                  </div>
                  <div className="HTML">
                    <img
                      src="http://gfx06.radified.com/gfx1/html5_logo.png"
                      alt="HTML"
                    />
                    <p>HTML</p>
                  </div>
                </div>
                <div className="Row2">
                  <div className="CSS">
                    <img
                      src="https://n6-img-fp.akamaized.net/free-icon/css-file-format-with-brackets_318-45223.jpg?size=338&ext=jpg"
                      alt="CSS"
                    />
                    <p>CSS</p>
                  </div>
                  <div className="NodeJS">
                    <img
                      src="https://www.shareicon.net/download/2016/06/19/603824_nodejs_512x512.png"
                      alt="NodeJS"
                    />
                    <p>NodeJS</p>
                  </div>
                  <div className="SQL">
                    <img
                      src="https://mennodevries.net/wp-content/uploads/2014/09/20140925-SQL.png"
                      alt="SQL"
                    />
                    <p>SQL</p>
                  </div>
                  <div className="GitHub">
                    <img
                      src="https://image.flaticon.com/icons/svg/25/25231.svg"
                      alt="GitHub"
                    />
                    <p>GitHub</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="projects">
            <div className="SectionProjects">
              <p id="Projects">PROJECTS</p>
              <div className="Projects">
                <div className="LegantStore" />

                <div className="Groupii" />
              </div>
              <div className="Projects2">
                <h1 id="header1">
                  <a href="https://leah-elegant-store-spchmbivkx.now.sh/">
                    Live Site
                  </a>
                </h1>
                <h1 id="header2">
                  <a href="http://www.groupii.fun/">Live Site</a>
                </h1>
              </div>
            </div>
          </section>
          <section id="contact">
            <div className="SectionContact">
              <div className="Contact">
                <p id="Contact">CONTACT ME</p>
                {/* <h1>Let's Get In Touch!</h1> */}
                <div classname="email">
                  <a href="mailto:leahliya59@gmail.com">
                    <i class="fa fa-envelope fa-4x mb-4" aria-hidden="true" />
                  </a>
                  <h1>Email</h1>
                </div>

                <div classname="linkedin">
                  <a href="https://www.linkedin.com/in/leah-dombrovsky-1a0346/">
                    <i
                      class="fa fa-linkedin-square fa-4x mb-4"
                      aria-hidden="true"
                    />
                  </a>
                  <h1>LinkedIn</h1>
                </div>

                <div classname="github">
                  <a href="https://github.com/LeahDombrosky">
                    <i class="fa fa-github-alt fa-4x mb-4" aria-hidden="true" />
                  </a>
                  <h1>Github</h1>
                </div>

                <div className="phone">
                  <i class="fa fa-phone fa-2x mb-2" aria-hidden="true" />
                  <span>214-641-7480</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
