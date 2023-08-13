import { FC } from 'react';

import styles from './DealerContent.module.scss';
import DealerItem from './DealerItem';

const DealerContent: FC = () => {
	return (
		<div className={styles.content}>
			<DealerItem title="Catalogo" />
			<DealerItem title="Listino" />
			<DealerItem title="Compionario" />
		</div>
	);
};

export default DealerContent;
