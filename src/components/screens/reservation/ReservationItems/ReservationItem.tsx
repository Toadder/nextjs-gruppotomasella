import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import Property from '@/components/ui/Property/Property';

import { getFormattedPrice } from '@/utils/helpers.util';

import styles from './ReservationItems.module.scss';

const ReservationItem: FC = () => {
	const formattedPrice = getFormattedPrice(200_000, 'RUB');

	return (
		<div className={`${styles.row} ${styles.item}`}>
			{/* Image */}
			<div className={styles.img}>
				<div className={styles.index}>01</div>
				<Link href="/available/product-slug">
					<Image
						src="/static/product/main.jpg"
						width={189}
						height={113}
						alt=""
					/>
				</Link>
			</div>

			{/* Main */}
			<div className={styles.main}>
				<div>Арт 65052</div>
				<div>
					<Link href="/available/product-slug">Кровать Аmami</Link>
				</div>
			</div>

			{/* Properties */}
			<div className={styles.properties}>
				<Property
					className={styles.property}
					name="Размер"
					value="190/220 h 110"
				/>
				<Property
					className={styles.property}
					name="Cп. место"
					value="160/200"
				/>
				<Property
					className={styles.property}
					name="Отделка"
					value="Ease 01 (кат 1/Оne)"
				/>
			</div>

			{/* Count */}
			<div className={styles.count}>
				<button className={styles.remove} type="button">
					<FontAwesomeIcon name="FaMinus" />
				</button>
				<div>01</div>
				<button className={styles.add} type="button">
					<FontAwesomeIcon name="FaPlus" />
				</button>
			</div>

			{/* Price */}
			<div className={styles.price}>
				<div>Цена:</div>
				<div>{formattedPrice}</div>
			</div>
		</div>
	);
};

export default ReservationItem;
