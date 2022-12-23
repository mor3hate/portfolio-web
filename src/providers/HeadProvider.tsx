import Head from 'next/head'
import FavIcon from '../shared/FavIcon'
import { PropsWithChildren } from 'react'

export default function HeadProvider({ children }: PropsWithChildren) {
	return (
		<>
			<Head>
				<FavIcon />
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='application-name' content='Michael' />
				<meta name='theme-color' content={'#F4F5FE'} />
				<meta name='apple-mobile-web-app-capable' content='yes' />
				<meta name='apple-mobile-web-app-status-bar-style' content='default' />
				<meta name='apple-mobile-web-app-title' content='Michael portfolio' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='msapplication-tap-highlight' content='no' />
			</Head>
			{children}
		</>
	)
}
