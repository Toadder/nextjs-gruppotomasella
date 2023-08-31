export interface IHeading {
	title: string;
	className?: string;
}

export interface IBorderedHeading extends IHeading {
	type?: 'h1' | 'h2';
}