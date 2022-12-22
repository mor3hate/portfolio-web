import Image from 'next/image'
import clsx from 'clsx'
import styles from './Avatar.module.scss'

type IAvatar = {
	imagePath: string
	variant: 'square' | 'rounded'
}

export default function Avatar({ imagePath, variant }: IAvatar) {
	return (
		<div
			className={clsx(styles.avatar, {
				[styles.square]: variant === 'square'
			})}
		>
			<Image
				src={imagePath ? imagePath : ''}
				alt='avatar'
				fill
				sizes='20rem,20rem,
				(max-width: 345px) 18rem,
              18rem
				'
				priority
				unoptimized
				className={styles.avatarImg}
			/>
		</div>
	)
}
