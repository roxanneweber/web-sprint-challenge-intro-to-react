import React from 'react';
import './Characters.css';
import LikeSection from '../LikeSection/LikeSection';
import banner from '../../assets/card-header.png';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 1rem;
	height: 30px;
	background-color: #4a4eb4;
	color: white;
	text-align: center;
	vertical-align: center;
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
					<h3>Details:</h3>
					<h4>Birth Year: {character.birth_year}</h4>
					<h4>Gender: {character.gender}</h4>
					<h4>
						<a href={character.homeworld}>Home World</a>
					</h4>
					<h3>Character Films</h3>
					<ul>
						<li>{character.films[0]}</li>
						<li>{character.films[1]}</li>
						<li>{character.films[2]}</li>
						<li>{character.films[3]}</li>
					</ul>
				</Card.Body>
			</Card>
		</>
	);
};

export default Character;
