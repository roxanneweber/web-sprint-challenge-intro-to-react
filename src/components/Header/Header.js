import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

const Header = () => {
	// 🔥 Make sure the parent of PostHeader is passing the right props!

	return (
		<>
			<div class='header-container'>
				<section class='logo'>
					<h1 className='Header'>The Obi-Wan Report</h1>
					<h2>Which is your favorite character?</h2>
				</section>

				<section className='search-bar'>
					<SearchBar />
				</section>
			</div>
		</>
	);
};

export default Header;
