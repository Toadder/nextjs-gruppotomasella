import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { getFormattedPrice } from '@/utils/helpers.util';

import styles from './AvailableItems.module.scss';

const AvailableList: FC = () => {
	const formattedPrice = getFormattedPrice(200_000, 'RUB');

	return (
		<div className={styles.items}>
			{Array(21)
				.fill('')
				.map((_, index) => (
					<article key={index} className={styles.item}>
						<Link href="/available/product-slug">
							<div className={styles.sale}>Скидка 20%</div>
							<div className={styles.image}>
								<Image
									draggable={false}
									src="/static/available/main.jpg"
									width={405}
									height={244}
									alt=""
								/>
							</div>
							<div className={styles.content}>
								<div className={styles.main}>
									<div className={styles.title}>Кровать Amami</div>
									<div className={styles.price}>{formattedPrice}</div>
								</div>
								<p>
									Текст-описание
								</p>
							</div>
						</Link>
					</article>
				))}
		</div>
	);
};

export default AvailableList;
