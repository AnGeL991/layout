import { FC, useState, useEffect } from 'react';
import { NavLink } from 'components/common';
import { ReactComponent as Bars } from 'assets/menu-bars.svg';
import classNames from 'classnames';
import './nav.scss';

const NavList = ['about', 'service', 'work', 'blog', 'contact'];

export const Nav: FC = () => {
	const menu = NavList.map((item, index) => <NavLink key={index}>{item}</NavLink>);

	const [mobile, setMobile] = useState(false);
	const [open, setOpen] = useState(false);

	const handleSetOpen = (): void => {
		setOpen((prev) => !prev);
	};

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setMobile(true);
		} else {
			setMobile(false);
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize, false);
		if (window.innerWidth < 768) {
			setMobile(true);
		}
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (mobile) {
		return (
			<div className="mobileNav--wrapper">
				<div className="mobileNav--button">
					<Bars className="mobileNav--icon" onClick={handleSetOpen} />
				</div>
				<div className={classNames('mobileNav--popup', { 'mobileNav--open': open })}>
					<nav className="mobileNav">
						<ul className="mobileNav--list">{menu}</ul>
					</nav>
				</div>
			</div>
		);
	}

	return (
		<nav className="nav">
			<ul className="nav--list">{menu}</ul>
		</nav>
	);
};
