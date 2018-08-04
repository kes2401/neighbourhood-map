import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import MapComponent from './MapComponent';
import Footer from './Footer';

class App extends Component {

  state = {

    showListPane: false,

    locations: [
      { id: 1, title: 'DiFontaine\'s Pizza', latlng: { lat: 53.345182, lng: -6.267791 }, searchTag: 'fontaine'},
      { id: 2, title: 'Leo Burdock\'s', latlng: { lat: 53.343004, lng: -6.270026 }, searchTag: 'burdock'},
      { id: 3, title: 'O\'Neill\'s Bar & Restaurant', latlng: { lat: 53.343905, lng: -6.260761}, searchTag: 'neill'},
      { id: 4, title: 'Tower Records', latlng: { lat: 53.342240, lng: -6.257754}, searchTag: 'tower'},
      { id: 5, title: 'Vicar Street', latlng: { lat: 53.342607, lng: -6.277983}, searchTag: 'vicar'},
      { id: 6, title: 'P Macs', latlng: { lat: 53.341208, lng: -6.264237}, searchTag: 'macs'},
      { id: 7, title: 'The Stag\'s Head', latlng: { lat: 53.343823, lng: -6.263659}, searchTag: 'stag'},
      { id: 8, title: 'Whelan\'s', latlng: { lat: 53.336580, lng: -6.265715}, searchTag: 'whelan'},
      { id: 9, title: 'Hodges Figgis', latlng: { lat: 53.342171, lng: -6.258186}, searchTag: 'figgis'},
      { id: 10, title: 'Aran Sweater Market', latlng: { lat: 53.343939, lng: -6.259364}, searchTag: 'sweater'},
      { id: 11, title: 'Science Gallery', latlng: { lat: 53.344125, lng: -6.250295}, searchTag: 'science'},
      { id: 12, title: 'Zizzi', latlng: { lat: 53.343476, lng: -6.260308}, searchTag: 'zizzi'},
      { id: 13, title: 'St Stephen\'s Green', latlng: { lat: 53.336898, lng: -6.259765}, searchTag: 'stephen'},
      { id: 14, title: 'Cowtown Cafe', latlng: { lat: 53.352355, lng: -6.284246}, searchTag: 'cowtown'},
      { id: 15, title: 'Iveagh Gardens', latlng: { lat: 53.335138, lng: -6.261034}, searchTag: 'iveagh'},
      { id: 16, title: 'Dublin Zoo', latlng: { lat: 53.353270, lng: -6.304371}, searchTag: 'zoo'},
      { id: 17, title: 'Phoenix Park', latlng: { lat: 53.357404, lng: -6.319303}, searchTag: 'phoenix'}
    ],

    currentLocations: []

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
          <h1 className="main-header-text">Great Places of Dublin</h1>
        </header>
        { this.state.showListPane ? <Locations locations={this.state.locations} /> : null}
        <MapComponent locations={this.state.locations} />
        <Footer />
      </div>
    );
  }
}

export default App;