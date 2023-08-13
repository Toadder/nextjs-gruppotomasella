'use client';

import Link from 'next/link';
import { FC } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './DealerSlider.module.scss';

// FIXME: Убрать key={index}
const DealerSlider: FC = () => {
	return (
		<div className={styles.outer}>
			<Swiper
				speed={600}
				className={styles.slider}
				slidesPerView="auto"
				freeMode={true}
				grabCursor={true}
			>
				{Array(3)
					.fill('')
					.map((_, index) => (
						<SwiperSlide key={index} className={styles.slide}>
							{<Link href="" className={`${index === 0 ? styles.active : ''}`}>Tomasella</Link>}
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	)
}

export default DealerSlider