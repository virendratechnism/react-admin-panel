import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
	openSweat: false,
	login: false
}

const openSweatSlice = createSlice({
	name: 'alertBox',
	initialState,
	reducers: {
		show: (state) => {
			state.openSweat = true
		},

		hide: (state) => {
			state.openSweat = false
		},
		logIn: (state) => {
			state.login = true
		},
		logOut: (state) => {
			state.login = false
		},
	}
})


export const store = configureStore({
	reducer: {
		alertBox: openSweatSlice.reducer
	},
})

export const { show, hide, logIn, logOut } = openSweatSlice.actions
