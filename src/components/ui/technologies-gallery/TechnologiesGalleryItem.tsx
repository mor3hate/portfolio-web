import { useState } from 'react'
import { ITechnologyGalleryItem } from '@/ui/technologies-gallery/technologies.interface'
import Image from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import styles from './TechnologiesGallery.module.scss'

export default function TechnologiesGalleryItem({
	name,
	progress,
	imagePath,
	_id,
	index
}: ITechnologyGalleryItem) {
	const [hover, setHover] = useState(false)

	return (
		<motion.article
			className={clsx(styles.technologyItem, {
				[styles.techHover]: hover
			})}
			initial={{ opacity: 0, translateX: -50 }}
			whileInView={{ opacity: 1, translateX: 0 }}
			viewport={{ once: true }}
			transition={{
				duration: 0.3,
				delay: index! * 0.2
			}}
			onHoverStart={() => setHover(true)}
			onHoverEnd={() => setHover(false)}
			onClick={() => setHover(!hover)}
		>
			<div
				className={clsx(styles.itemFront, {
					[styles.moveFront]: hover
				})}
			>
				<Image
					src={imagePath}
					alt={name}
					className={styles.img}
					fill
					sizes='24rem'
				/>
			</div>
			<div
				className={clsx(styles.itemBack, {
					[styles.moveBack]: hover
				})}
			>
				<div className={styles.progressBar}>
					<svg>
						<circle cx='70' cy='70' r='70' />
						<circle
							cx='70'
							cy='70'
							r='70'
							style={
								hover
									? { strokeDashoffset: 440 - (440 * Number(progress)) / 100 }
									: undefined
							}
						/>
					</svg>
					<div>
						<h3>{name}</h3>
						<span>{progress}%</span>
					</div>
				</div>
			</div>
		</motion.article>
	)
}
