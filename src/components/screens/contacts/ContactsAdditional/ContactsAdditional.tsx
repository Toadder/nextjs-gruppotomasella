import Image from 'next/image';
import { FC } from 'react';

import FancyboxContainer from '@/components/ui/FancyboxContainer/FancyboxContainer';
import Property from '@/components/ui/Property/Property';

import ContactsTitle from '../ContactsTitle';

import styles from './ContactsAdditional.module.scss';

const ContactsAdditional: FC = () => {
	return (
		<div className={styles.additional}>
			<ContactsTitle
				title="Склад в торговом комплексе «ТРИ КИТА»"
				className="text-center"
			/>
			<div className={styles.gridContainer}>
				<FancyboxContainer className={styles.img}>
					<a href="/static/contacts/image.png" data-fancybox="schema">
						<Image
							src="/static/contacts/image.png"
							width={627}
							height={229}
							alt=""
						/>
					</a>
				</FancyboxContainer>
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
			</div>
		</div>
	);
};

export default ContactsAdditional;
