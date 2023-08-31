import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import AvailableInfo from './AvailableInfo/AvailableInfo';
import AvailableMain from './AvailableMain/AvailableMain';
import styles from './AvailableProduct.module.scss';
import AvailableSlider from './AvailableSlider/AvailableSlider';
import CategoriesList from '@/components/shared/CategoriesList/CategoriesList'

const AvailableProduct: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Мебель в наличии" type='h2' />
				<CategoriesList />
				<div className={styles.mainContainer}>
					<AvailableMain />
					<AvailableSlider />
				</div>
				<AvailableInfo />
			</div>
		</section>
	);
};

export default AvailableProduct;
