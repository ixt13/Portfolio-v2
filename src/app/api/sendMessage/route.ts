import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const { MAILER_EMAIL, MAILER_PASS } = process.env

export async function POST(req: Request) {
	const { firstName, lastName, email, phoneNumber, message } = await req.json()
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: MAILER_EMAIL,
				pass: MAILER_PASS,
			},
		})
		const mailOptions = {
			from: MAILER_EMAIL,
			to: 'ixt13@yahoo.com',
			subject: `Portfolio ${firstName} ${lastName} ${email}  ${phoneNumber}`,
			text: message,
		}
		const info = await transporter.sendMail(mailOptions)
		console.log('Email sent: ' + info.response)
		return NextResponse.json({
			message: 'Email sent successfully',
			info: info.response,
		})
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json({
			message: 'Unknown error occurred',
			error: String(error),
		})
	}
}
