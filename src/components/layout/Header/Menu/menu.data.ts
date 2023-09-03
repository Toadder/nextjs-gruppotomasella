import { IMenuItem, INestedMenuItem } from './menu.interface';

export const menu: IMenuItem[] = [
	{
		title: 'Наличие',
		link: '/available'
	},
	{
		title: 'Sale',
		link: '/sale'
	},
	{
		title: 'Матрасы',
		link: 'https://matrasok.ru'
	},
	{
		title: 'Оплата',
		link: '/payment',
		inFooter: true
	},
	{
		title: 'Сервис',
		link: '/service',
		inFooter: true
	},
	{
		title: 'Контакты',
		link: '/contacts',
		inFooter: false,
	}
];

export const nestedMenu: INestedMenuItem[] = [
	{
		title: 'Мебель',
		submenu: [
			{
				collection: 'Коллекция мебель',
				categories: [
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					}
				]
			},
			{
				collection: 'Коллекция мебель',
				categories: [
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					}
				]
			},
			{
				collection: 'Коллекция мебель',
				categories: [
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					}
				]
			}
		]
	},
	{
		title: 'Аксессуары',
		submenu: [
			{
				collection: 'Коллекция аксессуары',
				categories: [
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					}
				]
			},
			{
				collection: 'Коллекция аксессуары',
				categories: [
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					},
					{
						title: 'Категория',
						link: '/categories/category-slug'
					}
				]
			}
		]
	}
];
