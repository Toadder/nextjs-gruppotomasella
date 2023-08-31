import { FC } from 'react';

import LoadMore from '@/components/ui/LoadMore/LoadMore';

import styles from './AvailableItems.module.scss';
import AvailableList from './AvailableList';

const AvailableItems: FC = () => {
	return (
		<div className={styles.root}>
			<AvailableList />
			<LoadMore />
		</div>
	);
};

export default AvailableItems;
