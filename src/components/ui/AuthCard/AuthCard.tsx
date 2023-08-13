import { FC, ReactNode } from 'react'

import styles from './AuthCard.module.scss';

interface IAuthCard {
	children: ReactNode;
}

const AuthCard: FC<IAuthCard> = ({ children }) => {
	return (
		<div className={styles.card}>
			{children}
		</div>
	)
}

export default AuthCard