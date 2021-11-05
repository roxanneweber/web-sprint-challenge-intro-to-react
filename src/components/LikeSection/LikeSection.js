import React from 'react';
import Like from './Like';
import './LikeSection.css';

const LikesSection = () => {
	return (
		<div className='like-section'>
			<div className='social'>
				<Like />
			</div>
			<div className='social'></div>
			<div className='social'></div>
		</div>
	);
};

export default LikesSection;
