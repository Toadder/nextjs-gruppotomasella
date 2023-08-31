import { FC } from 'react';

import DealerItem from './DealerItem';
import styles from './DealerMain.module.scss';

const DealerMain: FC = () => {
	return (
		<>
			<ul className={styles.factories}>
				{Array(3)
					.fill('')
					.map((_, index) => (
						<li key={index}>
							<button type="button">Tomasella</button>
						</li>
					))}
			</ul>

			<div className={styles.gridContainer}>
				<DealerItem title="Каталог" />
				<DealerItem title="Цена" />
				<DealerItem title="Фурнитура" />
				<DealerItem title="Отделка" />
			</div>
		</>
	);
};

export default DealerMain;
