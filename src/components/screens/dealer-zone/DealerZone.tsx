import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import styles from './DealerZone.module.scss';
import DealerGreeting from './DealerGreeting'
import DealerMain from './DealerMain/DealerMain'

const DealerZone: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Дилерская зона" />
				<DealerGreeting />
				<DealerMain />
			</div>
		</section>
	);
};

export default DealerZone;
