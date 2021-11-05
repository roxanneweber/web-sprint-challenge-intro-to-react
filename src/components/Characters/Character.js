import React from 'react';
import './Characters.css';
import LikeSection from '../LikeSection/LikeSection';
import banner from '../../assets/card-header.png';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Character = (props) => {
	const { character } = props;

	console.log(props);
	return (
		<>
			<div className='card-container'>
				<Card style={{ width: '70rem' }}>
					<Card.Img variant='top' src={banner} />
					<Card.Body>
						<Card.Title>{character.name}</Card.Title>
						<Card.Text>
							Some quick example text to build on the card title and make
							up the bulk of the card's content.
						</Card.Text>
						<Button variant='primary'>Go somewhere</Button>
					</Card.Body>
					<LikeSection />
				</Card>
			</div>
		</>
	);
};

export default Character;
