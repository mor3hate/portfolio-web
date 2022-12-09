import Layout from '@/components/layout/Layout'
import { Roboto } from '@next/font/google'
import { PropsWithChildren } from 'react'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	style: ['normal'],
	subsets: ['latin']
})

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<Layout>
			<div className={roboto.className}>{children}</div>
		</Layout>
	)
}
