import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import Property from '@/components/ui/Property/Property';

import { getFormattedPrice } from '@/utils/helpers.util';

import styles from './ReservationItems.module.scss';

const ReservationItem: FC = () => {
	const formattedPrice = getFormattedPrice(200_000, 'RUB');
	const formattedSum = getFormattedPrice(200_000, 'RUB');

	return (
		<div className={`${styles.row} ${styles.item}`}>
			{/* Image */}
			<div className={styles.img}>
				<Link href="/available/product-slug">
					<Image
						src="/static/product/main.jpg"
						width={366}
						height={210}
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
					className="lg:text-base text-lg justify-center flex-col"
					name="Размер"
					value="190/220 h 110 сп. место - 160/200"
				/>
				<Property
					className="lg:text-base text-lg justify-center flex-col"
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

			{/* Total */}
			<div className={styles.sum}>
				<div>Сумма:</div>
				<div>{formattedSum}</div>
			</div>
		</div>
	);
};

export default ReservationItem;
