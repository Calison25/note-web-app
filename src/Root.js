import React, { Component } from 'react';
import Login from './Authentication/Login';
import './assets/css/default.css';
import Register from "./Authentication/Register";
import Note from "./Note/Note";

class Root extends Component {
  render() {
    return (
      <div className="container">
          {/*<Login/>*/}
          {/*<Register/>*/}
          <Note/>
      </div>
    );
  }
}

export default Root;
