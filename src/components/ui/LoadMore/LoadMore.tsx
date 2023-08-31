'use client';

import { FC } from 'react';

import styles from './LoadMore.module.scss';

const LoadMore: FC = () => {
	return (
		<div className={styles.wrapper}>
			<button type="button" className={styles.button}>
				Показать ещё
			</button>
		</div>
	);
};

export default LoadMore;
