import { Button } from '../Button';

const BtnContactUs = ({ children }) => {
	return (
		<Button btnType='button' btnStyle='button button__other--style'>
			{children}
		</Button>
	);
};

export default BtnContactUs;
