import React, { Component } from 'react';
import logo from './logo.svg';
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
          <div className="SectionSkills" />
          <div className="SectionProjects" />
          <div className="SectionContact" />
        </div>
      </div>
    );
  }
}

export default App;
