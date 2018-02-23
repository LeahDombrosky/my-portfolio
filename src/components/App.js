import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <div className="Main-container">
          <div className="SectionAbout">
            <div className="Introduction">
              <p id="Name">LEAH DOMBROVSKY</p>
              <p id="Occupation">Web Developer</p>
            </div>
          </div>
          <div className="SectionSkills">
            <div className="Skills">
              <p id="Skills">SKILLS</p>
              <div className="Row">
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
              </div>
            </div>
          </div>
          <div className="SectionProjects">
            <div className="Projects">
              <p id="Projects">PROJECTS</p>
            </div>
          </div>
          <div className="SectionContact">
            <div className="Contact">
              <p id="Contact">CONTACT</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
