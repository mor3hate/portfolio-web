import { IProjectContainerItem } from '@/ui/projects-container/projects-interface'
import Image from 'next/image'
import SocialLinksContainer from '@/ui/social-links-container/SocialLinksContainer'
import styles from './ProjectContainer.module.scss'

export default function ProjectItem({
	technologies,
	imagePath,
	_id,
	title,
	links
}: IProjectContainerItem) {
	return (
		<article className={styles.projectItem}>
			<Image src={imagePath} alt={title} className={styles.img} fill />
			<div className={styles.projectItemTextContainer}>
				<h3 className={styles.projectTitle}>{title}</h3>
				<ul className={styles.projectTech}>
					{technologies.map((t, i) => (
						<li key={t}>{i === technologies.length - 1 ? t : `${t} |`}</li>
					))}
				</ul>
			</div>
			<div className={styles.links}>
				<SocialLinksContainer links={links} variant='menu' />
			</div>
		</article>
	)
}
