import { ChangeEvent, FC } from 'react';
import classNames from 'classnames';
import './input.scss';

interface InputProps {
	placeHolder: string;
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
}

export const Input: FC<InputProps> = ({ placeHolder, className = '', value, onChange }) => {
	return <input value={value} onChange={onChange} placeholder={placeHolder} className={classNames('input', { [className]: className })} />;
};
