import { FC } from 'react'

import { contacts } from './Contact/contact.data'
import Contact from './Contact/Contact'

import styles from './Footer.module.scss';
import Link from 'next/link'

const FooterContacts: FC = () => {
	return (
		<div className={styles.contacts}>
			<div className={styles.link}>
				<Link href="/contacts">Контакты</Link>
			</div>
			<ul>
				{
					contacts.map((contact, index) => <Contact key={index} {...contact} />)
				}
			</ul>
		</div>
	)
}

export default FooterContacts