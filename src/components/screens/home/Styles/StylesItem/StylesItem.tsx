import Image from 'next/image';
import { FC } from 'react';

import StylesCard from './StylesCard';
import styles from './StylesItem.module.scss';
import { IStyle } from './styles.interface';

// FIXME: Поправить key={index}
const StylesItem: FC<IStyle> = ({
	style,
	categories,
	description,
	image,
	catalogUrl
}) => {
	return (
		<div className={styles.item}>
			<div className={styles.content}>
				<StylesCard style={style} categories={categories} />
				<Image className={styles.bg} src={image} fill alt="" />
				<a href={catalogUrl} target="_blank" className={styles.link}>
					посмотреть каталог
				</a>
			</div>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default StylesItem;
