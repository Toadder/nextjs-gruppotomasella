import { FC } from 'react';

import Heading from './Heading';
import styles from './Headings.module.scss';
import SubHeading from './SubHeading';
import { IBorderedHeading } from './headings.interface';

const BorderedHeading: FC<IBorderedHeading> = ({
	title,
	className = '',
	type = 'h1'
}) => {
	return type === 'h1' ? (
		<Heading
			title={title}
			className={`${styles.borderedHeading} ${className}`}
		/>
	) : (
		<SubHeading
			title={title}
			className={`${styles.borderedHeading} ${className}`}
		/>
	);
};

export default BorderedHeading;
