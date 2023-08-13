import BorderedHeading from '@/components/ui/Headings/BorderedHeading'
import { FC } from 'react'

import styles from './Consult.module.scss';
import ConsultForm from './ConsultForm'

const Consult: FC = () => {
	return (
		<section className={`section ${styles.root}`}>
			<div className={styles.inner}>
				<BorderedHeading title='Заказать консультацию' />
				<ConsultForm />
			</div>
		</section>
	)
}

export default Consult