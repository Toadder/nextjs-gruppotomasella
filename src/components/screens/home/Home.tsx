import { FC } from 'react';

import Intro from './Intro/Intro';
import Styles from './Styles/Styles';
import Warehouse from './Warehouse/Warehouse';

const Home: FC = () => {
	return (
		<>
			<Intro />
			<Styles />
			<Warehouse />
		</>
	);
};

export default Home;
