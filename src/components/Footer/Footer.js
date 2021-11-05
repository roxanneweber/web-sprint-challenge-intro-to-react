import React from 'react';
import './Footer.css';
import SearchBar from '../SearchBar/SearchBar';

const Footer = () => {
	// 🔥 Make sure the parent of PostHeader is passing the right props!

	return (
		<>
			<div class='footer-container'>
				<section class='footer-logo'>
					<h3>Footer logo here</h3>
				</section>
			</div>
			<div class='search-bar-container'>
				<section className='search-bar'>
					<SearchBar />
					<h2>the search will go here</h2>
				</section>
			</div>
		</>
	);
};

export default Footer;
