import React, { FC } from 'react'

import styles from './ProductContent.module.scss';
import SubHeading from '@/components/ui/Headings/SubHeading'
import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'
import Image from 'next/image'

const ProductGallery: FC = () => {
	return (
		<div className={styles.gallery}>
			<SubHeading title='Галерея изображений' />
			<FancyboxContainer className={styles.galleryItems}>
				<a href="/static/product/main.jpg" data-fancybox="gallery">
					<Image src="/static/product/main.jpg" width={225} height={135} alt="" />
				</a>
				<a href="/static/product/main.jpg" data-fancybox="gallery">
					<Image src="/static/product/main.jpg" width={225} height={135} alt="" />
				</a>
				<a href="/static/product/main.jpg" data-fancybox="gallery">
					<Image src="/static/product/main.jpg" width={225} height={135} alt="" />
				</a>
				<a href="/static/product/main.jpg" data-fancybox="gallery">
					<Image src="/static/product/main.jpg" width={225} height={135} alt="" />
				</a>
			</FancyboxContainer>
		</div>
	)
}

export default ProductGallery