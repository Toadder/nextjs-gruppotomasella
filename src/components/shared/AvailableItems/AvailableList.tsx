import Link from 'next/link';
import { FC } from 'react';

import styles from './AvailableItems.module.scss';

import Image from 'next/image';
import { getFormattedPrice } from '@/utils/helpers.util'

const AvailableList: FC = () => {
	const formattedPrice = getFormattedPrice(200_000, 'RUB');

	return (
		<div className={styles.items}>
			{Array(9)
				.fill('')
				.map((_, index) => (
					<article key={index} className={styles.item}>
						<Link href="/available/product-slug">
							<div className={styles.image}>
								<Image draggable={false} src="/static/available/main.jpg" width={405} height={244} alt="" />
							</div>
							<div className={styles.content}>
								<div>Кровать Amami</div>
								<div>{formattedPrice}</div>
							</div>
						</Link>
					</article>
				))}
		</div>
	);
};

export default AvailableList;
