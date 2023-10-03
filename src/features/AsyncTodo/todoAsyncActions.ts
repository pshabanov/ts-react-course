import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../../types'

export const fetchAllTodos = createAsyncThunk(
	'todos/fetchTodos',
	async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
		return (await response.json()) as Todo[]
	},
)

export const createTodo = createAsyncThunk(
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
		console.log(response, title, newTodo)

		return {
			title: newTodo.title,
			completed: newTodo.completed,
			id: (await response.json()) + Math.random() as Todo['id'],
		} as Todo
	},
)
