import FontAwesomeIcon from '@/components/ui/Icons/FontAwesomeIcon'
import { FC } from 'react'

import styles from './DealerMain.module.scss';

interface IDealerItem {
	title: string;
}

// FIXME: key={index}
const DealerItem: FC<IDealerItem> = ({ title }) => {
	return (
		<div className={styles.item}>
			<div className={styles.title}>{title}</div>
			<ul className={styles.files}>
				{
					Array(6).fill('').map((_, index) => (
						<li>
							<a href="">
								<FontAwesomeIcon name='FaFile' />
								<span>Filename.pdf</span>
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default DealerItem