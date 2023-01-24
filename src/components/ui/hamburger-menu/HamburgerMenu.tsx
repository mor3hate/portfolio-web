import { AnimatePresence, motion } from 'framer-motion'
import HeaderNav from '@/layout/header/header-nav/HeaderNav'
import { headerLinks } from '@/layout/header/header-nav/header-nav.interface'
import SocialLinksContainer from '@/ui/social-links-container/SocialLinksContainer'
import { ISocialLinkContainer } from '@/ui/social-links-container/social-link.interface'
import styles from './HamburgerMenu.module.scss'
import { forwardRef } from 'react'

interface IHamburgerMenu extends Pick<ISocialLinkContainer, 'links'> {
	show: boolean
}

const HamburgerMenu = forwardRef<HTMLDivElement, IHamburgerMenu>(
	({ links, show }, ref) => (
		<div ref={ref}>
			<AnimatePresence>
				{show && (
					<motion.div
						className={styles.hamburgerMenu}
						key='hamburger-menu'
						initial={{ opacity: 0, left: '-100%' }}
						animate={{
							left: 0,
							opacity: 1
						}}
						exit={{ opacity: 0, left: '-100%' }}
						transition={{ duration: 0.6 }}
					>
						<HeaderNav links={headerLinks.links} variant='inside' />
						<SocialLinksContainer links={links} variant='menu' />
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
)

HamburgerMenu.displayName = 'HamburgerMenu'

export default HamburgerMenu
