import React from 'react';
import './Characters.css';
import Character from './Character';
import StyledComponents from 'styled-components';

const Characters = () => {
	return (
		<main class='main-area'>
			<div class='centered'>
				<section class='cards'>
					<Character />
				</section>
				<section class='liked-section'></section>
			</div>
		</main>
	);
};

export default Characters;
