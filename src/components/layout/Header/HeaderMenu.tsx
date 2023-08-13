import cn from 'classnames';
import { FC } from 'react';

import Actions from './Actions/Actions';
import Contacts from './Contacts/Contacts';
import styles from './Header.module.scss';
import Icons from './Icons/Icons';
import Menu from './Menu/Menu';
import { IHeaderMenu } from './header.interface';

const HeaderMenu: FC<IHeaderMenu> = ({ isOpen, disableOpen }) => {
	return (
		<div className={styles.wrapper}>
			<div
				className={cn(styles.menu, {
					[styles.active]: isOpen
				})}
			>
				<Contacts className="lg:hidden inline-block" />
				<Menu disableOpen={disableOpen} />
				<Actions className="lg:hidden inline-block" onClick={disableOpen} />
			</div>
			<Icons className="lg:flex hidden" />
		</div>
	);
};

export default HeaderMenu;
