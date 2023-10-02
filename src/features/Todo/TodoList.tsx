import React from 'react'
import { useAppDispatch } from '../../redux-hooks'
import { Todo } from '../../../types'
import { removeTodo, toggleTodo } from './todoSlice'
import TodoItem from '../../components/TodoItem'
import { selectAllTodos } from './todoSelectors'
import { useSelector } from 'react-redux'


const TodoList = () => {
	const list = useSelector(selectAllTodos)
	const dispatch = useAppDispatch()

	const handleRemoveTodo = (id: Todo['id']) => {
		dispatch(removeTodo(id))
	}
	const handleToggleTodo = (id: Todo['id']) => {
		dispatch(toggleTodo(id))
	}

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

export default TodoList
