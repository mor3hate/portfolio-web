import { AnimatePresence, motion } from 'framer-motion'
import HeaderNav from '@/layout/header/header-nav/HeaderNav'
import { headerLinks } from '@/layout/header/header-nav/header-nav.interface'
import SocialLinksContainer from '@/ui/social-links-container/SocialLinksContainer'
import { ISocialLinkContainer } from '@/ui/social-links-container/social-link.interface'
import styles from './HamburgerMenu.module.scss'
import { Dispatch, SetStateAction } from 'react'

interface IHamburgerMenu extends Pick<ISocialLinkContainer, 'links'> {
	show: boolean
	setIsVisible: Dispatch<SetStateAction<boolean>>
}

export default function HamburgerMenu({
	show,
	links,
	setIsVisible
}: IHamburgerMenu) {
	return (
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
					<HeaderNav
						links={headerLinks.links}
						variant='inside'
						setIsVisible={setIsVisible}
					/>
					<SocialLinksContainer links={links} variant='menu' />
				</motion.div>
			)}
		</AnimatePresence>
	)
}
