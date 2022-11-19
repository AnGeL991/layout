import { FC } from 'react';
import { SectionHeader, Members } from 'components/template';
import './ourTeam.scss';

export const OurTeam: FC = () => {
	return (
		<article className="ourTeam">
			<SectionHeader subTitle="Who we are" title="Meet our team" />
			<p className="ourTeam--description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.{' '}
			</p>
			<Members />
		</article>
	);
};
