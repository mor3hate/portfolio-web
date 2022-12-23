import Form from '@/ui/form/Form'
import Link from 'next/link'
import { MdOutlineMailOutline } from 'react-icons/md'
import SocialLinksContainer from '@/ui/social-links-container/SocialLinksContainer'
import { useHeader } from '@/layout/header/useHeader'
import { motion } from 'framer-motion'
import styles from './Footer.module.scss'

export default function Footer() {
	const { data } = useHeader()

	return (
		<footer className={styles.footer}>
			<motion.div
				className={styles.footerForm}
				initial={{ x: '-100%', opacity: 0.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 1 }}
			>
				<h3>Contact me</h3>
				<Form />
			</motion.div>
			<motion.div
				className={styles.footerSocial}
				initial={{ x: '100%', opacity: 0.5 }}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 1 }}
			>
				<li className='HeaderNav_link__jMlJr'>
					<MdOutlineMailOutline />
					<Link href='mailto:mor3work.box@gmail.com'>
						mor3work.box@gmail.com
					</Link>
				</li>
				<SocialLinksContainer links={data || []} variant='footer' />
			</motion.div>
		</footer>
	)
}
