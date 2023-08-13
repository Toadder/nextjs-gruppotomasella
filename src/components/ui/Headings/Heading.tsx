import { FC } from 'react';

import styles from './Headings.module.scss';
import { IHeading } from './headings.interface';

const Heading: FC<IHeading> = ({ title, className = '' }) => {
	return <h1 className={`${styles.heading} ${className}`}>{title}</h1>;
};

export default Heading;
