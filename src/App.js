import React from 'react';
import './App.css';
import Characters from './components/Characters/Characters';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

if (process.env.NODE_ENV === 'development') {
	const { worker } = require('./mocks/browser');

	worker.start();
}

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out the state properties here.

	// Fetch characters from the API in an effect hook. Remember, anytime you have a side effect in a component, you want to think about which state and/or props it should sync up with, if any.

	return (
		<div className='App'>
			<Header />
			<Characters />
			<Footer />
		</div>
	);
};

export default App;
