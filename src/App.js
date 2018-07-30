import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import MapComponent from './MapComponent';


class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hamburger-icon">
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
          </div>
          <h1 className="main-header-text">Neighbourhood Map</h1>
        </header>
        <Locations />
        <MapComponent />
      </div>
    );
  }
}

export default App;
