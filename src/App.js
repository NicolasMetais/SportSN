import React, { Component } from 'react';
import './App.css';
import Navigateur from './Nav.js';
import EnormousLogo from './logo.js'

class App extends Component {
  render() {
    return (
      <header>
        <EnormousLogo></EnormousLogo>
        <Navigateur></Navigateur>
      </header>
    );
  }
}

export default App;
