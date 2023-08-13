import { FC } from 'react'

import styles from './DealerZone.module.scss';
import DealerSlider from './DealerSlider/DealerSlider'
import DealerContent from './DealerContent/DealerContent'

const DealerMain: FC = () => {
	return (
		<div className={styles.main}>
			<DealerSlider />
			<DealerContent />
		</div>
	)
}

export default DealerMain