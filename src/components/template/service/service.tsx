import { FC } from 'react';
import { SectionHeader, EachService } from 'components/template';
import Photography from 'assets/photography.svg';
import WebDesign from 'assets/webDesign.svg';
import Creativity from 'assets/creativity.svg';
import SEO from 'assets/seo.svg';
import Home from 'assets/home.svg';
import Digital from 'assets/digital.svg';

import './service.scss';

export const amazingServices = [
	{
		icon: Photography,
		title: 'Photography',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
	},
	{
		icon: WebDesign,
		title: 'Web Design',
		description: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm',
	},
	{
		icon: Creativity,
		title: 'Creativity',
		description: 'Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem',
	},
	{
		icon: SEO,
		title: 'SEO',
		description: 'Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusm',
	},
	{
		icon: Home,
		title: 'CSS/HTML',
		description: 'Lorem dolor sit amet, consectetur adipiscing elit, sed do tempo',
	},
	{
		icon: Digital,
		title: 'DIGITAL',
		description: 'Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
	},
];

export const Service: FC = () => {
	const displaySection = amazingServices.map((service) => <EachService {...service} />);

	return (
		<article className="service">
			<SectionHeader subTitle="We work with" title="Amazing services" />
			<div className="service--context">{displaySection}</div>
		</article>
	);
};
