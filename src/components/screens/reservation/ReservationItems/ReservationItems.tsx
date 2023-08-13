import { FC } from 'react';

import ReservationItem from './ReservationItem';
import styles from './ReservationItems.module.scss';
import { getFormattedPrice } from '@/utils/helpers.util'

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
					<div>Сумма</div>
				</div>
				{Array(2)
					.fill('')
					.map((_, index) => (
						<ReservationItem key={index} />
					))}
			</div>
			<div className={styles.total}>
				<div>Итого:</div>
				<div>{formattedTotal}</div>
			</div>
		</div>
	);
};

export default ReservationItems;
