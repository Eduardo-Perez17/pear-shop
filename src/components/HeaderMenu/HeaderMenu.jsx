import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu = ({ navBar }) => {
	return (
		<>
			{navBar.map(item => (
				<React.Fragment key={item.name}>
					<Link to={item.path}>{item.name}</Link>
				</React.Fragment>
			))}
		</>
	);
};

export default HeaderMenu;
