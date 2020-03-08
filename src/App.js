import React, { Component } from 'react';
import Login from './Authentication/Login';
import './assets/css/default.css';

class App extends Component {
  render() {
    return (
      <div className="container">
          <Login/>
      </div>
    );
  }
}

export default App;
