import { useRef } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { useInView } from 'framer-motion'
import styles from './Avatar.module.scss'

type IAvatar = {
	imagePath: string
	variant: 'rounded-anim' | 'rounded'
}

export default function Avatar({ imagePath, variant }: IAvatar) {
	const ref = useRef<HTMLSpanElement>(null)
	const isInView = useInView(ref)

	return (
		<div
			className={clsx(styles.avatar, {
				[styles.roundedAnim]: variant === 'rounded-anim'
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
				unoptimized={variant === 'rounded'}
				className={styles.avatarImg}
			/>
			{variant === 'rounded-anim' && (
				<span
					ref={ref}
					className={clsx({
						[styles.ripple]: isInView
					})}
				/>
			)}
		</div>
	)
}
