import { FC } from 'react'
import * as SiIcons from 'react-icons/si'
import { SiIconType } from '@/shared/types/icon.types'

export const SiIcon: FC<{ name: SiIconType }> = ({ name }) => {
	const IconComponent = SiIcons[name]
	return <IconComponent />
}
