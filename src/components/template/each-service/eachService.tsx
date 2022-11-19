import { FC } from 'react';
import './eachService.scss';

interface EachServiceProps {
	title: string;
	icon: string;
	description: string;
}

export const EachService: FC<EachServiceProps> = ({ title, icon, description }) => {
	return (
		<div className="eachService">
			<img className="eachService--icon" src={icon} alt="icon" />
			<div className="eachService--info">
				<h4 className="eachService--title">{title}</h4>
				<p className="eachService--description">{description}</p>
			</div>
		</div>
	);
};
