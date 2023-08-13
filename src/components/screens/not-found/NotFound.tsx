import Link from 'next/link';
import { FC } from 'react';

import styles from './NotFound.module.scss';

const NotFound: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<div className={styles.title}>404</div>
				<p className={styles.text}>К сожалению, данной страницы не существует.</p>
				<Link href="/" className={styles.link}>На главную</Link>
			</div>
		</section>
	);
};

export default NotFound;
