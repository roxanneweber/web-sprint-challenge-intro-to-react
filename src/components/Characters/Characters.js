import React from 'react';
import './Characters.css';
import Character from './Character';

const Characters = () => {
	return (
		<main class='main-area'>
			<div class='centered'>
				<h1>Here are my individual characters!</h1>
				<section class='cards'>
					<Character />
				</section>
			</div>
		</main>
	);
};

export default Characters;
