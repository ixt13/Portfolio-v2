export const getWidthFromName = (value: string): number | undefined => {
	if (
		value === 'html' ||
		value === 'css' ||
		value === 'scss' ||
		value === 'axios'
	) {
		return 20
	}

	if (value === 'mongo') {
		return 16
	}
	if (value === 'mongoose') {
		return 50
	}
	if (value === 'express') {
		return 34
	}
	if (value === 'node') {
		return 28
	}
	if (value === 'react') {
		return 30
	}

	return 24
}
