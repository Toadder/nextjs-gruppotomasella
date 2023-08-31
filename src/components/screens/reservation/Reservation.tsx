import BorderedHeading from '@/components/ui/Headings/BorderedHeading'
import { FC } from 'react'

import CategoriesList from '@/components/shared/CategoriesList/CategoriesList'
import styles from './Reservation.module.scss'
import ReservationForm from './ReservationForm/ReservationForm'
import ReservationItems from './ReservationItems/ReservationItems'

const Reservation: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title='Предварительный заказ мебели из наличия' />
				<CategoriesList />
				<ReservationItems />
				<ReservationForm />
			</div>
		</section>
	)
}

export default Reservation