import { FC } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import styles from './CategoryContent.module.scss';

const CategoryItem: FC = () => {
	return (
		<article className={styles.item}>
			<Link href="/catalog/product-slug">
				<div className={styles.image}>
					<Image src="/static/category/main.jpg" width={301} height={173} alt="" />
				</div>
				<div className={styles.title}>
					Atlante 001
				</div>
			</Link>
		</article>
	)
}

export default CategoryItem