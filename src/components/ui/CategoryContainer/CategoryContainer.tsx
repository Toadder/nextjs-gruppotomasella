import { FC, ReactNode } from 'react';

import styles from './CategoryContainer.module.scss';

interface ICategoryContainer {
	children: ReactNode;
	className?: string;
}

const CategoryContainer: FC<ICategoryContainer> = ({ children, className = '' }) => {
	return (
		<div className={`${styles.wrapper} ${className}`}>
			{children}
		</div>
	)
}

export default CategoryContainer