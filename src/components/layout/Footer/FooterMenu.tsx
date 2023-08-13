import { FC } from 'react'

import styles from './Footer.module.scss';
import Link from 'next/link'

import { menu } from '../Header/Menu/menu.data';

const FooterMenu: FC = () => {
	return (
		<nav className={styles.menu}>
			<ul>
				<li><Link href="/">Главная</Link></li>
				{
					menu.map(({ title, link, toAnotherSite }) => (
						<li key={link}>
							<Link href={link} target={toAnotherSite ? '_blank' : '_self'}>{title}</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default FooterMenu