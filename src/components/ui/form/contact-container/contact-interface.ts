import { FormState, UseFormRegister } from 'react-hook-form'

export interface IContactState {
	register: UseFormRegister<any>
	formState: FormState<IContactData>
}

export interface IContactData {
	email: string
	name: string
	message: string
}
