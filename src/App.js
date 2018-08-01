import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import MapComponent from './MapComponent';


class App extends Component {

  state = {

    showListPane: true,

    locations: [
      { title: 'DiFontaine\'s Pizza', location: { lat: 53.345182, lng: -6.267791 }},
      { title: 'Leo Burdock\'s', location: { lat: 53.343004, lng: -6.270026 }},
      { title: 'O\'Neill\'s Bar & Restaurant', location: { lat: 53.343905, lng: -6.260761}},
      { title: 'Tower Records', location: { lat: 53.342240, lng: -6.257754}},
      { title: 'Vicar Street', location: { lat: 53.342607, lng: -6.277983}},
      { title: 'P Macs', location: { lat: 53.341208, lng: -6.264237}},
      { title: 'The Stag\'s Head', location: { lat: 53.343823, lng: -6.263659}},
      { title: 'Whelan\'s', location: { lat: 53.336580, lng: -6.265715}},
      { title: 'Hodges Figgis', location: { lat: 53.342171, lng: -6.258186}},
      { title: 'Aran Sweater Market', location: { lat: 53.343939, lng: -6.259364}},
      { title: 'Science Gallery', location: { lat: 53.344125, lng: -6.250295}},
      { title: 'Zizzi', location: { lat: 53.343476, lng: -6.260308}},
      { title: 'St Stephen\'s Green', location: { lat: 53.336898, lng: -6.259765}},
      { title: 'Cowtown Cafe', location: { lat: 53.352355, lng: -6.284246}},
      { title: 'Iveagh Gardens', location: { lat: 53.335138, lng: -6.261034}},
      { title: 'Dublin Zoo', location: { lat: 53.353270, lng: -6.304371}},
      { title: 'Phoenix Park', location: { lat: 53.357404, lng: -6.319303}}
    ]

  }


  toggleListPane = () => {
    this.state.showListPane ? this.setState({ showListPane: false }) : this.setState({ showListPane: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hamburger-icon" onClick={this.toggleListPane}>
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
          </div>
          <h1 className="main-header-text">Great Places in Dublin</h1>
        </header>
        { this.state.showListPane ? <Locations /> : null}
        <MapComponent />
      </div>
    );
  }
}

export default App;
