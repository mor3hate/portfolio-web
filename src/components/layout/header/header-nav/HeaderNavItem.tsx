import Link from 'next/link'
import { IHeaderNavItem } from '@/components/layout/header/header-nav/header-nav.interface'
import styles from './HeaderNav.module.scss'
import clsx from 'clsx'

export default function HeaderNavItem({ text, link, variant }: IHeaderNavItem) {
	return (
		<li
			className={clsx({
				[styles.link]: variant === 'outside',
				[styles.verticalLink]: variant === 'inside'
			})}
		>
			<Link href={link}>{text}</Link>
		</li>
	)
}
