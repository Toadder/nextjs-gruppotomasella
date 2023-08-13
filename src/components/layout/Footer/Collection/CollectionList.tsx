import { FC, LegacyRef } from 'react'
import { ICollectionCategory } from './collection.interface'
import Link from 'next/link'

import SlideToggle from 'react-slide-toggle';

const CollectionList: FC<ICollectionCategory> = ({
	categories,
	isMobile,
	toggleEvent
}) => {
	const items = categories.map((category, index) => (
		<li key={index}>
			<Link href={category.link}>{category.title}</Link>
		</li>
	));

	return isMobile ? (
		<SlideToggle toggleEvent={toggleEvent} duration={400} collapsed={true}>
			{({
				setCollapsibleElement
			}: {
				setCollapsibleElement: LegacyRef<HTMLUListElement>;
			}) => <ul ref={setCollapsibleElement}>{items}</ul>}
		</SlideToggle>
	) : (
		<ul>{items}</ul>
	);
};

export default CollectionList