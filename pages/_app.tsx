import type { AppProps } from 'next/app'
import MainProvider from '@/providers/MainProvider'
import HeadProvider from '@/providers/HeadProvider'
import ThemeProvider from '@/providers/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

import '../styles/globals.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<HeadProvider>
			<GoogleReCaptchaProvider
				reCaptchaKey={`${process.env.PUBLIC_RECAPTCHA_KEY}`}
				scriptProps={{
					defer: true,
					appendTo: 'body',
					nonce: undefined
				}}
			>
				<QueryClientProvider client={queryClient}>
					<ThemeProvider>
						<MainProvider>
							<Component {...pageProps} />
						</MainProvider>
					</ThemeProvider>
				</QueryClientProvider>
			</GoogleReCaptchaProvider>
		</HeadProvider>
	)
}
