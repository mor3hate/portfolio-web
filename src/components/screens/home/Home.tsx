import Meta from '@/shared/meta/Meta'
import Hero from '@/screens/home/hero/Hero'
import Projects from '@/screens/home/projects/Projects'
import Technologies from '@/screens/home/technologies/Technologies'
import About from '@/screens/home/about/About'
import Footer from '@/layout/footer/Footer'
import { IHome } from '@/screens/home/home.interface'

export default function Home({ technologies, projects, about }: IHome) {
	return (
		<Meta title='Home' description='Welcome to my personal developer website!'>
			<Hero />
			<About items={about} />
			<Projects projectContainer={projects} />
			<Technologies gallery={technologies} />
			<Footer />
		</Meta>
	)
}
