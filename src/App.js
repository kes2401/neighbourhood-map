import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import MapComponent from './MapComponent';

// ---YELP CREDENTIALS---
// Client ID
// 1x1PdOAt4vxaaIwpN5F6KA
// API Key
// Rx22JB6aX57cw9GBdDgSZoKUIaWfP6QqsFvZ_XN7PMz06TvnriVuS3Io80ia5dS990mF50OWpYmYKW3xFHyzkYUxGGUPyooGvWPpYgK4PsdbDjI5LnyC7vS4PB5iW3Yx

class App extends Component {

  state = {

    showListPane: true,

    locations: [
      { id: 1, title: 'DiFontaine\'s Pizza', latlng: { lat: 53.345182, lng: -6.267791 }},
      { id: 2, title: 'Leo Burdock\'s', latlng: { lat: 53.343004, lng: -6.270026 }},
      { id: 3, title: 'O\'Neill\'s Bar & Restaurant', latlng: { lat: 53.343905, lng: -6.260761}},
      { id: 4, title: 'Tower Records', latlng: { lat: 53.342240, lng: -6.257754}},
      { id: 5, title: 'Vicar Street', latlng: { lat: 53.342607, lng: -6.277983}},
      { id: 6, title: 'P Macs', latlng: { lat: 53.341208, lng: -6.264237}},
      { id: 7, title: 'The Stag\'s Head', latlng: { lat: 53.343823, lng: -6.263659}},
      { id: 8, title: 'Whelan\'s', latlng: { lat: 53.336580, lng: -6.265715}},
      { id: 9, title: 'Hodges Figgis', latlng: { lat: 53.342171, lng: -6.258186}},
      { id: 10, title: 'Aran Sweater Market', latlng: { lat: 53.343939, lng: -6.259364}},
      { id: 11, title: 'Science Gallery', latlng: { lat: 53.344125, lng: -6.250295}},
      { id: 12, title: 'Zizzi', latlng: { lat: 53.343476, lng: -6.260308}},
      { id: 13, title: 'St Stephen\'s Green', latlng: { lat: 53.336898, lng: -6.259765}},
      { id: 14, title: 'Cowtown Cafe', latlng: { lat: 53.352355, lng: -6.284246}},
      { id: 15, title: 'Iveagh Gardens', latlng: { lat: 53.335138, lng: -6.261034}},
      { id: 16, title: 'Dublin Zoo', latlng: { lat: 53.353270, lng: -6.304371}},
      { id: 17, title: 'Phoenix Park', latlng: { lat: 53.357404, lng: -6.319303}}
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
          <h1 className="main-header-text">Gems of Dublin</h1>
        </header>
        { this.state.showListPane ? <Locations locations={this.state.locations} /> : null}
        <MapComponent locations={this.state.locations} />
      </div>
    );
  }
}

export default App;
