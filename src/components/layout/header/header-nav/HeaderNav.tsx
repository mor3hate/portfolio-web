import { IHeaderNav } from './header-nav.interface'
import HeaderNavItem from './HeaderNavItem'
import Button from '@/ui/button/Button'
import ThemeSwitcher from '@/ui/theme-switcher/ThemeSwitcher'
import { useOutside } from '@/hooks/useOutside'
import Modal from '@/ui/modal/Modal'
import styles from './HeaderNav.module.scss'
import clsx from 'clsx'
import Form from '@/ui/form/Form'

export default function HeaderNav({
	links,
	variant,
	setIsVisible
}: IHeaderNav) {
	const { isShow, setIsShow, ref } = useOutside(false)

	return (
		<>
			<nav>
				<ul
					className={clsx(styles.nav, {
						[styles.verticalNav]: variant === 'inside'
					})}
					onClick={() => setIsVisible(false)}
				>
					{variant === 'outside' && <ThemeSwitcher />}
					{links.map(l => (
						<HeaderNavItem
							link={l.link}
							text={l.text}
							key={l.link}
							variant={variant}
						/>
					))}
					<Button onClick={() => setIsShow(true)} title='Contact'>
						Let&apos;s talk!
					</Button>
				</ul>
			</nav>
			<Modal
				isShow={isShow}
				setIsShow={setIsShow}
				title='Keep in touch'
				ref={ref}
			>
				<Form />
			</Modal>
		</>
	)
}
