import { FC } from 'react';

import styles from './Register.module.scss';

const RegisterMessage: FC = () => {
	return (
		<p className={styles.message}>
			*Доступ в дилерскую зону будет открыт в течение 3-х дней. Если вам
			необходимо срочно получить данные для входа, позвоните нашему менеджеру по
			номеру <a href="tel:79263702090">+7 (926) 370-20-90</a>.
		</p>
	);
};

export default RegisterMessage;
