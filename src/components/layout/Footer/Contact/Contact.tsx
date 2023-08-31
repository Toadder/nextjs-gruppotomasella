import Link from 'next/link';
import { FC } from 'react';

import { IContact } from './contact.interface';

import styles from './Contact.module.scss';

const Contact: FC<IContact> = ({ title, data }) => {
	let content: JSX.Element;

	if (typeof data === 'string') {
		content = <div className={styles.contact}>{data}</div>;
	} else {
		content = (
			<div className={styles.contact}>
				{data.map(({ href, text }) => (
					<div>
						<Link href={href} className={href.includes('mailto') ? 'text-[#0000FF]' : ''}>{text}</Link>
					</div>
				))}
			</div>
		);
	}

	return (
		<li>
			{title && <div>{title}</div>}
			{content}
		</li>
	);
};

export default Contact;
