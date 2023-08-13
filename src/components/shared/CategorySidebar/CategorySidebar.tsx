import { FC } from 'react'

import styles from './CategorySidebar.module.scss';

import { collections } from '@/components/layout/Footer/Collection/collection.data';
import CategoryCollection from './CategoryCollection'

// FIXME: Убрать key={index}
const CategorySidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			{
				collections.map((collection, index) => (
					<CategoryCollection key={index} {...collection} />
				))
			}
		</aside>
	)
}

export default CategorySidebar