import ContactContainer from '@/ui/form/contact-container/ContactContainer'
import Button from '@/ui/button/Button'
import { useForm } from 'react-hook-form'
import { IContactData } from '@/ui/form/contact-container/contact-interface'
import { useFormPost } from '@/ui/form/useForm'

import styles from './Form.module.scss'
import Link from 'next/link'

export default function Form() {
	const { reset, handleSubmit, formState, register } = useForm<IContactData>({
		mode: 'onChange'
	})

	const { onSubmit } = useFormPost(reset)

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<ContactContainer register={register} formState={formState} />
			<Button className={styles.formButton}>Send</Button>
			<p>
				This site is protected by reCAPTCHA and the
				<Link
					href='https://policies.google.com/privacy'
					target='_blank'
					rel='noreferrer noopener'
				>
					Google Privacy Policy
				</Link>
				and
				<Link
					href='https://policies.google.com/terms'
					target='_blank'
					rel='noreferrer noopener'
				>
					Terms of Service
				</Link>
				apply.
			</p>
		</form>
	)
}
