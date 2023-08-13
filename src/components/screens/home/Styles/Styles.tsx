import { FC } from 'react';

import styles from './Styles.module.scss';
import StylesItem from './StylesItem/StylesItem';
import { items } from './StylesItem/styles.data';

// FIXME: Поправить key={index}
const Styles: FC = () => {
	return (
		<div className={`section ${styles.root}`}>
			<div className={styles.inner}>
				{items.map((item, index) => (
					<StylesItem key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Styles;
