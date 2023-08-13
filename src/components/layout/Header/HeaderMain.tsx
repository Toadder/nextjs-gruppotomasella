import { FC } from 'react';

import Actions from './Actions/Actions';
import Contacts from './Contacts/Contacts';
import styles from './Header.module.scss';
import Logo from './Logo';
import Burger from './Burger'
import { IBurger } from './header.interface'
import Icons from './Icons/Icons'
import Search from './Icons/Search/Search'

const HeaderMain: FC<IBurger> = ({ isOpen, toggleOpen }) => {
	return (
		<div className={styles.main}>
			<Contacts className='lg:block hidden' />
			<Logo />
			<Actions className='lg:block hidden' />
			<Icons className='lg:hidden flex' />
			<Burger isOpen={isOpen} toggleOpen={toggleOpen} />
		</div>
	);
};

export default HeaderMain;
