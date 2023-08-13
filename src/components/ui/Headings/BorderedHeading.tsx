import { FC } from 'react';

import Heading from './Heading';
import styles from './Headings.module.scss';
import { IHeading } from './headings.interface';

const BorderedHeading: FC<IHeading> = ({ title, className = '' }) => {
	return (
		<Heading
			title={title}
			className={`${styles.borderedHeading} ${className}`}
		/>
	);
};

export default BorderedHeading;
