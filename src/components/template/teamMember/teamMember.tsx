import { CSSProperties, FC } from 'react';
import { SocialMedia } from 'components/template';
import './teamMember.scss';

interface TeamMemberProps {
	name: string;
	image: string;
	profession: string;
	style: CSSProperties;
}

export const TeamMember: FC<TeamMemberProps> = ({ name, image, profession, style }) => {
	return (
		<div className="teamMember">
			<div className="teamMember--box">
				<img className="teamMember--image" src={image} alt={name} style={style} />
				<div className="teamMember--gradient" />
				<SocialMedia />
			</div>

			<h4 className="teamMember--name">{name}</h4>
			<span className="teamMember--profession">{profession}</span>
		</div>
	);
};
