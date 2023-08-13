import { FC, memo } from 'react';


import MenuItem from './MenuItem';
import NestedMenuItem from './NestedMenuItem';
import { menu, nestedMenu } from './menu.data';

import styles from './Menu.module.scss';

// TODO: Доделать функционал с активным пунктом
const Menu: FC<{ disableOpen: () => void }> = ({ disableOpen }) => {
	const menuItems = menu.map((item) => <MenuItem key={item.title} {...item} onClick={disableOpen} />);
	const nestedMenuItems = nestedMenu.map((item) => (
		<NestedMenuItem key={item.title} {...item} onClick={disableOpen} />
	));

	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<MenuItem title='Главная' link='/' onClick={disableOpen} />
				{nestedMenuItems}
				{menuItems}
			</ul>
		</nav>
	);
};

export default memo(Menu);
