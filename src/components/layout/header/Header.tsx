import { useCallback, useContext } from 'react'
import dynamic from 'next/dynamic'
import { useOutside } from '@/hooks/useOutside'
import Logo from '@/ui/logo/Logo'
import HeaderNav from './header-nav/HeaderNav'
import { headerLinks } from './header-nav/header-nav.interface'
import { motion } from 'framer-motion'
import { ThemeContext } from '@/providers/ThemeProvider'
import { useHeader } from '@/layout/header/useHeader'
import HamburgerMenu from '@/ui/hamburger-menu/HamburgerMenu'
import styles from './Header.module.scss'

const Hamburger = dynamic(() => import('hamburger-react').then(h => h.Cross), {
	ssr: false
})

export default function Header() {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { data } = useHeader()

	const { isDark } = useContext(ThemeContext)

	const handleBurgerClick = useCallback(() => {
		setIsShow(!isShow)
		document.body.style.overflow = 'hidden'
	}, [isShow])

	return (
		<>
			<header className={styles.header} ref={ref}>
				<Logo />
				<motion.div
					className={styles.navContainer}
					initial={{ x: 500, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 0.8 }}
				>
					<HeaderNav links={headerLinks.links} variant='outside' />
					<span>
						<Hamburger
							rounded
							label='Show menu'
							distance='sm'
							size={30}
							color={isDark ? 'white' : 'black'}
							duration={0.8}
							toggled={isShow}
							onToggle={() => handleBurgerClick()}
						/>
					</span>
				</motion.div>
			</header>
			<HamburgerMenu show={isShow} links={data || []} />
		</>
	)
}
