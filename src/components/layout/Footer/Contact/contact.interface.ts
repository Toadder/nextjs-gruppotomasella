interface ILink {
	text: string;
	href: string;
}

export interface IContact {
	title?: string;
	data: string | ILink[];
}
