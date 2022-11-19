import { FC } from 'react';
import { NavLink } from 'components/common';
import './nav.scss';

const NavList = ['about', 'service', 'work', 'blog', 'contact'];

export const Nav: FC = () => {
	const menu = NavList.map((item, index) => <NavLink key={index}>{item}</NavLink>);

	return (
		<nav className="nav">
			<ul className="nav--list">{menu}</ul>
		</nav>
	);
};
