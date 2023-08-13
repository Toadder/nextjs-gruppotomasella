import Link from 'next/link';
import { FC, memo } from 'react';

import styles from './Actions.module.scss';
import { actions } from './actions.data';
import cn from 'classnames';
import { IActions } from './actions.interface'

const Actions: FC<IActions> = ({ onClick, className = '' }) => {
	return (
		<ul className={cn(styles.actions, className)}>
			{actions.map((action) => (
				<li key={action.link} className={styles.action}>
					<Link href={action.link} onClick={onClick}>{action.title}</Link>
				</li>
			))}
		</ul>
	);
};

export default memo(Actions);
