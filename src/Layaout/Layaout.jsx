import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';
// import { Footer } from '../components/Footer';
import { Box } from '../components/Box';

const Layaout = () => {
	return (
		<>
			<Box boxStyle='grid-father'>
				<Box boxStyle='grid-son'>
					<Header />
					<Outlet />
				</Box>
			</Box>

			{/* <Footer /> */}
		</>
	);
};

export default Layaout;
