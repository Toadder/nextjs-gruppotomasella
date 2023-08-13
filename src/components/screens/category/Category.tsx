import { FC } from 'react';

import CategoryContainer from '@/components/ui/CategoryContainer/CategoryContainer';

import CategorySidebar from '../../shared/CategorySidebar/CategorySidebar';

import CategoryContent from './CategoryContent/CategoryContent';

const Category: FC = () => {
	return (
		<section className={`section`}>
			<CategoryContainer>
				<CategorySidebar />
				<CategoryContent />
			</CategoryContainer>
		</section>
	);
};

export default Category;
