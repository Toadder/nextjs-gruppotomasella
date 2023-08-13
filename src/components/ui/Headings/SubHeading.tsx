import { FC } from 'react';

import styles from './Headings.module.scss';
import { IHeading } from './headings.interface';

const SubHeading: FC<IHeading> = ({ title, className = '' }) => {
	return <h2 className={`${styles.subheading} ${className}`}>{title}</h2>;
};

export default SubHeading;
