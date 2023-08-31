import Link from 'next/link';
import { FC } from 'react';

import { menu } from '../Header/Menu/menu.data';

import styles from './Footer.module.scss';

const FooterMenu: FC = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link href="/">Главная</Link>
				</li>
				{menu.map(({ title, link, inFooter }) => {
					if(inFooter === false) return;

					return (
						<li key={link}>
							<Link
								href={link}
								target={!link.startsWith('/') ? '_blank' : '_self'}
							>
								{title}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default FooterMenu;
