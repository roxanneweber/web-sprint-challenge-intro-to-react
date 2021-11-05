import React from 'react';
import './SearchBar.css';
import Twitter from './Twitter';
import Facebook from './Facebook';

const SearchBar = () => {
	return (
		<>
			<div className='search-bar-wrapper'>
				<div className='search-bar-container'>
					<form className='search-form'>
						<input type='text' placeholder='Search' />
					</form>
				</div>
				<div className='social-wrapper'>
					<div className='social'>
						<Twitter />
					</div>
					<div className='social'>
						<Facebook />
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
