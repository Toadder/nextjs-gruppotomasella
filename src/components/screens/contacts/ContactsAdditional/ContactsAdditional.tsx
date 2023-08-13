import Image from 'next/image';
import { FC } from 'react';

import Property from '@/components/ui/Property/Property';

import ContactsTitle from '../ContactsTitle';

import styles from './ContactsAdditional.module.scss';
import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer'

const ContactsAdditional: FC = () => {
	return (
		<div className={styles.additional}>
			<ContactsTitle
				title="Склад в торговом комплексе «ТРИ КИТА»"
				className="text-center"
			/>
			<div className={styles.properties}>
				<Property
					className="justify-center text-center md:text-lg"
					name="Адрес"
					value="МО, р.п. Новоивановское, ул. Луговая, д. 1"
				/>
				<Property
					className="justify-center text-center md:text-lg"
					name="Самовывоз"
					value="C 11:00 - 19:00 по предварительной договоренности"
				/>
				<Property
					className="justify-center text-center md:text-lg"
					name="Телефон"
					value={<a href="tel:74956492030">+7 (495) 649-20-30</a>}
				/>
				<Property
					className="justify-center text-center md:text-lg"
					name="Мобильный"
					value={<a href="tel:79261153285">+7 (926) 115-32-85</a>}
				/>
			</div>
				<FancyboxContainer className={styles.img}>
					<a href="/static/product/main.jpg" data-fancybox="schema">
						<Image src="/static/product/main.jpg" width={800} height={1} alt="" />
					</a>
				</FancyboxContainer>
		</div>
	);
};

export default ContactsAdditional;
