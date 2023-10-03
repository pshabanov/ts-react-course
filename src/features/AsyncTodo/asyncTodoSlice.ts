import { Todo } from '../../../types'
import { createSlice } from '@reduxjs/toolkit'
import { createTodo, fetchAllTodos } from './todoAsyncActions'

export type AsyncTodoSlice = {
	status: 'idle' | 'loading' | 'finished' | 'error'
	list: Todo[]
}

const initialState: AsyncTodoSlice = {
	status: 'idle',
	list: [],
}

const todoSlice = createSlice({
	name: '@todos',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchAllTodos.pending, (state)=>{
				state.status = 'loading'
			})
			.addCase(fetchAllTodos.fulfilled, (state, action)=>{
				state.status = 'finished'
				state.list = action.payload
			})
			.addCase(fetchAllTodos.rejected, (state)=>{
				state.status = 'error'
			})
			.addCase(createTodo.fulfilled, (state, action)=>{
				state.list.push(action.payload)
				state.status = 'finished'
			})
	}
})

export default todoSlice.reducer

