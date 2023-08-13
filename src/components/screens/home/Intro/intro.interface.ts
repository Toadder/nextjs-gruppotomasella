export interface ISlide {
	title: string;
	text: string;
	link: string;
	image: string;
}

export interface ICard extends Pick<ISlide, 'title' | 'text' | 'link'> {
	isActive: boolean;
}