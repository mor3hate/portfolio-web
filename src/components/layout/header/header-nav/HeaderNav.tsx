import { IHeaderNav } from '@/components/layout/header/header-nav/header-nav.interface'
import HeaderNavItem from '@/components/layout/header/header-nav/HeaderNavItem'
import Button from '@/ui/button/Button'
import styles from './HeaderNav.module.scss'

export default function HeaderNav({ links }: IHeaderNav) {
	return (
		<nav>
			<ul className={styles.nav}>
				{links.map(l => (
					<HeaderNavItem link={l.link} text={l.text} key={l.link} />
				))}
				<Button>Let&apos;s talk!</Button>
			</ul>
		</nav>
	)
}
