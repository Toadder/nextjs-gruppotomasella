import Link from 'next/link';
import { FC, memo } from 'react';

import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';

import styles from './Contacts.module.scss';
import { phones, socials } from './contacts.data';

const Contacts: FC<{ className?: string }> = ({ className = '' }) => {
	return (
		<div className={className}>
			{/* Socials */}
			<ul className={styles.socials}>
				{socials.map((social) => (
					<li key={social.icon} className={styles.social}>
						<Link href={social.link}>
							<FontAwesomeIcon name={social.icon} />
						</Link>
					</li>
				))}
			</ul>

			{/* Phones */}
			<ul className={styles.phones}>
				{phones.map((phone) => (
					<li key={phone.phone} className={styles.phone}>
						<a href={`tel:${phone.hrefPhone}`}>{phone.phone}</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default memo(Contacts);
