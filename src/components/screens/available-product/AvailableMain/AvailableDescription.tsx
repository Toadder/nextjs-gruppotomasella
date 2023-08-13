import SubHeading from '@/components/ui/Headings/SubHeading'
import { FC } from 'react'

import styles from './AvailableMain.module.scss';
import Property from '@/components/ui/Property/Property'

const AvailableDescription: FC = () => {
	return (
		<div className={styles.description}>
			<SubHeading title='Характеристики' />
			<div>
				<Property className='md:text-xl' name='Страна' value='Италия' />
				<Property className='md:text-xl' name='Размер' value='190/220 h 110 сп. место - 160/200' />
				<Property className='md:text-xl' name='Отделка' value='Ease 01 (кат 1/Оne)' />
				<Property className='md:text-xl' name='Чехлы' value='Cъёмные' />
			</div>
		</div>
	)
}

export default AvailableDescription