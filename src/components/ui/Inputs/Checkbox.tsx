import { FC } from 'react';

import styles from './Inputs.module.scss';
import { ICheckbox } from './inputs.interface';

const Checkbox: FC<ICheckbox> = ({ id, children, className = '', ...rest }) => {
	return (
		<div className={`${styles.checkbox} ${className}`}>
			<input id={id} type="checkbox" {...rest} defaultChecked={true} />
			<label htmlFor={id}>
				<span>{children}</span>
			</label>
		</div>
	);
};

export default Checkbox;
