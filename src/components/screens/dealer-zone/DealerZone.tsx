import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import DealerMain from './DealerMain';
import styles from './DealerZone.module.scss';
import DealerLogout from './DealerLogout'

const DealerZone: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Дилерская зона" />
				<DealerMain />
				<DealerLogout />
			</div>
		</section>
	);
};

export default DealerZone;
