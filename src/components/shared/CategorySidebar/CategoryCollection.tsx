'use client';

import cn from 'classnames';
import { FC, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import useMediaQuery from '@/hooks/useMediaQuery';

import { ICollection } from '@/shared/types/collection.types';

import styles from './CategorySidebar.module.scss';
import CategoryList from './CategoryList'

// FIXME: Убрать key={index}
const CategoryCollection: FC<ICollection> = ({ collection, categories }) => {
	const isMobile = useMediaQuery('(max-width: 64rem)');
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [toggleEvent, setToggleEvent] = useState<Date | number>(0);

	const onToggle = () => {
		if (!isMobile) return;
		setIsOpen((prev) => !prev);
		setToggleEvent(Date.now());
	};

	return (
		<div className={styles.collection}>
			<div
				onClick={onToggle}
				className={cn({
					[styles.active]: isOpen
				})}
			>
				{collection} <FontAwesomeIcon name="FaCaretDown" />
			</div>
			<CategoryList
				isMobile={isMobile}
				toggleEvent={toggleEvent}
				categories={categories}
			/>
		</div>
	);
};

export default CategoryCollection;
