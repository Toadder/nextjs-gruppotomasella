'use client';

import cn from 'classnames';
import Image from 'next/image';
import { FC, useRef, useState } from 'react';
import 'swiper/css';
import { FreeMode, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';
import SliderArrow from '@/components/ui/Slider/SliderArrow';

import styles from './ProductContent.module.scss';

// FIXME: Пофиксить key={index}
const ProductSlider: FC = () => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const sliderRef = useRef<SwiperType | null>(null);
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div
			className={cn(styles.slider, {
				[styles.loaded]: isLoaded
			})}
		>
			<div className={styles.outer}>
				<FancyboxContainer>
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
									<a href="/static/product/main.jpg" data-fancybox="mainSlider">
										<Image
											className={styles.image}
											src="/static/product/main.jpg"
											width={946}
											height={537}
											alt=""
										/>
									</a>
								</SwiperSlide>
							))}
					</Swiper>
				</FancyboxContainer>
				<div className={styles.arrows}>
					<SliderArrow type="prev" sliderRef={sliderRef} />
					<SliderArrow type="next" sliderRef={sliderRef} />
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
						slidesPerView: 2
					},
					768: {
						slidesPerView: 4
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

export default ProductSlider;
