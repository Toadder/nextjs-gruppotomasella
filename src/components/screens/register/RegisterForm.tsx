import Link from 'next/link';
import { FC } from 'react';

import AuthCard from '@/components/ui/AuthCard/AuthCard';
import SubHeading from '@/components/ui/Headings/SubHeading';

import Checkbox from '@/ui/Inputs/Checkbox';
import Input from '@/ui/Inputs/Input';

import styles from './Register.module.scss';

const RegisterForm: FC = () => {
	return (
		<AuthCard>
			<SubHeading title="Регистрация" className="text-white" />
			<form className={styles.form}>
				<Input type="text" placeholder="Имя*" />
				<Input type="text" placeholder="Номер телефона*" />
				<Input type="text" placeholder="Email" />
				<Checkbox id="privacy-policy-agreement" className="text-white">
					Я соглашаюсь с условиями{' '}
					<Link href="/privacy-policy">политики конфиденциальности</Link>
				</Checkbox>
				<button type="submit" className={styles.submit}>
					Зарегистрироваться
				</button>
			</form>
			<Link href="auth" className={styles.link}>
				Есть аккаунт?
			</Link>
		</AuthCard>
	);
};

export default RegisterForm;
