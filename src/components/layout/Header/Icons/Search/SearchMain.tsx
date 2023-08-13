import { FC } from 'react';

import styles from './Search.module.scss';
import SearchField from './SearchField';
import SearchItems from './SearchItems';

const SearchMain: FC<{ hideSearch: () => void }> = ({ hideSearch }) => {
	return (
		<div className={styles.main}>
			<div onClick={hideSearch} className={styles.backdrop}></div>
			<div className={styles.inner}>
				<SearchField hideSearch={hideSearch} />
				<SearchItems />
			</div>
		</div>
	);
};

export default SearchMain;
