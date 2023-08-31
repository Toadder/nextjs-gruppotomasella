import { FC } from 'react';

import AvailableItems from '@/components/shared/AvailableItems/AvailableItems';
import CategoriesList from '@/components/shared/CategoriesList/CategoriesList';
import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import styles from './Available.module.scss';

const Available: FC<{ title: string }> = ({ title }) => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title={title} />
				<CategoriesList />
				<AvailableItems />
			</div>
		</section>
	);
};

export default Available;
