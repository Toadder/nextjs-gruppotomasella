import Link from 'next/link';
import { FC } from 'react';

import SubHeading from '@/components/ui/Headings/SubHeading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import Property from '@/components/ui/Property/Property';

import styles from './AvailableMain.module.scss';

const AvailableDescription: FC = () => {
	return (
		<div className={styles.description}>
			<SubHeading title="Характеристики" className="md:text-center" />
			<div>
				<Property className={styles.property} name="Страна" value="Италия" />
				<Property
					className={styles.property}
					name="Размер"
					value="190/220 h 110 сп. место - 160/200"
				/>
				<Property
					className={styles.property}
					name="Отделка"
					value="Ease 01 (кат 1/Оne)"
				/>
				<Property className={styles.property} name="Чехлы" value="Cъёмные" />
			</div>
			<div className={styles.link}>
				<Link href="">
					<span>Далее</span>
					<FontAwesomeIcon name="FaAngleLeft" />
				</Link>
			</div>
		</div>
	);
};

export default AvailableDescription;
