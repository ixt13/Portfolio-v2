import { iTechnologies } from '@/consts'

export const shuffleArray = (array: iTechnologies[]) => {
	return array.sort(() => Math.random() - 0.5)
}
