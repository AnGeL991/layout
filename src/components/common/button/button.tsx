import { FC } from 'react';
import classNames from 'classnames';
import { ChildrenProps } from 'interface';

import './button.scss';

interface ButtonProps extends ChildrenProps {
	className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className = '' }) => {
	return <button className={classNames('button', { [className]: className })}>{children}</button>;
};
