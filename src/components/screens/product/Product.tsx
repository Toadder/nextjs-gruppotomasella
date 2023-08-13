import CategorySidebar from '@/components/shared/CategorySidebar/CategorySidebar';
import CategoryContainer from '@/components/ui/CategoryContainer/CategoryContainer';

import ProductContent from './ProductContent/ProductContent';

const Product = () => {
	return (
		<section className={`section`}>
			<CategoryContainer>
				<CategorySidebar />
				<ProductContent />
			</CategoryContainer>
		</section>
	);
};

export default Product;
