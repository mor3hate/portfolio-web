import Link from 'next/link'
import { IHeaderNavItem } from '@/components/layout/header/header-nav/header-nav.interface'
import styles from './HeaderNav.module.scss'
import clsx from 'clsx'

export default function HeaderNavItem({
	text,
	link,
	variant,
	setIsVisible
}: IHeaderNavItem) {
	return (
		<li
			className={clsx({
				[styles.link]: variant === 'outside',
				[styles.verticalLink]: variant === 'inside'
			})}
			onClick={() => setIsVisible(false)}
		>
			<Link href={link}>{text}</Link>
		</li>
	)
}
