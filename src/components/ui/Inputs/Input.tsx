import { FC } from 'react';

import styles from './Inputs.module.scss';
import { IField } from './inputs.interface';

const Input: FC<IField> = (props) => {
	return <input className={styles.input} {...props} />;
};

export default Input;
