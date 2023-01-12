import Layout from '@/components/layout/Layout'
import { PropsWithChildren } from 'react'

import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

export default function MainProvider({ children }: PropsWithChildren) {
	return (
		<Layout>
			{children}
			<ToastContainer />
		</Layout>
	)
}
