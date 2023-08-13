import Image from 'next/image';
import { FC } from 'react';

import SubHeading from '@/components/ui/Headings/SubHeading';

import styles from './Warehouse.module.scss';
import WarehouseCard from './WarehouseCard';

const Warehouse: FC = () => {
	return (
		<section className={styles.root}>
			<SubHeading
				title="Мебель со склада в Москве"
				className="text-center container"
			/>
			<div className={styles.inner}>
				<WarehouseCard />
				<Image
					className={styles.bg}
					src="/static/home/warehouse/bg.png"
					fill
					alt=""
				/>
			</div>
		</section>
	);
};

export default Warehouse;
