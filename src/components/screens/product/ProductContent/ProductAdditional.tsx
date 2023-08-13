import { FC } from 'react';

import SubHeading from '@/components/ui/Headings/SubHeading';
import Property from '@/components/ui/Property/Property';

import styles from './ProductContent.module.scss';

const ProductAdditional: FC = () => {
	return (
		<div className={styles.additional}>
			<SubHeading title="Дополнительная информация" />
			<div className={styles.options}>
				<Property name="Варианты декора" value="По запросу" />
				<Property name="Размеры" value="L252/252/252 - P40/252/40 - H252" />
			</div>
		</div>
	);
};

export default ProductAdditional;
