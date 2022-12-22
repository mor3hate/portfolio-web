import SubHeading from '@/ui/subheading/SubHeading'
import TechnologiesGallery from '@/ui/technologies-gallery/TechnologiesGallery'
import { ITechnologyGallery } from '@/ui/technologies-gallery/technologies.interface'
import SectionContainer from '@/ui/section/SectionContainer'

export default function Technologies({ gallery }: ITechnologyGallery) {
	return (
		<SectionContainer id='technologies'>
			<SubHeading title='<Technologies>' />
			<TechnologiesGallery gallery={gallery} />
			<SubHeading title='</Technologies>' />
		</SectionContainer>
	)
}
