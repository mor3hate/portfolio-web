import { TypeAnimation } from 'react-type-animation'
import Avatar from '@/ui/avatar/Avatar'
import SectionContainer from '@/ui/section/SectionContainer'
import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<SectionContainer className={styles.hero}>
			<TypeAnimation
				sequence={['FRONTEND DEVELOPER', 30000, '']}
				wrapper='h1'
				cursor
				repeat={Infinity}
				speed={30}
			/>
			<Avatar imagePath='/images/hero.jpg' variant='rounded' />
		</SectionContainer>
	)
}
