import BorderedHeading from '@/components/ui/Headings/BorderedHeading'
import { FC } from 'react'

import styles from './Reservation.module.scss';
import ReservationItems from './ReservationItems/ReservationItems'
import ReservationForm from './ReservationForm/ReservationForm'

const Reservation: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title='Предварительный заказ мебели из наличия' />
				<ReservationItems />
				<ReservationForm />
			</div>
		</section>
	)
}

export default Reservation