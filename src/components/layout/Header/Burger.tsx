import cn from 'classnames';
import { FC } from 'react';

import styles from './Header.module.scss';
import { IBurger } from './header.interface'

const Burger: FC<IBurger> = ({ isOpen, toggleOpen }) => {
	return (
		<div onClick={toggleOpen}
			className={cn(styles.burger, {
				[styles.active]: isOpen
			})}
		>
			<span></span>
		</div>
	);
};

export default Burger;
