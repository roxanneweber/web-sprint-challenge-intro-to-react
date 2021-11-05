import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Cards from './components/Cards';

if (process.env.NODE_ENV === 'development') {
	const { worker } = require('./mocks/browser');

	worker.start();
}

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

	return (
		<div className='App'>
			<h1 className='Header'>The Obi-Wan Report</h1>
			<Cards />
		</div>
	);
};

export default App;
