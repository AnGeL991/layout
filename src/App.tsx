import { MainLayout } from 'components/layout';
import { Banner, Service, OurTeam } from './components/template';

function App() {
	return (
		<MainLayout>
			<Banner />
			<Service />
			<OurTeam />
		</MainLayout>
	);
}

export default App;
