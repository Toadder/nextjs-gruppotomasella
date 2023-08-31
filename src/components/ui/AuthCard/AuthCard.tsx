import { FC, ReactNode } from 'react'

import styles from './AuthCard.module.scss';

import cn from 'classnames';

interface IAuthCard {
	children: ReactNode;
	className?: string;
}

const AuthCard: FC<IAuthCard> = ({ children, className }) => {
	return (
		<div className={cn(styles.card, className)}>
			{children}
		</div>
	)
}

export default AuthCard