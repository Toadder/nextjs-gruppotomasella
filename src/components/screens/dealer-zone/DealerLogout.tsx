import { FC } from 'react'

import styles from './DealerZone.module.scss';

const DealerLogout: FC = () => {
	return (
		<div className={styles.logout}>
			<button type='button' >
			Выйти из дилерской зоны
		</button>
		</div>
	)
}

export default DealerLogout