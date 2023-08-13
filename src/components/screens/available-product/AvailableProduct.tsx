import React, { FC } from 'react'

import styles from './AvailableProduct.module.scss';
import AvailableMain from './AvailableMain/AvailableMain'
import AvailableSlider from './AvailableSlider/AvailableSlider'
import AvailableInfo from './AvailableInfo/AvailableInfo'

const AvailableProduct: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<div className={styles.mainContainer}>
					<AvailableMain />
					<AvailableSlider />
				</div>
				<AvailableInfo />
			</div>
		</section>
	)
}

export default AvailableProduct