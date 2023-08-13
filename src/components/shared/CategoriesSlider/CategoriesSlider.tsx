'use client';

import Link from 'next/link';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './CategoriesSlider.module.scss';

const CategoriesList: FC = () => {
	return (
		<div className={styles.root}>
			<Swiper
				speed={600}
				className={styles.slider}
				slidesPerView="auto"
				freeMode={true}
				grabCursor={true}
			>
				<SwiperSlide className={styles.slide}>
					<Link className={styles.active} href="">
						Все
					</Link>
				</SwiperSlide>
				{Array(15)
					.fill('')
					.map((_, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							{<Link href="">Категория {index}</Link>}
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default CategoriesList;
