import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function GET() {
	try {
		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'octav9x@gmail.com',
				pass: ' ',
			},
		})

		const mailOptions = {
			from: 'octav9x@gmail.com',
			to: 'ixt13@yahoo.com',
			subject: 'Sending Email using Node.js',
			text: 'That was easy!',
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
