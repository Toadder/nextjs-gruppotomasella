import Link from 'next/link';
import { FC } from 'react';

import { IContact } from './contact.interface';

const Contact: FC<IContact> = ({ title, data }) => {
	let content: JSX.Element;

	if (typeof data === 'string') {
		content = <div>{data}</div>;
	} else {
		content = (
			<div>
				{data.map((obj) => (
					<div>
						<Link href={obj.href}>{obj.text}</Link>
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
