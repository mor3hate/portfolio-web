import Field from '@/ui/form/field/Field'
import { IContactState } from '@/ui/form/contact-container/contact-interface'
import { validateEmail } from '@/shared/validateEmail'

export default function ContactContainer({
	register,
	formState: { errors }
}: IContactState) {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validateEmail,
						message: 'Enter valid e-mail'
					}
				})}
				placeholder='e-mail'
				type='email'
				error={errors.email?.message}
			/>
			<Field
				{...register('name', {
					required: 'Your name is required'
				})}
				placeholder='Your name'
				type='text'
				error={errors.name?.message}
			/>
			<Field
				{...register('message', {
					required: 'Message is required'
				})}
				placeholder='Your message'
				type='text'
				error={errors.message?.message}
			/>
		</>
	)
}
