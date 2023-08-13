import React, { FC } from 'react'

import styles from './Contacts.module.scss';

interface IContactsTitle {
	title: string;
	className?: string;
}

const ContactsTitle: FC<IContactsTitle> = ({ title, className = '' }) => {
	return (
		<h2 className={`${styles.title} ${className}`}>
			{title}
		</h2>
	)
}

export default ContactsTitle