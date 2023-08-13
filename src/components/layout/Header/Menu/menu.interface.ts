import { ICollection } from '@/shared/types/collection.types'

export interface IMenuItem {
	title: string;
	link: string;
	toAnotherSite?: boolean;
	onClick?: () => void;
}

// TODO: На этапе написания api додумать получение данных
export interface INestedMenuItem extends Pick<IMenuItem, 'title' | 'onClick' > {
	submenu: ICollection[];
}

export interface ISubMenu extends Pick<IMenuItem, 'onClick'> {
	submenu: ICollection[],
	toggleEvent: Date | number;
	isMobile: boolean | null;
}