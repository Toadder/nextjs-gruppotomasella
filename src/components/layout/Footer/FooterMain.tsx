import { FC } from 'react';

import Collection from './Collection/Collection';
import { collections } from './Collection/collection.data';

import styles from './Footer.module.scss';

// FIXME: Убрать key={index}
const FooterMain: FC = () => {
	return (
		<div className={styles.main}>
			{collections.map((collection, index) => (
				<Collection key={index} {...collection} />
			))}
		</div>
	);
};

export default FooterMain;
