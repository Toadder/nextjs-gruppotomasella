import Link from 'next/link';
import { FC, LegacyRef } from 'react';
import SlideToggle from 'react-slide-toggle';

import styles from './Menu.module.scss';
import { ISubMenu } from './menu.interface';

// FIXME: Поправить key={index}
const NestedSubMenu: FC<ISubMenu> = ({ submenu, toggleEvent, isMobile, onClick }) => {
	const content = submenu.map(({ collection, categories }, index) => (
		<div className={styles.column} key={index}>
			<div>{collection}</div>
			<ul>
				{categories.map((category, index) => (
					<li key={index}>
						<Link href={category.link} onClick={onClick}>
							{category.title}
						</Link>
					</li>
				))}
			</ul>
		</div>
	));

	return isMobile ? (
		<SlideToggle toggleEvent={toggleEvent} duration={400} collapsed={true}>
			{({
				setCollapsibleElement
			}: {
				setCollapsibleElement: LegacyRef<HTMLDivElement>;
			}) => (
				<div className={styles.submenu} ref={setCollapsibleElement}>
					<div className={styles.inner}>{content}</div>
				</div>
			)}
		</SlideToggle>
	) : (
		<div className={styles.submenu}>
			<div className={styles.inner}>{content}</div>
		</div>
	);
};

export default NestedSubMenu;
