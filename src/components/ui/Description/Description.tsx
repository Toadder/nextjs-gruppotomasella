import { FC, ReactNode } from 'react'

import styles from './Description.module.scss';

interface IDescription {
	children: ReactNode;
	className?: string;
}

const Description: FC<IDescription> = ({ children, className = '' }) => {
	return (
		<div className={`${styles.description} ${className}`}>
			{children}
		</div>
	)
}

export default Description