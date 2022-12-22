import SectionContainer from '@/ui/section/SectionContainer'
import SubHeading from '@/ui/subheading/SubHeading'
import AboutContainer from '@/ui/about-container/AboutContainer'
import { IAboutContainer } from '@/ui/about-container/about-container.interface'

export default function About({ items }: IAboutContainer) {
	return (
		<SectionContainer id='about-me'>
			<SubHeading title='<About>' />
			<AboutContainer items={items} />
			<SubHeading title='</About>' />
		</SectionContainer>
	)
}
