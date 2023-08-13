import Image from 'next/image';
import { FC } from 'react';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';

import styles from './ContactsMain.module.scss';

const ContactsGrid: FC = () => {
	return (
		<FancyboxContainer className={styles.gridContainer}>
			<a href="/static/product/main.jpg" data-fancybox="salon">
				<Image src="/static/product/main.jpg" width={625} height={375} alt="" />
			</a>
			<a href="/static/product/main.jpg" data-fancybox="salon">
				<Image src="/static/product/main.jpg" width={625} height={375} alt="" />
			</a>
		</FancyboxContainer>
	);
};

export default ContactsGrid;
