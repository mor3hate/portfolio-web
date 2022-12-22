import { forwardRef, PropsWithChildren } from 'react'
import { IModal, Ref } from '@/ui/modal/modal.interface'
import { AiFillCloseCircle } from 'react-icons/ai'
import { AnimatePresence, motion } from 'framer-motion'

import styles from './Modal.module.scss'

const Modal = forwardRef<Ref, PropsWithChildren<IModal>>(
	({ children, setIsShow, title, isShow }, ref) => {
		return (
			<AnimatePresence>
				{isShow && (
					<>
						<motion.div
							ref={ref}
							key='modal'
							className={styles.modal}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							<AiFillCloseCircle onClick={() => setIsShow(false)} />
							<h3>{title}</h3>
							{children}
						</motion.div>
						<motion.div
							key='modal-overlay'
							className={styles.modalOverlay}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						/>
					</>
				)}
			</AnimatePresence>
		)
	}
)

export default Modal
