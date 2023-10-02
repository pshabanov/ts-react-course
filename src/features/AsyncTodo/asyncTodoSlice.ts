import { Todo } from '../../../types'
import { createSlice } from '@reduxjs/toolkit'

type AsyncTodoSlideType = {
	status: 'idle' | 'loading' | 'finished' | 'error'
	list: Todo[]
}

const initialState: AsyncTodoSlideType = {
	status: 'idle',
	list: [],
}

const todoSlice = createSlice({
	name: '@todos',
	initialState: initialState,
	reducers: {},
})

export default todoSlice.reducer

