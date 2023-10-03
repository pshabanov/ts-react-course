import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../../types'
import { AsyncTodoSlice } from './asyncTodoSlice'

export const fetchAllTodos = createAsyncThunk<
	Todo[],
	undefined,
	{ state: { asyncTodos: AsyncTodoSlice } }>(
	'todos/fetchTodos',
	async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		return (await response.json()) as Todo[]
	},
	{
		condition: (_, {getState}) => {
			const {status} = getState().asyncTodos
			if (status === 'loading') {
				return false
			}
		},
	},
)

export const createTodo = createAsyncThunk<Todo, string>(
	'todo/createTodo',
	async (title: string) => {
		const newTodo: Required<Omit<Todo, 'id'>> = {
			title: title,
			userId: 100,
			completed: false,
		}
		const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'json',
			},
			body: JSON.stringify(newTodo),
		})
		return {
			title: newTodo.title,
			completed: newTodo.completed,
			id: (await response.json()) + Math.random() as Todo['id'],
		}
	},
)

export const toggleTodo = createAsyncThunk<
	Todo,
	Todo['id'],
	{ state: { asyncTodos: AsyncTodoSlice }, rejectValue: string }
>(
	'todo/toggleTodo',
	async (id: Todo['id'], {getState, rejectWithValue}) => {
		const todo = getState().asyncTodos.list.find(el => el.id === id)
		if (todo){
			const response = await fetch('https://jsonplaceholder.typicode.com/todos' + id, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'json',
				},
				body: JSON.stringify({completed: !todo.completed})
			})
			if (!response.ok) return rejectWithValue('Impossible to update todo with id: ' + id)

			return await response.json()
		}
		return rejectWithValue('No such todo with id: ' + id)
	},
)

export const removeTodo = createAsyncThunk<Todo['id'], Todo['id'], { rejectValue: string }>(
	'todo/removeTodo',
	async (id: Todo['id'], {rejectWithValue}) => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos' + id, {
			method: 'DELETE',
		})
		if (!response.ok) return rejectWithValue('Impossible to delete todo with id: ' + id)

		return id
	},
)
