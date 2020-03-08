import React, { Component } from 'react';
import Login from './Authentication/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
          <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/litera/bootstrap.min.css"
              type="text/css"
          />
        <Login/>
      </div>
    );
  }
}

export default App;
