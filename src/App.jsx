import { BrowserRouter } from 'react-router-dom';
import './Layaout/index.scss';

import { RouterApp } from './RouterApp';

function App() {
	return (
		<BrowserRouter>
			<RouterApp />
		</BrowserRouter>
	);
}

export default App;
