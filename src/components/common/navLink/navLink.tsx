import { FC } from 'react';
import { ChildrenProps } from 'interface';
import './navLink.scss';

export const NavLink: FC<ChildrenProps> = ({ children }) => {
	return (
		<li className="navLink">
			<a href="/">{children}</a>
		</li>
	);
};
