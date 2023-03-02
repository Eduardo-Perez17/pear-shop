import { Routes, Route } from 'react-router-dom';
import { HOME, ABOUT, TESTIMONY, SHOP } from '../utils/path';

import { Testimony } from '../pages/Testimony';
import { About } from '../pages/About';
import { Shop } from '../pages/Shop';
import { Home } from '../pages/Home';
import { Layaout } from '../Layaout';

const RouterApp = () => {
	return (
		<Routes>
			<Route path={HOME.path} element={<Layaout />}>
				<Route path={HOME.path} element={<Home />} />
				<Route path={TESTIMONY.path} element={<Testimony />} />
				<Route path={ABOUT.path} element={<About />} />
				<Route path={SHOP.path} element={<Shop />} />
			</Route>
		</Routes>
	);
};

export default RouterApp;
