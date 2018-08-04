import React, { Component } from 'react';
import LocationItem from './Location-Item';

class Locations extends Component {

	state = {
		query: '',
	}

	updateQuery = (query) => {
		this.setState({query: query})
	}

	render() {

		return (
			<div className="location-list">
				<div className="filter-list">
					<input type="text" className="filter-input" value={this.state.query} onChange={(event) => (
						this.updateQuery(event.target.value),
						this.props.onUpdateQuery(event.target.value)
					)} placeholder="Search location..."/>
				</div>
				<div className="list-results">
					<ul className="listing">
						{this.props.locations.map((location) => (
							<LocationItem key={location.id} locationName={location.title} />
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Locations;