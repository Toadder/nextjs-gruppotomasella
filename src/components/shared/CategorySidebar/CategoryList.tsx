'use client';

import { ICollectionCategory } from '@/components/layout/Footer/Collection/collection.interface'
import Link from 'next/link'
import React, { FC, LegacyRef, useEffect, useState } from 'react'

import SlideToggle from 'react-slide-toggle';

const CategoryList: FC<ICollectionCategory> = ({
	categories,
	toggleEvent,
	isMobile
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
			}) => (
				<ul
					ref={setCollapsibleElement}
				>
					{items}
				</ul>
			)}
		</SlideToggle>
	) : (
		<ul>{items}</ul>
	);
};

export default CategoryList