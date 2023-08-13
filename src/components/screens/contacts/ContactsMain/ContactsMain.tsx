import { FC } from 'react';

import ContactsGrid from './ContactsGrid';
import styles from './ContactsMain.module.scss';
import ContactsTop from './ContactsTop';

const ContactsMain: FC = () => {
	return (
		<div className={styles.main}>
			<ContactsTop />
			<ContactsGrid />
		</div>
	);
};

export default ContactsMain;
