import React from 'react';
import './Characters.css';
import LikeSection from '../LikeSection/LikeSection';
import banner from '../../assets/card-header.png';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const H1 = styled.h1`
	font-size: 1rem;
	height: 60px;
	background-color: #4a4eb4;
	color: white;
	text-align: center;
	vertical-align: center;
`;

const Section = styled.section`
	text-align: left;
`;

const Character = (props) => {
	const { character } = props;

	//console.log(props);

	return (
		<>
			<Card style={{ width: '18rem' }}>
				<Card.Img src={banner} alt='Card image' />
				<Card.ImgOverlay>
					<Card.Title>{character.name}</Card.Title>
				</Card.ImgOverlay>
				<Card.Body>
					<Card.Title>Details:</Card.Title>
					<Card.Text>
						<p>
							<strong>Birth Year:</strong> {character.birth_year}
							<br />
							<strong>Gender:</strong> {character.gender}
							<br />
							<strong>Skin Color:</strong> {character.skin_color}
							<br />
							<strong>Hair Color:</strong> {character.hair_color}
							<br />
							<strong>Eye Color:</strong> {character.eye_color}
						</p>
					</Card.Text>

					<Card.Title>Character Films</Card.Title>
					<Section>
						<ul>
							<li>{character.films[0]}</li>
							<li>{character.films[1]}</li>
							<li>{character.films[2]}</li>
							<li>{character.films[3]}</li>
						</ul>
					</Section>
				</Card.Body>
			</Card>
		</>
	);
};

export default Character;
