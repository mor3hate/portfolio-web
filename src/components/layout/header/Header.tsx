import Logo from '@/ui/logo/Logo'
import HeaderNav from '@/components/layout/header/header-nav/HeaderNav'
import { headerLinks } from '@/components/layout/header/header-nav/header-nav.interface'
import { Cross as Hamburger } from 'hamburger-react'
import { useOutside } from '@/hooks/useOutside'
import HamburgerMenu from '@/ui/hamburger-menu/HamburgerMenu'
import { motion } from 'framer-motion'
import styles from './Header.module.scss'

export default function Header() {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<>
			<header className={styles.header} ref={ref}>
				<Logo />
				<motion.div
					className={styles.navContainer}
					initial={{ x: 500, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
				>
					<HeaderNav links={headerLinks.links} />
					<span>
						<Hamburger
							rounded
							label='Show menu'
							distance='sm'
							size={30}
							duration={0.8}
							toggled={isShow}
							onToggle={() => setIsShow(!isShow)}
						/>
					</span>
				</motion.div>
			</header>
			<HamburgerMenu show={isShow} />
		</>
	)
}
