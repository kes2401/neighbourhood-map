import React from 'react';

const locationItem = (props) => {

	return (

		<li className="list-item" >
			<p className="list-item-text" onClick={event => props.onLocationSelect(event.target.textContent)} >{props.locationName}</p>">
		</li>
	)
}

export default locationItem;