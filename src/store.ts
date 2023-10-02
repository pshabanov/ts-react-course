import { combineReducers, configureStore } from '@reduxjs/toolkit'

import todoReducer from 'features/Todo/todoSlice'
import asyncTodoSlice from 'features/AsyncTodo/asyncTodoSlice'

const rootReducer = combineReducers({
	todos: todoReducer,
	asyncTodos: asyncTodoSlice
})

export const store = configureStore({
	reducer: rootReducer,
})

//export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
