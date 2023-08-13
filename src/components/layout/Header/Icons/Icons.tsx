import { FC } from 'react';

import styles from './Icons.module.scss';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'
import Link from 'next/link'
import Search from './Search/Search'

const Icons: FC<{ className?: string }> = ({ className = '' }) => {
	return <div className={`${styles.icons} ${className}`}>
		<Link href="/reservation" className={styles.cart}>
			<FontAwesomeIcon name='FaCartShopping' />
		</Link>
		<Search />
	</div>;
};

export default Icons;
