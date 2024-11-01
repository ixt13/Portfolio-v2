import { iTechnologies } from '@/consts'

export const shuffleArray = (array: iTechnologies[]) => {
	const newArray = [...array]
	return newArray.sort(() => Math.random() - 0.5)
}
