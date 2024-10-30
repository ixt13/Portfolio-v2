import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	backgroundColor: 'darkslategrey',
	color: '#e3e3e3',
	currentTheme: 'dark',
}

export const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeDark: state => {
			state.backgroundColor = 'darkslategrey'
			state.color = '#e3e3e3'
			state.currentTheme = 'dark'
		},
		setThemeLight: state => {
			state.backgroundColor = 'darkseagreen'
			state.color = '#000000'
			state.currentTheme = 'light'
		},
	},
})

export const { setThemeDark, setThemeLight } = themeSlice.actions

export default themeSlice.reducer
