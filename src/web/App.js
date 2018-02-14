import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {add} from 'shared/math';
import {reverseString} from 'web/webDep';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          result of calling add(2, 2): {add(2, 2)}
        </p>
        <p className="App-intro">
          reversed string: {reverseString('i am reversed')}
        </p>
      </div>
    );
  }
}

export default App;
