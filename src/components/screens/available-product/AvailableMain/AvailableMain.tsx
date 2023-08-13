import { FC } from 'react';

import AvailableDescription from './AvailableDescription';
import AvailableHead from './AvailableHead';
import styles from './AvailableMain.module.scss';
import AvailableFoot from './AvailableFoot'

const AvailableMain: FC = () => {
	return (
		<div className={styles.main}>
			<AvailableHead />
			<AvailableDescription />
			<AvailableFoot />
		</div>
	);
};

export default AvailableMain;
