export const useTheme = () => {
	let currentTheme: string | null = null

	if (window) {
		currentTheme = localStorage.getItem('currentThemePortfolioApp') || 'dark'
	}

	const toggleTheme = () => {
		if (!currentTheme || currentTheme === 'light') {
			localStorage.setItem('currentThemePortfolioApp', 'dark')
			currentTheme = localStorage.getItem('currentThemePortfolioApp')
			document.documentElement.style.setProperty('--bg-color', 'darkslategrey')
			document.documentElement.style.setProperty('--text-color', '#e3e3e3')
		}

		if (currentTheme && currentTheme === 'dark') {
			localStorage.setItem('currentThemePortfolioApp', 'light')
			currentTheme = localStorage.getItem('currentThemePortfolioApp')
			document.documentElement.style.setProperty('--bg-color', 'darkseagreen')
			document.documentElement.style.setProperty('--text-color', '#000000')
		}
	}

	return { currentTheme, toggleTheme }
}
