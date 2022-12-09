import Link from 'next/link'
import { IHeaderNavItem } from '@/components/layout/header/header-nav/header-nav.interface'
import styles from './HeaderNav.module.scss'

export default function HeaderNavItem({ text, link }: IHeaderNavItem) {
	return (
		<li className={styles.link}>
			<Link href={link}>{text}</Link>
		</li>
	)
}
