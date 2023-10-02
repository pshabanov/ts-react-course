import React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux-hooks'
import { Todo } from '../../../types'
import { removeTodo, toggleTodo } from './todoSlide'
import TodoItem from '../../components/TodoItem'


const TodoList = () => {
	const list = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	const handleRemoveTodo = (id: Todo['id']) =>{
		dispatch(removeTodo(id))
	}
	const handleToggleTodo = (id: Todo['id']) =>{
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
