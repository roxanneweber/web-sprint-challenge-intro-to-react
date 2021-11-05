import React from 'react';
import './Characters.css';
import LikeSection from '../LikeSection/LikeSection';

const Character = () => {
	return (
		<>
			<div className='card-container'>
				<div className='card'>
					<picture className='thumbnail'>
						<img
							src='http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg'
							alt='a name here'
						/>
					</picture>
					<div className='card-content'>
						<h2>Vacation Image 01</h2>
						<p>
							TUX re-inventing the wheel, and move the needle. Feature
							creep dogpile that but diversify kpis but market-facing.
						</p>
					</div>

					<LikeSection />
				</div>
			</div>
		</>
	);
};

export default Character;
