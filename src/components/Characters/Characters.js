import React from 'react';
import './Characters.css';
import Character from './Character';

const Characters = (props) => {
	console.log(props);
	const { characters } = props;
	return (
		<main class='main-area'>
			<div class='centered'>
				<section class='cards'>
					{characters.map((character) => (
						<Character character={character} key={character.name} />
					))}
				</section>
				<section class='liked-section'></section>
			</div>
		</main>
	);
};

export default Characters;
