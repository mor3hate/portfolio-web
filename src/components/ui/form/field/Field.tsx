import { IField } from '@/ui/form/field/field.interface'
import { forwardRef } from 'react'

import styles from './Field.module.scss'
import clsx from 'clsx'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, type, error, ...rest }, ref) => {
		return (
			<div
				className={clsx(styles.field, {
					[styles.errorField]: error
				})}
			>
				<label>
					<span>{placeholder}</span>
					<input type={type} ref={ref} {...rest} />
				</label>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)

export default Field
