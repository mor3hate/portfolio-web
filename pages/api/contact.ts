import { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer'
import { Options } from 'nodemailer/lib/mailer'

type TypeCaptchaAnswer = {
	success: boolean
	score: number
}

const verifyRecaptcha = async (token: string): Promise<TypeCaptchaAnswer> => {
	const secretKey = process.env.RECAPTCHA_SECRET_KEY

	const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`

	const res = await fetch(verificationUrl, {
		method: 'POST'
	})

	return res.json()
}

export default async function postMail(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const response = await verifyRecaptcha(req.body.token)

	const transporter = await createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASSWORD
		},
		secure: true
	})

	const mailData: Options = {
		from: process.env.MAIL_USER,
		to: process.env.MAIL_PUBLIC,
		subject: `Message From ${req.body.name}`,
		html: `<div>
			<p>Message: ${req.body.message}</p>
			<p>Sender: ${req.body.email}</p>
</div>`
	}

	try {
		if (response.success && response.score >= 0.5) {
			transporter.sendMail(mailData, err => {
				if (err) {
					console.error(err)
					res.send('error' + String(err))
				} else {
					res.status(200).send('Success!')
				}
			})
		} else {
			res.send('Failed!')
		}
	} catch (error) {
		console.error(error)
		res.send('Failed!')
	}
}
