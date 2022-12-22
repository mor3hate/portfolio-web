import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, Scrollbar } from 'swiper'
import { IProjectContainer } from '@/ui/projects-container/projects-interface'
import ProjectItem from '@/ui/projects-container/ProjectItem'

import 'swiper/scss'
import 'swiper/css/scrollbar'
import styles from './ProjectContainer.module.scss'

export default function ProjectContainer({
	projectContainer
}: IProjectContainer) {
	return (
		<Swiper
			slidesPerView={'auto'}
			centeredSlides
			spaceBetween={30}
			speed={1000}
			modules={[Scrollbar, Mousewheel]}
			mousewheel
			scrollbar={{
				draggable: true
			}}
			className={styles.swiperMain}
			loop
		>
			{projectContainer.map(p => (
				<SwiperSlide key={p._id} className={styles.swiperSlide}>
					<ProjectItem
						imagePath={p.imagePath}
						_id={p._id}
						links={p.links}
						technologies={p.technologies}
						title={p.title}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
