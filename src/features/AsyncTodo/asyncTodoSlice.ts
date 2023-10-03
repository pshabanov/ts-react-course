import { Todo } from '../../../types'
import { createSlice } from '@reduxjs/toolkit'
import { createTodo, fetchAllTodos, removeTodo, toggleTodo } from './todoAsyncActions'

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
			.addCase(toggleTodo.fulfilled, (state, action)=>{
				const todo = state.list.find(el => el.id === action.payload.id)

				if (todo) todo.completed = !todo.completed
			})
			.addCase(removeTodo.fulfilled, (state, action) => {
				state.list = state.list.filter(item=> item.id !== action.payload)
			})
	}
})

export default todoSlice.reducer

