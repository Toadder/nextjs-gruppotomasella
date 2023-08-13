'use client';

import Image from 'next/image';
import { FC, useRef } from 'react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';

import styles from './Intro.module.scss';
import IntroCard from './IntroCard';
import { slides } from './intro.data';
import SliderArrow from '@/components/ui/Slider/SliderArrow'

const Intro: FC = () => {
	const sliderRef = useRef<SwiperType | null>(null);

	return (
		<section className={styles.root}>
			<div className={styles.inner}>
				<Swiper
					onBeforeInit={(swiper) => {
						sliderRef.current = swiper;
					}}
					className={styles.slider}
					speed={400}
					effect={'fade'}
					modules={[EffectFade]}
					loop={true}
				>
					{slides.map((slide) => (
						<SwiperSlide className={styles.slide} key={slide.image}>
							{({ isActive }) => (
								<>
									<IntroCard isActive={isActive} {...slide} />
									<Image className={styles.bg} src={slide.image} fill alt="" />
								</>
							)}
						</SwiperSlide>
					))}
				</Swiper>
				<div className={styles.arrows}>
					<SliderArrow type='prev' sliderRef={sliderRef} />
					<SliderArrow type='next' sliderRef={sliderRef} />
				</div>
			</div>
		</section>
	);
};

export default Intro;
