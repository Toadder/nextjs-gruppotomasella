import Link from 'next/link';
import { FC } from 'react';

import styles from './StylesItem.module.scss';
import { ICard } from './styles.interface';

const StylesCard: FC<ICard> = ({ style, categories }) => {
	return (
		<div className={styles.card}>
			<div>{style}</div>
			<ul>
				{categories.map((category, index) => (
					<li key={index}>
						<Link href={category.link}>{category.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StylesCard;
