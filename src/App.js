import React, { Component } from 'react';
import './App.css';
import moment from "moment";

// Component import
import Clock from "./Components/Clock";

class App extends Component {
  render() {
    return (
      <div className="main">
        <Clock />
      </div>
    );
  }
}

export default App;
