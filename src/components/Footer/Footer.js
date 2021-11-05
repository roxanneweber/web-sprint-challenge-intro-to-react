import React from 'react';
import './Footer.css';
import SearchBar from '../SearchBar/SearchBar';
import logo from '../../assets/Obi-Wan-logo.png';
import styled from 'styled-components';

const Footer = () => {
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
			<Div class='footer-container'>
				<section>
					<Img src={logo} />
				</section>
			</Div>
		</>
	);
};

export default Footer;
