import React from 'react';

const Image = ({ imgSrc, imgStyle, imgAlt, imgClick }) => {
	return React.createElement('img', {
		src: imgSrc,
		alt: imgAlt,
		className: imgStyle,
		onClick: imgClick,
	});
};

export default Image;
