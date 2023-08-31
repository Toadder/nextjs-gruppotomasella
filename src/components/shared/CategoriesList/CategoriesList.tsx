'use client';

import cn from 'classnames'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'

import styles from './CategoriesList.module.scss'
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'

const CategoriesList: FC = () => {
	return (
		<div className={styles.root}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.active} href="">• Все</Link>
				</li>
				{Array(15)
					.fill('')
					.map((_, index) => (
						<li className={styles.item} key={index}>
							<Link href="" >
								• Категория {index}
							</Link>
						</li>
					))}
			</ul>
			<div className={styles.icon}>
				<FontAwesomeIcon name='FaAnglesLeft' />
			</div>
		</div>
	);
};

export default CategoriesList;
