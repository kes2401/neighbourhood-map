import React, { Component } from 'react';
import './App.css';
import Locations from './Locations';
import MapComponent from './MapComponent';
import Footer from './Footer';

class App extends Component {

  state = {

    showListPane: false,

    // Default hardcoded locations
    initLocations: [
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

    // currentLocations state array will hold currently filtered locations, starting with full initial location list by default
    currentLocations:  [
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

    query: '',

    map: {},

    markers: []

  }

  updateQuery = (query) => {

    if (query === '') {
      this.setState({currentLocations: this.state.initLocations});
      this.state.markers.forEach(marker => {
        marker.setMap(this.state.map);
      });
    }

    this.setState({query: query})

    // filter locations search and set currentLocations state to current filter results
    let res = this.state.initLocations.filter(location => (
      location.title.toLowerCase().includes(query.toLowerCase())
    ));
    this.setState({currentLocations: res});
    this.updateMapMarkers(res);
  }

  updateMapState = (map, markers) => {
    this.setState({ map: map, markers: markers })
  }

  updateMapMarkers = (currentLocations) => {

    // Set map markers active according to current locations
    // temporarily remove all markers
    let allMarkers = this.state.markers;

    allMarkers.forEach(marker => {
      marker.setMap(null);
    });

    // for each current location add marker to the map
    currentLocations.forEach(location => {
      for (let i = 0; i < allMarkers.length; i++) {
        if (allMarkers[i].title === location.title) {
          allMarkers[i].setMap(this.state.map);
        }
      }
    });

    this.setState({markers: allMarkers});
  }

  // functionlity for when a location list item is clicked
  selectFromList = (placeName) => {
    this.triggerMarker(placeName);
  }

  // trigger the marker on the map as if it had been clicked
  triggerMarker = (locationName) => {
    let targetMarker;
    this.state.markers.forEach(marker => {
      if (marker.title === locationName) {
        targetMarker = marker;
      }
    });
    new window.google.maps.event.trigger(targetMarker, 'click');

    this.bounceMarker(targetMarker);
  }

  // function to animate a marker
  bounceMarker = (marker) => {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(window.google.maps.Animation.BOUNCE);
      window.setTimeout(() => {marker.setAnimation(null)}, 300);
    }
  }

  // toggle location list component visibility
  toggleListPane = () => {
    this.state.showListPane ? this.setState({ showListPane: false }) : this.setState({ showListPane: true });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="hamburger-icon" onClick={this.toggleListPane} onKeyDown={event => {
            if (event.key === 'Enter') {
              this.toggleListPane();
            }}} tabIndex="0" role="button">
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
            <div className="hamburger-menu-button"></div>
          </div>
          <h1 className="main-header-text" tabIndex="0" >Great Places of Dublin</h1>
        </header>
        { this.state.showListPane ? <Locations locations={this.state.currentLocations} onUpdateQuery={this.updateQuery} onListSelection={this.selectFromList} /> : null}
        <MapComponent locations={this.state.currentLocations} onMapStart={this.updateMapState} animateMarker={this.bounceMarker} />
        <Footer />
      </div>
    );
  }
}

export default App;