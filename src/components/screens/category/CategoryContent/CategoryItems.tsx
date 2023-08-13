import { FC } from 'react'
import Pagination from '@/components/ui/Pagination/Pagination'
import CategoryItem from './CategoryItem'

import styles from './CategoryContent.module.scss';

// FIXME: Убрать key={index}
const CategoryItems: FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.items}>
				{
					Array(12).fill('').map((_, index) => <CategoryItem key={index} />)
				}
			</div>
			<Pagination />
		</div>
	)
}

export default CategoryItems