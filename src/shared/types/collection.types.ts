export interface ICategory {
	title: string;
	link: string;
}

export interface ICollection {
	collection: string;
	categories: ICategory[];
}