import { FC } from 'react'
import Image from 'next/image'

import styles from './ProductContent.module.scss';

const ProductImage: FC = () => {
	return (
		<div className={styles.image}>
			<Image src="/static/product/main.jpg" alt="" width={946} height={567} />
		</div>
	)
}

export default ProductImage