import React from 'react';
import './Characters.css';
import LikeSection from '../LikeSection/LikeSection';
import banner from '../../assets/card-header.png';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 1rem;
`;

const Character = (props) => {
	const { character } = props;

	//console.log(props);

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={banner} />
				<Card.Body>
					<H1>{character.name}</H1>
				</Card.Body>
			</Card>
		</>
	);
};

export default Character;
