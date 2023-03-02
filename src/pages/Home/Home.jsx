import { useState, useEffect } from 'react';
import { VIDEO, PEAR_LOGO } from '../../utils/image';
import DATA from '../../../DATA';

import './_home.scss';

import { BtnContactUs } from '../../components/BtnContactUs';
import { Paragraph } from '../../components/Paragraph';
import { Title } from '../../components/Title';
import { Box } from '../../components/Box';
import { Image } from '../../components/Image';

const Home = () => {
	const [shoesHeader, setShoesHeader] = useState([]);
	const data = DATA?.slice(-1);

	useEffect(() => {
		data.map(element => setShoesHeader(element));
	}, [data]);

	return (
		<Box boxStyle='header-article home'>
			<Box boxStyle='header-article-logo-father'>
				<Image imgSrc={PEAR_LOGO.img} imgAlt={PEAR_LOGO.alt} imgStyle='header-article-logo' />
			</Box>
			<Box boxStyle='header__article--content--father'>
				<Box boxStyle='header__article--content'>
					<Title size='xl'>days cant start without perfect shoes</Title>
					<Paragraph>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore
					</Paragraph>
					<Box boxStyle='header__article--button'>
						<BtnContactUs>contact us</BtnContactUs>
						<BtnContactUs>
							<Image imgSrc={VIDEO.img} imgAlt={VIDEO.alt} />
							watch video
						</BtnContactUs>
					</Box>
				</Box>
				<Box boxStyle='header__article--img'>
					<Image imgSrc={shoesHeader.image} />
					<Box boxStyle='header__article--img-card'>
						<Title size='sm'>{shoesHeader.name}</Title>
						<Paragraph>Get up to 30% off</Paragraph>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
