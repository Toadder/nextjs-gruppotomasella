import { FC } from 'react';

import BorderedHeading from '@/components/ui/Headings/BorderedHeading';

import styles from './Contacts.module.scss';
import ContactsMain from './ContactsMain/ContactsMain';
import ContactsAdditional from './ContactsAdditional/ContactsAdditional'

const Contacts: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title="Контакты" />
				<ContactsMain />
				<ContactsAdditional />
			</div>
		</section>
	);
};

export default Contacts;
