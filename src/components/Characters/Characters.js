import React from 'react';
import './css/index.css';
import Card from './Card';

const Cards = () => {
	return (
		<main class='main-area'>
			<div class='centered'>
				<h1>Here are my cards!</h1>
				<section class='cards'>
					<Card />
				</section>
			</div>
		</main>
	);
};

export default Cards;
