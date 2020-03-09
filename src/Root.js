import React, { Component } from 'react';
import Login from './Authentication/Login';
import './assets/css/default.css';
import Register from "./Authentication/Register";
import Dashboard from "./Note/container/Dashboard";

class Root extends Component {
  render() {
    return (
      <div>
          {/*<Login/>*/}
          {/*<Register/>*/}
          <Dashboard/>
      </div>
    );
  }
}

export default Root;
