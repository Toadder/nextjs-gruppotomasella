export interface IBurger {
	isOpen: boolean;
	toggleOpen: () => void;
}

export interface IHeaderMenu extends Pick<IBurger, 'isOpen'> {
	disableOpen: () => void;
}