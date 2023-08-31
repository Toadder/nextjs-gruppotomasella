import Link from 'next/link';
import { FC } from 'react';

import AuthCard from '@/components/ui/AuthCard/AuthCard';
import SubHeading from '@/components/ui/Headings/SubHeading';
import Checkbox from '@/components/ui/Inputs/Checkbox';
import Input from '@/components/ui/Inputs/Input';
import PasswordInput from '@/components/ui/Inputs/PasswordInput';

import styles from './Auth.module.scss';

const AuthForm: FC = () => {
	return (
		<AuthCard>
			<SubHeading title="Авторизация" className="text-white" />
			<form className={styles.form}>
				<Input type="text" placeholder="Имя пользователя*" />
				<PasswordInput placeholder="Пароль*" />
				<Checkbox id="remember-me" defaultChecked className="text-white">
					Запомнить меня
				</Checkbox>
				<div className={styles.buttons}>
					<button type="submit" className={styles.submit}>
						Войти
					</button>
					<Link href="/register">Регистрация</Link>
				</div>
			</form>
			<Link href="/dealer-zone" className={styles.password}>
				Забыли пароль?
			</Link>
		</AuthCard>
	);
};

export default AuthForm;
