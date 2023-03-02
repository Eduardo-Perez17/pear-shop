import { Header } from '../Header';
import './_footer.scss';

import { Box } from '../Box';

const Footer = () => {
	return (
		<>
			<Box boxStyle='wave-main'>
				<Box boxStyle='wave wave1'></Box>
				<Box boxStyle='wave wave2'></Box>
				<Box boxStyle='wave wave3'></Box>
				<Box boxStyle='wave wave4'></Box>
			</Box>

			<Box boxStyle='footer'>
				<Header />
			</Box>
		</>
	);
};

export default Footer;
