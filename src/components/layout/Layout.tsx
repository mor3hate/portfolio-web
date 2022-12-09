import { PropsWithChildren } from 'react'
import Header from './header/Header'
import styles from './Layout.module.scss'
import Footer from '@/components/layout/footer/Footer'

export default function Layout({ children }: PropsWithChildren) {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.main}>{children}</main>
			<Footer />
		</div>
	)
}
