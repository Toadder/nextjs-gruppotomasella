'use client';

import cn from 'classnames';
import { FC, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import useMediaQuery from '@/hooks/useMediaQuery';

import styles from './Menu.module.scss';
import NestedSubMenu from './NestedSubMenu';
import { INestedMenuItem } from './menu.interface';

const NestedMenuItem: FC<INestedMenuItem> = ({
	title,
	submenu,
	onClick = () => {}
}) => {
	const isMobile = useMediaQuery('(max-width: 64rem)');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [toggleEvent, setToggleEvent] = useState<Date | number>(0);

	const onToggle = () => {
		if (!isMobile) return;
		setIsOpen((prev) => !prev);
		setToggleEvent(Date.now());
	};

	const onCategoryClick = () => {
		onClick();
		onToggle();
	};

	return (
		<li>
			<span
				className={cn({
					[styles.opened]: isOpen
				})}
				onClick={onToggle}
			>
				{title} <FontAwesomeIcon name="FaCaretDown" />
			</span>
			<NestedSubMenu
				submenu={submenu}
				toggleEvent={toggleEvent}
				isMobile={isMobile}
				onClick={onCategoryClick}
			/>
		</li>
	);
};

export default NestedMenuItem;
