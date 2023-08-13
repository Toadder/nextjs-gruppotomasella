import { ICategory } from '@/shared/types/collection.types'

export interface ICollectionCategory {
	categories: ICategory[];
	isMobile: boolean | null;
	toggleEvent: Date | number;
}