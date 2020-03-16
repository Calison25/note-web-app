import React, { Component } from 'react';
import Login from './Authentication/Login';
import './assets/css/default.css';
import Register from "./Authentication/Register";
import Dashboard from "./Note/container/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";


class Root extends Component {
  render() {
    return (
      <div>
          {/*<Login/>*/}
          {/*<Register/>*/}
          <Dashboard/>
          {/*<ModalNote/>*/}
      </div>
    );
  }
}

export default Root;
