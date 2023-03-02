import React from 'react';

const Button = ({ btnType, btnStyle, btnClick, children }) => {
	return React.createElement(
		'button',
		{ type: btnType, className: btnStyle, onClick: btnClick },
		children
	);
};

export default Button;
