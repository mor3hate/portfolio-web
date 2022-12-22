import SectionContainer from '@/ui/section/SectionContainer'
import SubHeading from '@/ui/subheading/SubHeading'
import ProjectContainer from '@/ui/projects-container/ProjectContainer'
import { IProjectContainer } from '@/ui/projects-container/projects-interface'

export default function Projects({ projectContainer }: IProjectContainer) {
	return (
		<SectionContainer id='projects'>
			<SubHeading title='<Projects>' />
			<ProjectContainer projectContainer={projectContainer} />
			<SubHeading title='</Projects>' />
		</SectionContainer>
	)
}
