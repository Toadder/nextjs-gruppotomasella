import React from 'react'

import styles from './AvailableMain.module.scss';
import Link from 'next/link'

const AvailableFoot = () => {
	return (
		<div className={styles.foot}>
			<Link href="/reservation">Заказать</Link>
		</div>
	)
}

export default AvailableFoot