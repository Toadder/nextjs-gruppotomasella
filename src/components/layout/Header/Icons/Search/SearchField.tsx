import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Search.module.scss';

const SearchField: FC<{ hideSearch: () => void }> = ({ hideSearch }) => {
	return (
		<div className={styles.field}>
			<input type="text" placeholder="Поиск товаров" />
			<div className={styles.closeIcon} onClick={hideSearch}>
				<FontAwesomeIcon name="FaXmark" />
			</div>
			<div className={styles.searchIcon}>
				<FontAwesomeIcon name="FaMagnifyingGlass" />
			</div>
		</div>
	);
};

export default SearchField;
