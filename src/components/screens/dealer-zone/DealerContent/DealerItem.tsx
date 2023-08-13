'use client';

import { FC, LegacyRef, useState } from 'react';
import SlideToggle from 'react-slide-toggle';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './DealerContent.module.scss';

import cn from 'classnames';

interface ISlideToggle {
	toggle: () => void;
	setCollapsibleElement: LegacyRef<HTMLUListElement>;
}

// FIXME: Убрать key={index}
const DealerItem: FC<{ title: string; }> = ({ title }) => {
	const [isVisible, setIsVisible] = useState<boolean>(true);

	return (
		<SlideToggle duration={400} collapsed={false}
			render={({ toggle, setCollapsibleElement }: ISlideToggle) => (
				<div className={styles.block}>
					<div onClick={() => {
						setIsVisible(prev => !prev);
						toggle();
					}} className={cn(styles.title, {
						[styles.active]: isVisible
					})}>
						{title} <FontAwesomeIcon name="FaCaretDown" />
					</div>
					<ul ref={setCollapsibleElement} className={styles.ul}>
						{
							Array(10).fill('').map((_, index) => (
								<li key={index}>
									<a href="" target='_blank'>
										<FontAwesomeIcon name='FaFile' />
										Filename.pdf
									</a>
								</li>
							))
						}
					</ul>
				</div>
			)}
		/>
	);
};

export default DealerItem;
