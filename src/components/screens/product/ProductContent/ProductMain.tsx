import Link from 'next/link';
import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import Heading from '@/components/ui/Headings/Heading';
import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon';
import Property from '@/components/ui/Property/Property';

import { getFormattedPrice } from '@/utils/helpers.util';

import styles from './ProductContent.module.scss';

const ProductMain: FC = () => {
	const formattedPrice = getFormattedPrice(4_478, 'EUR');

	return (
		<div className={styles.main}>
			<div className={styles.mainFlex}>
				<div className={styles.content}>
					<div className={styles.top}>
						<Heading title="Atlante 001" className={styles.title} />
						<div className='md:block hidden'>—</div>
						<div className={styles.price}>{formattedPrice}</div>
					</div>
					<Property name="Размер" value="L252 - P40 - H252" />
					<Property name="Отделка" value="Как на фото" />
				</div>
				<Link href="" className={styles.available}>
					Посмотреть наличие в Москве
					<FontAwesomeIcon name="FaTruckArrowRight" />
				</Link>
			</div>

			<Description>
				<p>
					Итальянская фабрика Tomasella представляет Вам композицию стенки
					Atlante 001. В дамнном варианте использованы отделки по каталогу.
					Напольные модули (базы) в отделке Materico Frassino Cenere. Навесные
					модули из тонированного шпона, отделка Pomice 252 , и придает стенке
					выразительность навесные модули из белого матового лака, отделка
					laccato opaco Bianco Gesso 121. Узкие полки из металла придают стенки
					легкость
				</p>
			</Description>

			<div className={styles.variants}>
				<div>Варианты других отделок:</div>
				<ul>
					<li>
						<a href="">ESSENZE,</a>
					</li>
					<li>
						<a href="">LACCATI OPACHI E LUCIDI,</a>
					</li>
					<li>
						<a href="">MATERICO NODATO</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ProductMain;
