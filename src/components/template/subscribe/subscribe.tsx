import { FC, useState, ChangeEvent } from 'react';
import { Button, Input } from 'components/common';
import './subscribe.scss';

export const Subscribe: FC = () => {
	const [value, setValue] = useState('');

	const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className="subscribe">
			<Input placeHolder="Your Email" value={value} onChange={handleChangeValue} /> <Button className="subscribe__button">Subscribe</Button>
		</div>
	);
};
