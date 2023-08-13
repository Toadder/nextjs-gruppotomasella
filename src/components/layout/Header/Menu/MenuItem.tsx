import Link from 'next/link';
import { FC } from 'react';

import { IMenuItem } from './menu.interface';

const MenuItem: FC<IMenuItem> = ({ title, link, onClick, toAnotherSite = false }) => {
	return (
		<li>
			<Link href={link} target={toAnotherSite ? '_blank' : '_self'} onClick={onClick}>
				{title}
			</Link>
		</li>
	);
};

export default MenuItem;
