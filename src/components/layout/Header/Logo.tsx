import { FC, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';

const Logo: FC = () => {
	return <Link href='/' className={styles.logo}>
		<Image src="/logo.gif" width={322} height={60} alt='Gruppotomasella' />
	</Link>;
};

export default memo(Logo);
