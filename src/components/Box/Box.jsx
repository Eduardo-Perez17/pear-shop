import React from 'react';

const Box = ({ children, boxStyle, boxClick }) => {
	return React.createElement('div', { className: boxStyle, onClick: boxClick }, children);
};

export default Box;
