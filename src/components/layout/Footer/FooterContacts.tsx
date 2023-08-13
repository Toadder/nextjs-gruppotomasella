import { FC } from 'react'

import { contacts } from './Contact/contact.data'
import Contact from './Contact/Contact'

import styles from './Footer.module.scss';

const FooterContacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<ul>
				{
					contacts.map((contact, index) => <Contact key={index} {...contact} />)
				}
			</ul>
		</div>
	)
}

export default FooterContacts