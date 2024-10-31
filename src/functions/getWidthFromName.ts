export const getWidthFromName = (value: string): number | undefined => {
	if (
		value === 'html' ||
		value === 'css' ||
		value === 'scss' ||
		value === 'axios'
	) {
		return 30
	}

	if (value === 'mongo') {
		return 22
	}
	if (value === 'mongoose') {
		return 70
	}
	if (value === 'express') {
		return 50
	}
	if (value === 'node') {
		return 38
	}
	if (value === 'react') {
		return 46
	}

	return 40
}
