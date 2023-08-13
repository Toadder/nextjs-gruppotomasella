import { ICategory } from '@/shared/types/collection.types'

export interface IStyle { 
	style: string;
	categories: ICategory[];
	catalogUrl: string;
	description: string;
	image: string;
}

export interface ICard extends Pick<IStyle, 'style' | 'categories'> {}