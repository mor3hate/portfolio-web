import { ISocialLinkContainer } from './social-link.interface'
import SocialLink from '@/ui/social-links-container/SocialLink'
import clsx from 'clsx'
import styles from './SocialLinksContainer.module.scss'

export default function SocialLinksContainer({
	links,
	variant
}: ISocialLinkContainer) {
	return (
		<nav
			className={clsx(styles.linksContainer, {
				[styles.containerFooter]: variant === 'footer'
			})}
		>
			{links.map(l => (
				<SocialLink link={l.link} icon={l.icon} title={l.title} key={l.link} />
			))}
		</nav>
	)
}
