import { ITechnologyGallery } from '@/ui/technologies-gallery/technologies.interface'
import TechnologiesGalleryItem from '@/ui/technologies-gallery/TechnologiesGalleryItem'
import styles from './TechnologiesGallery.module.scss'

export default function TechnologiesGallery({ gallery }: ITechnologyGallery) {
	return (
		<div className={styles.techContainer}>
			{gallery.map((t, i) => (
				<TechnologiesGalleryItem
					index={i}
					name={t.name}
					progress={t.progress}
					imagePath={t.imagePath}
					_id={t._id}
					key={t._id}
				/>
			))}
		</div>
	)
}
