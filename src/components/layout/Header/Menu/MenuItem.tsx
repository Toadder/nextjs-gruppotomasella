import Link from 'next/link';
import { FC } from 'react';

import { IMenuItem } from './menu.interface';

const MenuItem: FC<IMenuItem> = ({ title, link, inFooter, onClick}) => {
	if(inFooter) return;

	return (
		<li>
			<Link href={link} target={!link.startsWith('/') ? '_blank' : '_self'} onClick={onClick}>
				{title}
			</Link>
		</li>
	);
};

export default MenuItem;
