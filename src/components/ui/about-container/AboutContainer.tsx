import { IAboutContainer } from '@/ui/about-container/about-container.interface'
import Avatar from '@/ui/avatar/Avatar'
import { motion } from 'framer-motion'
import styles from './AboutContainer.module.scss'

export default function AboutContainer({ items }: IAboutContainer) {
	return (
		<div className={styles.aboutContainer}>
			<Avatar imagePath={items[0].imagePath} variant='square' />
			<motion.div
				className={styles.aboutContainerText}
				initial={{ x: '100%', opacity: 0.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 1 }}
			>
				<div>
					<span />
					<span />
					<h3>Bio.js</h3>
					{items[0].bio.map(b => (
						<pre key={b.children[0]._key}>
							<code>{b.children[0].text}</code>
						</pre>
					))}
				</div>
			</motion.div>
		</div>
	)
}
