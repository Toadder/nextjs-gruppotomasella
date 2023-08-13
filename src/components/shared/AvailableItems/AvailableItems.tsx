import { FC } from 'react';

import Pagination from '@/components/ui/Pagination/Pagination';

import AvailableList from './AvailableList';

import styles from './AvailableItems.module.scss';

const AvailableItems: FC = () => {
	return (
		<div className={styles.root}>
			<AvailableList />
			<Pagination />
		</div>
	);
};

export default AvailableItems;
