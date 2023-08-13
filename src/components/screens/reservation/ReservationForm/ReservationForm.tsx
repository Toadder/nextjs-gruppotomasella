import Link from 'next/link';
import { FC } from 'react';

import AuthCard from '@/components/ui/AuthCard/AuthCard';
import SubHeading from '@/components/ui/Headings/SubHeading';
import Checkbox from '@/components/ui/Inputs/Checkbox';
import Input from '@/components/ui/Inputs/Input';

import styles from './ReservationForm.module.scss';
import Textarea from '@/components/ui/Inputs/Textarea'

const ReservationForm: FC = () => {
	return (
		<AuthCard>
			<SubHeading title="Оформить заказ" className="text-white" />
			<form className={styles.form}>
				<Input placeholder="Фио*" />
				<Input placeholder="Номер телефона*" />
				<Input placeholder="Email*" />
				<Textarea placeholder='Комментарий' />
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

export default ReservationForm;
