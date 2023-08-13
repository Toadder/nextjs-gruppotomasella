import { FC } from 'react'

import styles from './Warehouse.module.scss';
import Link from 'next/link'

const WarehouseCard: FC = () => {
	return (
		<div className={styles.card}>
			<div>Итальянские фабрики</div>
			<ul>
				<li>
					<Link href="/available">Наличие</Link>
				</li>
				<li>
					<Link href="/sale">Распродажа</Link>
				</li>
			</ul>
		</div>
	)
}

export default WarehouseCard