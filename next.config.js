/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	optimizeFonts: true,
	images: {
		domains: ['cdn.sanity.io']
	},
	env: {
		PROJECT_ID: process.env.REACT_PROJECT_ID,
		DATASET: process.env.REACT_DATASET,
		API_VERSION: process.env.REACT_API_VERSION,
		SERVER_URL: process.env.REACT_SERVER_URL,
		MAIL_PASSWORD: process.env.REACT_MAIL_PASSWORD,
		MAIL_USER: process.env.REACT_MAIL_USER,
		MAIL_PUBLIC: process.env.REACT_MAIL_PUBLIC,
		PUBLIC_RECAPTCHA_KEY: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
		RECAPTCHA_SECRET_KEY: process.env.REACT_RECAPTCHA_SECRET_KEY
	}
}

module.exports = nextConfig
