import { IContactData } from '@/ui/form/contact-container/contact-interface'

export interface IFetchPost {
	path: string
	data: IContactData
	executeRecaptcha:
		| ((action?: string | undefined) => Promise<string>)
		| undefined
}
