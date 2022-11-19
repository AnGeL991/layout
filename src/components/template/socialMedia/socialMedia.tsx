import { FC } from 'react';
import { ReactComponent as Facebook } from 'assets/facebook.svg';
import { ReactComponent as Pinterest } from 'assets/pinterest.svg';
import { ReactComponent as Twitter } from 'assets/twitter.svg';
import { ReactComponent as Instagram } from 'assets/instagram.svg';
import './socialMedia.scss';

export const SocialMedia: FC = () => {
	return (
		<div className="social">
			<div className="social--box">
				<Facebook className="social--icon" />
			</div>
			<div className="social--box">
				<Pinterest className="social--icon" />
			</div>
			<div className="social--box">
				<Twitter className="social--icon" />
			</div>
			<div className="social--box">
				<Instagram className="social--icon" />
			</div>
		</div>
	);
};
