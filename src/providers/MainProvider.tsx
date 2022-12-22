import Layout from '@/components/layout/Layout'
import { Roboto } from '@next/font/google'
import { PropsWithChildren } from 'react'

import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	style: ['normal'],
	subsets: ['latin'],
	preload: true
})

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<Layout>
			<div className={roboto.className}>{children}</div>
			<ToastContainer />
		</Layout>
	)
}
