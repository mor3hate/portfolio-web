import { ISocialLinkContainer } from './social-link.interface'
import SocialLink from '@/ui/social-links-container/SocialLink'
import styles from './SocialLinksContainer.module.scss'

export default function SocialLinksContainer({ links }: ISocialLinkContainer) {
	return (
		<nav className={styles.linksContainer}>
			{links.map(l => (
				<SocialLink link={l.link} icon={l.icon} title={l.title} key={l.link} />
			))}
		</nav>
	)
}
