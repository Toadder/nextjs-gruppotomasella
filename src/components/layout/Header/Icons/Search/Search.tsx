'use client';

import { FC, memo, useEffect, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Search.module.scss';
import SearchMain from './SearchMain';

const Search: FC = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const showSearch = () => {
		setIsVisible(true);
	};

	const hideSearch = () => {
		setIsVisible(false);
	};

	useEffect(() => {
		isVisible
			? document.body.classList.add('lock')
			: document.body.classList.remove('lock');
	}, [isVisible]);

	return (
		<div className={styles.search}>
			<div className={styles.trigger} onClick={showSearch}>
				<FontAwesomeIcon name="FaMagnifyingGlass" />
			</div>
			{isVisible ? <SearchMain hideSearch={hideSearch} /> : null}
		</div>
	);
};

export default memo(Search);
