'use client';

import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import 'swiper/css';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import cn from 'classnames';

import styles from './AvailableSlider.module.scss';
import SliderArrow from '@/components/ui/Slider/SliderArrow'

// FIXME: Пофиксить key={index}
const AvailableSlider: FC = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const sliderRef = useRef<SwiperType | null>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className={cn(styles.slider, {
			[styles.loaded]: isLoaded
		})}>
			<div className={styles.outer}>
				<div className={styles.sale}>Скидка 20%</div>
				<Swiper
					className={styles.mainSlider}
					speed={500}
					onBeforeInit={(swiper) => {
						sliderRef.current = swiper;
					}}
					slidesPerView={1}
					modules={[Thumbs]}
					thumbs={{ swiper: thumbsSwiper }}
					spaceBetween={10}
					loop={true}
				>
					{Array(5)
						.fill('')
						.map((_, index) => (
							<SwiperSlide key={index}>
								<Image
									className={styles.image}
									src="/static/product/main.jpg"
									width={753}
									height={452}
									alt=""
								/>
							</SwiperSlide>
						))}
				</Swiper>
				<div className={styles.arrows}>
					<SliderArrow type='prev' sliderRef={sliderRef} />
					<SliderArrow type='next' sliderRef={sliderRef} />
				</div>
			</div>

			<Swiper
				modules={[Thumbs, FreeMode]}
				watchSlidesProgress
				onSwiper={setThumbsSwiper as any}
				slidesPerView={4}
				spaceBetween={4}
				speed={500}
				className={styles.thumbSlider}
				onInit={() => setIsLoaded(true)}
				breakpoints={{
					320: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 4,
					}
				}}
			>
				{Array(5)
					.fill('')
					.map((_, index) => (
						<SwiperSlide key={index} className={styles.thumbs}>
							<Image
								className={styles.image}
								src="/static/product/main.jpg"
								width={188}
								height={111}
								alt=""
							/>
						</SwiperSlide>
					))}
			</Swiper>
		</div>
	);
};

export default AvailableSlider;
