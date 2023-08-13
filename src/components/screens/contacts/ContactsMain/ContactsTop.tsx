'use client';

import { Map, Placemark } from '@pbe/react-yandex-maps';
import { FC } from 'react';

import Property from '@/components/ui/Property/Property';

import ContactsTitle from '../ContactsTitle';

import styles from './ContactsMain.module.scss';

const ContactsTop: FC = () => {
	return (
		<div className={styles.top}>
			<div className={styles.content}>
				<ContactsTitle className='md:text-left text-center' title="Салон в торговом комплексе «ТРИ КИТА»" />
				<div className={styles.properties}>
					<Property className='md:text-left text-center md:justify-start justify-center md:text-lg'
						name="Адрес"
						value="МО, р.п. Новоивановское, ул. Луговая, д. 1 3-й этаж"
					/>
					<Property className='md:text-left text-center md:justify-start justify-center md:text-lg' name="Режим работы" value="10:30 - 21:00 (Пн-Вс)" />
					<Property className='md:text-left text-center md:justify-start justify-center md:text-lg'
						name="Телефон"
						value={<a href="tel:74956492030">+7 (495) 649-20-30</a>}
					/>
					<Property className='md:text-left text-center md:justify-start justify-center md:text-lg'
						name="Мобильные"
						value={
							<>
								<a href="tel:79261153285">+7 (926) 115-32-85</a>{' '}
								<a href="tel:79263702090">+7 (926) 370-20-90</a>
							</>
						}
					/>
					<Property className='md:text-left text-center md:justify-start justify-center md:text-lg'
						name="Email"
						value={<a href="mailto:b2binterno@mail.ru">b2binterno@mail.ru</a>}
					/>
				</div>
			</div>
			<div className={styles.map}>
				<Map
					defaultState={{
						center: [55.702835, 37.355722],
						zoom: 15,
						controls: ['zoomControl', 'fullscreenControl']
					}}
					modules={['control.ZoomControl', 'control.FullscreenControl']}
					style={{
						width: '100%',
						height: '100%'
					}}
				>
					<Placemark
						modules={['geoObject.addon.balloon']}
						defaultGeometry={[55.702835, 37.355722]}
						properties={{
							balloonContentBody: 'р.п. Новоивановское, ул. Луговая, д. 1'
						}}
						options={{
							iconColor: '#f27935'
						}}
					/>
				</Map>
			</div>
		</div>
	);
};

export default ContactsTop;
