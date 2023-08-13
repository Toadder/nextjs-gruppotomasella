import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import styles from './Auth.module.scss';
import AuthForm from './AuthForm';

const Auth: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Для дилеров" />
				<AuthForm />
			</div>
		</section>
	);
};

export default Auth;
