'use client';

import FontAwesomeIcon from '../Icons/FontAwesomeIcon'
import Input from './Input'
import { FC, useState } from 'react'

import styles from './Inputs.module.scss';

type InputType = 'text' | 'password';
type iconNameType = 'FaEye' | 'FaEyeSlash';

const PasswordInput: FC<{ placeholder: string; }> = ({ placeholder }) => {
	const [inputType, setInputType] = useState<InputType>('password');
	const iconName: iconNameType = inputType === 'text' ? 'FaEyeSlash' : 'FaEye';

	const toggleInputType = () => {
		setInputType(inputType === 'text' ? 'password' : 'text');
	};

	return (
		<div className={styles.passwordInput}>
			<Input type={inputType} placeholder={placeholder} />
			<div onClick={toggleInputType} className={styles.eye}>
				<FontAwesomeIcon name={iconName} />
			</div>
		</div>
	)
}

export default PasswordInput