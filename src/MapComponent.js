import React, { Component } from 'react';

class MapComponent extends Component {

	state = {
		api: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAfNMG1qC4PcRir6FrLo_WObRGG-TZkAIc',
		markers: []
	}

	loadMapScript = (src) => {
		return new Promise((resolve, reject) => {
		    let script = document.createElement('script');
		    script.src = src;
		    script.addEventListener('load', function() {
		    	resolve();
		    });
		    script.addEventListener('error', function(e) {
		    	reject(e);
		    });
		    document.body.appendChild(script);
		  });
	}

	initMap = () => {
		  
	 	let loc = {
			lat: 53.346296,
		    lng: -6.263308
		};

		const map = new window.google.maps.Map(document.getElementById('map'), {
		    zoom: 13.5,
		    center: loc,
		    scrollwheel: false
		});

		let largeInfoWindow = new window.google.maps.InfoWindow();
		let bounds = new window.google.maps.LatLngBounds();

		this.props.locations.forEach((location) => {
			let marker = new window.google.maps.Marker({
				position: location.latlng,
				map: map,
				animation: window.google.maps.Animation.DROP,
				title: location.title,
				id: location.id
			});

			marker.addListener('click', () => {
				this.populateInfoWindow(marker, largeInfoWindow, map);
			})

			this.setState(prevState => ({
				markers: [...prevState.markers, marker]
			}))
			
			bounds.extend(marker.position);
		});

		map.fitBounds(bounds);
		
	}

	populateInfoWindow = (marker, infoWindow, map) => {
		if (infoWindow.marker !== marker) {
			infoWindow.marker = marker;
			infoWindow.setContent('<br><div><strong>' + marker.title + '</strong></div>');
			infoWindow.open(map, marker);
		}
	}

	componentDidMount = () => {
		this.loadMapScript(this.state.api).then(this.initMap);
	}

	render() {

		return (
			    <main id="maincontent">
			    	<section id="map-container">
			        	<div id="map" role="application">Loading map...</div>
			      	</section>
			        
			    </main>
		)
	}
}

export default MapComponent;