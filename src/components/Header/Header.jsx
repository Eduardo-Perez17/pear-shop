import { useState } from 'react';
import { NAVBAR } from '../../utils/path';
import { MAGNIFYING_GLASS, CAR_SHOP, FAVORITE, MENU, CLOSE, PEAR } from '../../utils/image';
import './_header.scss';

import { HeaderMenu } from '../HeaderMenu';
import { Button } from '../Button';
import { Image } from '../Image';
import { Title } from '../Title';
import { Box } from '../Box';

const Header = () => {
	const [menuToggle, setMenuToggle] = useState(false);

	const menuToggleHandle = () => setMenuToggle(!menuToggle);

	return (
		<Box boxStyle='header'>
			<Box boxStyle='header__title'>
				<Image imgSrc={PEAR.img} imgAlt={PEAR.alt} />
				<Title size='lg'>Pear</Title>
			</Box>
			<Box boxStyle={!menuToggle ? 'header__menu' : 'header__menu--mobile'}>
				<Box boxStyle='header__menu--header'>
					<Button btnType='button' btnStyle='button'>
						Contact us
					</Button>
					<Image imgSrc={CLOSE.img} imgAlt={CLOSE.alt} imgClick={menuToggleHandle} />
				</Box>
				<Box boxStyle='menu'>
					<HeaderMenu navBar={NAVBAR} />
				</Box>
			</Box>
			<Box boxStyle='header__all--menu'>
				<Box boxStyle='header__icon'>
					<Image imgSrc={FAVORITE.img} imgAlt={FAVORITE.alt} />
					<Image imgSrc={CAR_SHOP.img} imgAlt={CAR_SHOP.alt} />
					<Image imgSrc={MAGNIFYING_GLASS.img} imgAlt={MAGNIFYING_GLASS.alt} />
				</Box>
				<Button btnType='button' btnStyle='button'>
					Contact us
				</Button>
				<Image
					imgSrc={MENU.img}
					imgAlt={MENU.alt}
					imgClick={menuToggleHandle}
					imgStyle='button-toggle'
				/>
			</Box>
		</Box>
	);
};

export default Header;
