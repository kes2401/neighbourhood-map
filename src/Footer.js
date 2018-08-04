import React from 'react';
import foursquareLogo from './powered-by-foursquare-white.png';

const Book = (props) => {

	return (
		<div>
			<footer className='footer'>
				<p className='footer-text'><span className='footer-text space-right'>Built by Keith Scully</span>  |  <span><img src={foursquareLogo} className='foursquare' alt='"Powered by Foursquare" logo' /></span></p>
			</footer>
		</div>
	)
} 

export default Book;