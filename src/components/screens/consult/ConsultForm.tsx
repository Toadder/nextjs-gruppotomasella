import Link from 'next/link';
import { FC } from 'react';

import AuthCard from '@/components/ui/AuthCard/AuthCard';
import Description from '@/components/ui/Description/Description';
import SubHeading from '@/components/ui/Headings/SubHeading';
import Checkbox from '@/components/ui/Inputs/Checkbox';
import Input from '@/components/ui/Inputs/Input';

import styles from './Consult.module.scss';

const ConsultForm: FC = () => {
	return (
		<AuthCard>
			<div className={styles.top}>
				<SubHeading title="Консультация специалиста" className="text-white" />
				<Description className="text-white">
					Оставьте данные и мы перезвоним Вам в течение рабочего дня.
				</Description>
			</div>
			<form className={styles.form}>
				<Input placeholder="Имя*" />
				<Input placeholder="Номер телефона*" />
				<Checkbox id="privacy-policy-agreement" className="text-white">
					Я соглашаюсь с условиями{' '}
					<Link href="/privacy-policy">политики конфиденциальности</Link>
				</Checkbox>
				<button type="submit" className={styles.submit}>
					Отправить
				</button>
			</form>
		</AuthCard>
	);
};

export default ConsultForm;
