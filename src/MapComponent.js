import React, { Component } from 'react';

class MapComponent extends Component {

	state = {
		api: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAfNMG1qC4PcRir6FrLo_WObRGG-TZkAIc'
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

		this.props.locations.forEach((location) => {
			let marker = new window.google.maps.Marker({
				position: location.latlng,
				map: map,
				animation: window.google.maps.Animation.DROP,
				title: location.title
			});
			// this.placeMarker(location);
		});

		
	}

	// placeMarker = (location) => {
	// 	let marker = new window.google.maps.Marker({
	// 		position: location.latlng,
	// 		map: this.map,
	// 		title: location.title
	// 	});
	// }

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

//<script async defer src={`https://maps.googleapis.com/maps/api/js?key=${this.state.apiKey}&callback=${this.initMap}`} type="text/javascript"></script>