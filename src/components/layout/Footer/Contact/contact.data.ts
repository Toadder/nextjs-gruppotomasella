import { IContact } from './contact.interface';

export const contacts: IContact[] = [
	{
		data: [
			{
				text: '+7 (495) 649-20-30',
				href: 'tel:74956492030'
			},
			{
				text: '+7 (926) 115-32-85',
				href: 'tel:79261153285'
			}
		]
	},
	{
		title: 'Email',
		data: [
			{
				text: 'b2binterno@mail.ru',
				href: 'mailto:b2binterno@mail.ru'
			}
		]
	},
	{
		title: 'Адрес',
		data: 'р. п. Новоивановское, ул. Луговая д. 1'
	},
	{
		title: 'Режим работы',
		data: '10:00 - 21:00 (Пн - Вс)'
	},
	{
		title: 'Магазин',
		data: 'ТК "Три Кита", 3-й этаж'
	}
];
