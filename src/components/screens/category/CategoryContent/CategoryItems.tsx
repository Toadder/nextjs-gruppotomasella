import { FC } from 'react';

import LoadMore from '@/components/ui/LoadMore/LoadMore';

import styles from './CategoryContent.module.scss';
import CategoryItem from './CategoryItem';

// FIXME: Убрать key={index}
const CategoryItems: FC = () => {
	return (
		<div className={styles.main}>
			<div className={styles.items}>
				{Array(12)
					.fill('')
					.map((_, index) => (
						<CategoryItem key={index} />
					))}
			</div>
			<LoadMore />
		</div>
	);
};

export default CategoryItems;
