import { FC } from 'react'

interface iHeader {
	data: string
}

export const Header: FC<iHeader> = ({ data }) => {
	return (
		<div>
			Header
			<div>{data}</div>
		</div>
	)
}
