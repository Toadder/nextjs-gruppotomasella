import Link from 'next/link';
import { FC } from 'react';

import { getFormattedPrice } from '@/utils/helpers.util';

import ReservationItem from './ReservationItem';
import styles from './ReservationItems.module.scss';

// FIXME: Пофиксить key={index}
const ReservationItems: FC = () => {
	const formattedTotal = getFormattedPrice(400_000, 'RUB');

	return (
		<div className={styles.items}>
			<div className={styles.gridContainer}>
				<div className={`${styles.row} ${styles.headings}`}>
					<div>Изображение</div>
					<div>Арт | Наименование</div>
					<div>Характеристики</div>
					<div>Количество</div>
					<div>Цена</div>
				</div>
				{Array(4)
					.fill('')
					.map((_, index) => (
						<ReservationItem key={index} />
					))}
			</div>
			<div className={styles.total}>
				<div className={styles.totalText}>Итого:</div>
				<div className={styles.totalSum}>{formattedTotal}</div>
			</div>
			<div className={styles.btn}>
				<Link href="/available" >
					Вернуться и продолжить выбор
				</Link>
			</div>
		</div>
	);
};

export default ReservationItems;
