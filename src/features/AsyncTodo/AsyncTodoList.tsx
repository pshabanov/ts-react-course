import React, { useEffect } from 'react'
import { useAppDispatch } from '../../redux-hooks'
import { Todo } from '../../../types'
import TodoItem from '../../components/TodoItem'
import { useSelector } from 'react-redux'
import { selectAsyncTodos } from './asyncTodosSelector'
import { fetchAllTodos } from './todoAsyncActions'


const AsyncTodoList = () => {
	const {list} = useSelector(selectAsyncTodos)
	const dispatch = useAppDispatch()

	const handleRemoveTodo = (id: Todo['id']) => {
	// 	dispatch(removeTodo(id))
	}
	const handleToggleTodo = (id: Todo['id']) => {
	// 	dispatch(toggleTodo(id))
	}

	useEffect(()=>{
		dispatch(fetchAllTodos)
	}, [])

	return (<ul>
		{
			list.map((todo) => (
				<TodoItem
					id={ todo.id }
			title={ todo.title }
			completed={ todo.completed }
			toggleTodo={ handleToggleTodo }
			removeTodo={ handleRemoveTodo }
			style={ {fontStyle: 'italic'} }
	key={ todo.id }/>
))
}
	</ul>)
}

export default AsyncTodoList
