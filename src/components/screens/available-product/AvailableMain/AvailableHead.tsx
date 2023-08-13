import { FC } from 'react';

import Heading from '@/components/ui/Headings/Heading';

import { getFormattedPrice } from '@/utils/helpers.util';

import styles from './AvailableMain.module.scss';

const AvailableHead: FC = () => {
	const oldFormattedPrice = getFormattedPrice(252_454, 'RUB');
	const newFormattedPrice = getFormattedPrice(200_000, 'RUB');

	return (
		<div className={styles.head}>
			<div className={styles.item}>
				<div>Артикул:</div>
				<div>65052</div>
			</div>
			<Heading title="Кровать Amami" />
			<div className={styles.prices}>
				<div className={styles.priceOld}>{oldFormattedPrice}</div>
				<div>{newFormattedPrice}</div>
			</div>
		</div>
	);
};

export default AvailableHead;
