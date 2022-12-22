import Link from 'next/link'
import { ISocialLinkItem } from './social-link.interface'
import { SiIcon } from '@/ui/SiIcon'

export default function SocialLink({ link, icon, title }: ISocialLinkItem) {
	return (
		<Link href={link} target='_blank'>
			<SiIcon name={icon} />
			<span>{title}</span>
		</Link>
	)
}
