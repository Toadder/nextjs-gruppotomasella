import { FC } from 'react'
import styles from './Footer.module.scss'
import FooterContacts from './FooterContacts'
import FooterMain from './FooterMain'
import FooterMenu from './FooterMenu'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.body}>
				<FooterMenu />
				<FooterMain />
				<FooterContacts />
			</div>
		</footer>
	)
}

export default Footer