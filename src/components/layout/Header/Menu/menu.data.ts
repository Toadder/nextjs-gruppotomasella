import { IMenuItem, INestedMenuItem } from './menu.interface';

export const menu: IMenuItem[] = [
	{
		title: 'Наличие',
		link: '/available'
	},
	{
		title: 'Матрасы',
		link: 'https://matrasok.ru',
		toAnotherSite: true
	},
	{
		title: 'Sale',
		link: '/sale'
	},
	{
		title: 'Контакты',
		link: '/contacts'
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
