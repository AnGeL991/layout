import { FC } from 'react';
import './sectionHeader.scss';

interface SectionHeaderProps {
	subTitle: string;
	title: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({ subTitle, title }) => {
	return (
		<header className="header">
			<h3 className="header--subtitle">{subTitle}</h3>
			<h4 className="header--title">{title}</h4>
			<span className="header--line"></span>
		</header>
	);
};
