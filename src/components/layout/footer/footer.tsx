import { FC } from 'react';
import { Subscribe } from 'components/template';
import './footer.scss';

export const Footer: FC = () => {
	return (
		<footer className="footer">
			<span className="footer--copy">
				&copy; 2016 MoGo free PSD template by <span className="footer--copy-pink">Laaqig</span>
			</span>
			<Subscribe />
		</footer>
	);
};
