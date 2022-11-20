import { FC } from 'react';
import { Nav } from 'components/template';
import { Logo, Button } from 'components/common';
import Eagle from 'assets/eagle.png';
import { ReactComponent as Search } from 'assets/search.svg';
import { ReactComponent as ShoppingCard } from 'assets/shopping-card.svg';
import './banner.scss';

export const Banner: FC = () => {
	return (
		<article className="banner">
			<img src={Eagle} className="banner--image" alt="eagle banner" />
			<div className="banner--gradient" />
			<header className="banner--header">
				<Logo />
				<div className="banner--header-right">
					<Nav />
					<span className="banner--item">
						<ShoppingCard className="banner--icon" />
					</span>
					<span className="banner--item">
						<Search className="banner--icon" />
					</span>
				</div>
			</header>
			<div className="banner--context">
				<h3 className="banner--subtitle">Creative Template</h3>
				<h2 className="banner--title">
					Welcome <br />
					to mogo
				</h2>
				<Button className="banner--button">Learn more</Button>
			</div>
		</article>
	);
};
