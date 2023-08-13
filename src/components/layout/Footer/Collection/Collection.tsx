'use client';

import cn from 'classnames';
import { FC, useState } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import useMediaQuery from '@/hooks/useMediaQuery';

import { ICollection } from '@/shared/types/collection.types';

import styles from './Collection.module.scss';
import CollectionList from './CollectionList';

// FIXME: Убрать key={index}
const Collection: FC<ICollection> = ({ collection, categories }) => {
	const isMobile = useMediaQuery('(max-width: 48rem)');
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
					[styles.opened]: isOpen
				})}
			>
				{collection}
				<FontAwesomeIcon name="FaCaretDown" />
			</div>
			<CollectionList
				categories={categories}
				isMobile={isMobile}
				toggleEvent={toggleEvent}
			/>
		</div>
	);
};

export default Collection;
