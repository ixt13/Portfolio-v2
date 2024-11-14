import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
	const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

	return NextResponse.json(response.data)
}
