import { FC } from 'react';

import styles from './Property.module.scss';

interface IProperty {
	name?: string;
	value: string | JSX.Element;
	className?: string;
}

const Property: FC<IProperty> = ({ name, value, className = 'md:text-lg' }) => {
	return (
		<div className={`${styles.property} ${className}`}>
			{name ? <div>{name}:</div> : null}
			<div className={styles.value}>{value}</div>
		</div>
	);
};

export default Property;
