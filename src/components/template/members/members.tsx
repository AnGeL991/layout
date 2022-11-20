import { FC, CSSProperties } from 'react';
import { TeamMember } from 'components/template';
import Matt from 'assets/matt.png';
import Chris from 'assets/chris.png';
import Michael from 'assets/michael.png';
import './members.scss';

interface TeamMemberProps {
	name: string;
	image: string;
	profession: string;
	style: CSSProperties;
}

const members: TeamMemberProps[] = [
	{
		image: Matt,
		name: 'Matthew dix',
		profession: 'Graphic Design',
		style: { transform: 'translate(-12%, 0%)' },
	},
	{
		image: Chris,
		name: 'Christopher Campbell',
		profession: 'Branding/UX design',
		style: { transform: 'translate(-20%,-20%)' },
	},
	{
		image: Michael,
		name: 'Michael Fertig',
		profession: 'Developer',
		style: { transform: 'translate(-27%,0%)' },
	},
];

export const Members: FC = () => {
	const displayMembers = members.map((member, index) => <TeamMember key={index} {...member} />);

	return <div className="members">{displayMembers}</div>;
};
