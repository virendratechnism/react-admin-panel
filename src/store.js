import { configureStore, createSlice } from '@reduxjs/toolkit'

const initialState = {
	openSweat: false,
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
	}
})


export const store = configureStore({
	reducer: {
		alertBox: openSweatSlice.reducer
	},
})

export const { show, hide } = openSweatSlice.actions
