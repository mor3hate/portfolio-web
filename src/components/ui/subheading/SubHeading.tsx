import { ISubHeading } from '@/ui/subheading/subheading.interface'
import styles from './SubHeading.module.scss'
import clsx from 'clsx'

export default function SubHeading({ title, classname }: ISubHeading) {
	return <h2 className={clsx(styles.subHeading, classname)}>{title}</h2>
}
