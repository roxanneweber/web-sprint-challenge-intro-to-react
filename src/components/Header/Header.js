import React from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/Obi-Wan-logo.png';
import styled from 'styled-components';

const Header = () => {
	// 🔥 Make sure the parent of PostHeader is passing the right props!
	const Img = styled.img`
		width: 200px;
		align: left;
	`;
	const Div = styled.div`
		display: flex;
		align-content: center;
		background-color: #4a4eb4;
	`;

	return (
		<>
			<section>
				<Div class='footer-container'>
					<Img src={logo} />
					<SearchBar />
				</Div>
			</section>
		</>
	);
};

export default Header;
