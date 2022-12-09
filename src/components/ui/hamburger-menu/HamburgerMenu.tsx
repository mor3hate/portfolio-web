import { motion } from 'framer-motion'
import styles from './HamburgerMenu.module.scss'

type IHamburgerMenu = {
	show: boolean
}

export default function HamburgerMenu({ show }: IHamburgerMenu) {
	return (
		<motion.div
			className={styles.hamburgerMenu}
			animate={
				show
					? {
							right: 0,
							opacity: 1
					  }
					: {
							left: '-100%',
							opacity: 0
					  }
			}
			transition={{ duration: 0.5 }}
		></motion.div>
	)
}
