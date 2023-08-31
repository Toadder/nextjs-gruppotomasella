import { FC } from 'react'

import styles from './DealerZone.module.scss';

const DealerGreeting: FC = () => {
	return (
		<div className={styles.greeting}>
			<div>Здравствуйте, ...!</div>
			<button>Выйти</button>
		</div>
	)
}

export default DealerGreeting