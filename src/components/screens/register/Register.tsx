import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import styles from './Register.module.scss';
import RegisterForm from './RegisterForm';
import RegisterMessage from './RegisterMessage'

const Register: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Для дилеров" />
				<RegisterForm />
				<RegisterMessage />
			</div>
		</section>
	);
};

export default Register;
