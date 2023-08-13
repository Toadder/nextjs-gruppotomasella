'use client';

import { FC, useEffect, useState } from 'react';

import styles from './Header.module.scss';
import HeaderMain from './HeaderMain';
import HeaderMenu from './HeaderMenu';

const Header: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const disableOpen = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		isOpen
			? document.body.classList.add('lock')
			: document.body.classList.remove('lock');
	}, [isOpen]);

	return (
		<header className={styles.header}>
			<div className={styles.body}>
				<HeaderMain isOpen={isOpen} toggleOpen={toggleOpen} />
				<HeaderMenu isOpen={isOpen} disableOpen={disableOpen} />
			</div>
		</header>
	);
};

export default Header;
