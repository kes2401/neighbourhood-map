import React, { Component } from 'react';

class MapComponent extends Component {

	state = {
		api: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAfNMG1qC4PcRir6FrLo_WObRGG-TZkAIc',
		fSID: 'T4AXUT13TQVV3TQ4EQ4OJ111XZFE2UI0KTAK3QMEON2OBRHH',
		fSSecret: 'QU3QEHMEUQOMVN0JHKAD1ROEG3DY5B2ATVRBMQ0YNKI0YQOC',
	}

	componentDidMount = () => {
		this.loadMapScript(this.state.api)
		.then(this.initMap)
		.catch(err => {
			console.log(err);
			document.getElementById('map').textContent = 'Error loading map! Try again later.';
		});
	}

	// load Google Maps script
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

	// initialise map, add all markers for locations and add click functionality to load marker infowindows
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

		let largeInfoWindow = new window.google.maps.InfoWindow({ maxWidth: 300 });
		let bounds = new window.google.maps.LatLngBounds();
		let markersArr = [];

		this.props.locations.forEach((location) => {
			let marker = new window.google.maps.Marker({
				position: location.latlng,
				map: map,
				animation: window.google.maps.Animation.DROP,
				title: location.title,
				id: location.id
			});

			marker.addListener('click', () => {
				this.populateInfoWindow(location, marker, largeInfoWindow, map);
				this.props.animateMarker(marker);
			})

			markersArr.push(marker);
			
			bounds.extend(marker.position);
		});

		map.fitBounds(bounds);

		// update App state with map and markers objects
		this.props.onMapStart(map, markersArr);
	}

	// populate InfoWindows on marker click with data fetched from third-party API
	populateInfoWindow = (location, marker, infoWindow, map) => {
		if (infoWindow.marker !== marker) {
			infoWindow.marker = marker;
			
			let apiString = `https://api.foursquare.com/v2/venues/search?ll=${location.latlng.lat},${location.latlng.lng}&query=${location.searchTag}&client_id=${this.state.fSID}&client_secret=${this.state.fSSecret}&v=20180803`;
			
			fetch(apiString).then(res => res.json())
				.then(data => (fetch(`https://api.foursquare.com/v2/venues/${data.response.venues[0].id}?&client_id=${this.state.fSID}&client_secret=${this.state.fSSecret}&v=20180803`)
								.then(res => res.json())
								.then(data => (
									infoWindow.setContent(
										'<br><h5 tabIndex="0"><strong>' + marker.title + '</strong></h5>' +
										'<p class="location-category" tabIndex="0">' + data.response.venue.categories[0].name + '</p>' + 
										'<p class="standard-text" tabIndex="0">' + data.response.venue.location.formattedAddress[0] + ', Dublin City</p>' +
										'<div><img class="location-img" src="' + data.response.venue.bestPhoto.prefix + '180x180' + data.response.venue.bestPhoto.suffix + '" alt="' + marker.title + ' image" /></div>' +
										'<p class="standard-text" tabIndex="0">' + (data.response.venue.description ? data.response.venue.description : '') + '</p>' +
										'<p tabIndex="0">Rating: ' + data.response.venue.rating + '</p>' +
										'<a href="' + data.response.venue.shortUrl + '" target="_blank" tabIndex="0">Foursquare page</a>'
									)
				))
			)).catch(err => {
				console.log(err);
				infoWindow.setContent('<br><p class="standard-text">Sorry, could not load content from Foursquare!</p>');
			});

			infoWindow.open(map, marker);
		}
	}

	render() {

		return (
			    <main id="maincontent">
     				<a href="#creator" className="skip-link">Skip to footer information</a>
			    	<section id="map-container">
			        	<div id="map" role="application">Loading map...</div>
			      	</section>   
			    </main>
		)
	}
}

export default MapComponent;