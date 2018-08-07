import React from 'react';

const locationItem = (props) => {

	return (

		<li className="list-item" tabIndex="0" onKeyDown={event => {
			if (event.key === 'Enter') {
				props.onLocationSelect(event.target.textContent);
			}
		}} role="button">
			<p className="list-item-text" onClick={event => props.onLocationSelect(event.target.textContent)} >{props.locationName}</p>
		</li>
	)
}

export default locationItem;