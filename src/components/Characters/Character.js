import React from 'react';
import './css/index.css';

const Card = () => {
	return (
		<>
			<article class='card'>
				<a href='#'>
					<picture class='thumbnail'>
						<img src='http://www.abbeyjfitzgerald.com/wp-content/uploads/2017/02/image-example-01.jpg' />
					</picture>
					<div className='card-content'>
						<h2>Vacation Image 01</h2>
						<p>
							TUX re-inventing the wheel, and move the needle. Feature
							creep dogpile that but diversify kpis but market-facing.
						</p>
					</div>
				</a>
			</article>
		</>
	);
};

export default Card;
