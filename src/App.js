import React, { useState, useEffect } from 'react';
import './App.css';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
	const { worker } = require('./mocks/browser');

	worker.start();
}

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out the state properties here.
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		axios
			.get(
				'https://api.nasa.gov/planetary/apod?api_key=Rz30JyD2a2ysf2lhBMAwC9RgnPpsq0Jliv0jScXG'
			)
			.then((res) => {
				//console.log(res.data);
				setCharacters(res.data);
			})
			.catch((err) => console.error(err));
	}, []);

	// Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

	return (
		<div className='App'>
			<Header />
			<Characters characters={characters} />
			<Footer />
		</div>
	);
};

export default App;
