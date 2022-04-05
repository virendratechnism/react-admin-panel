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

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {
		logIn: (state) => {
			state.isLoggedIn = true
		},
		logOut: (state) => {
			state.isLoggedIn = false
		}
	}
})


export const store = configureStore({
	reducer: {
		alertBox: openSweatSlice.reducer,
		auth: authSlice.reducer
	},
})

<<<<<<< HEAD
export const { show, hide, logIn, logOut } = openSweatSlice.actions
=======
export const { show, hide } = openSweatSlice.actions
export const { logIn, logOut } = authSlice.actions
>>>>>>> 5f295cc3bf724962410a37a615c602f9ec9c078f
