import React, { Component } from 'react';
import logo from './logo.svg';
import CleverGirl from './clever-girl';
import NavBar from './navbar';
import LumpySpacePrincess from './lumpy-space';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <CleverGirl />
        <LumpySpacePrincess />
      </div>
    );
  }
}

export default App;
