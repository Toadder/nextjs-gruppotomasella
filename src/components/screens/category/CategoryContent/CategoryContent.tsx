import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Headings/Heading';

import styles from './CategoryContent.module.scss';
import CategoryItems from './CategoryItems'

const CategoryContent: FC = () => {
	return (
		<div className={styles.content}>
			<Heading title="Категория" />
			<Description>
				<p>
					Жилая зона – это место для приёма гостей и релаксации. Gruppo
					Tomasella предлагает предметы мебели и модульные стенки для гостиной
					различных расцветок из разных сортов дерева, с помощью которых можно
					обставить любое помещение с учётом самых актуальных тенденций и
					потребностей, диктуемых особенностями помещения. Стенки коллекции
					Atlante - это новый дизайн модульной мебели от итальянской фабрики
					Tomasella. Большой ассортимент напольных и навесных модулей, позволяет
					скомпоновать тысячи композиций. Часть композиций представлена в
					каталоге и просчитана, но возможности этой коллекции не ограничены.
					Одной из новинок служат скошенные фасады.
				</p>
			</Description>
			<CategoryItems />
		</div>
	);
};

export default CategoryContent;
