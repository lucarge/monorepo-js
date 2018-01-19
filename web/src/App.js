import React, { Component } from 'react';
import store from 'model/store'
import { getNow } from 'utils/dates'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Store imported from <code>model/store</code>: {JSON.stringify(store.getState())}
        </p>
        <p className="App-intro">
          Util <code>getNow</code> imported from <code>utils/dates</code>: {getNow().toString()}
        </p>
      </div>
    );
  }
}

export default App;
