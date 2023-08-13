import { FC } from 'react';

import Description from '@/components/ui/Description/Description';
import SubHeading from '@/components/ui/Headings/SubHeading';

import styles from './AvailableInfo.module.scss';

const AvailableInfo: FC = () => {
	return (
		<div className={styles.info}>
			<SubHeading title="Дополнительная информация" />
			<Description>
				<p>
					Итальянская фабрика Tomasella представляет Вам композицию стенки
					Atlante 1 В дамнном варианте использованы отделки по каталогу.
					Напольные модули (базы) в отделке Materico Frassino Cenere. Навесные
					модули из тонированного шпона, отделка Pomice 252 , и придает стенке
					выразительность навесные модули из белого матового лака, отделка
					laccato opaco Bianco Gesso 121 Узкие полки из металла придают стенки
					легкость
				</p>
			</Description>
		</div>
	);
};

export default AvailableInfo;
