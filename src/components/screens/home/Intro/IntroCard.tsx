import { FC } from 'react'
import { ICard } from './intro.interface'

import styles from './Intro.module.scss';

import cn from 'classnames';

const IntroCard:FC<ICard> = ({ title, text, link, isActive }) => {
	return (
		<div className={cn(styles.card, {
			[styles.active]: isActive === true
		})}>
			<div>{title}</div>
			<p>{text}</p>
			<span><a href={link}>Подробнее</a></span>
		</div>
	)
}

export default IntroCard