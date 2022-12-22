import { useContext, useEffect } from 'react'
import { ThemeContext } from '@/providers/ThemeProvider'
import { setStoreLocal } from '@/helpers/localStorage.helper'
import { BsCircleHalf } from 'react-icons/bs'
import { motion } from 'framer-motion'
import styles from './ThemeSwitcher.module.scss'

export default function ThemeSwitcher() {
	const { setIsDark, isDark } = useContext(ThemeContext)

	useEffect(() => {
		setStoreLocal('theme', JSON.stringify(isDark))
		if (isDark) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [isDark])

	return (
		<motion.div
			animate={isDark ? { rotateZ: 180 } : { rotateZ: 0 }}
			transition={{
				type: 'spring',
				bounce: 0.6
			}}
			className={styles.container}
			title='Change theme'
			onClick={() => setIsDark(!isDark)}
		>
			<BsCircleHalf />
		</motion.div>
	)
}
