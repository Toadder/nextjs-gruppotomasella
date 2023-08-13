import { FC } from 'react';

import styles from './Inputs.module.scss';
import { ITextarea } from './inputs.interface';

const Textarea: FC<ITextarea> = (props) => {
	return <textarea className={styles.textarea} {...props} />;
};

export default Textarea;
