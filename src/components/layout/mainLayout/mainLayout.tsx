import { FC } from 'react';
import { ChildrenProps } from 'interface';
import { Footer } from 'components/layout';
import './mainLayout.scss';

export const MainLayout: FC<ChildrenProps> = ({ children }) => {
	return (
		<section className="mainLayout">
			{children}
			<Footer />
		</section>
	);
};
