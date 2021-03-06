import React from 'react';
import foursquareLogo from './powered-by-foursquare-white.png';

const Book = (props) => {

	return (
		<div>
			<footer className='footer'>
				<p className='footer-text'><span className='footer-text space-right' tabIndex='0' id='creator'>Built by Keith Scully</span> | <span><a href="https://foursquare.com/" target="_blank" rel="noopener noreferrer"><img src={foursquareLogo} className='foursquare' alt='"Powered by Foursquare" logo' /></a></span></p>
			</footer>
		</div>
	)
} 

export default Book;