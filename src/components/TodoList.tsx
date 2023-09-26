import { Todo } from '../../types'
import TodoItem from './TodoItem'
import React from 'react'

interface TodoListProps {
	list: Todo[],
	toggleTodo: (id: Todo['id']) => void,
	removeTodo: (id: Todo['id']) => void
}

const TodoList = ({list, toggleTodo, removeTodo}: TodoListProps) => {
	return (<ul>
		{
			list.map((todo) => (
				<TodoItem
					id={ todo.id }
					title={ todo.title }
					completed={ todo.completed }
					toggleTodo={ toggleTodo }
					removeTodo={ removeTodo }
					style={ {fontStyle: 'italic'} }
					key={ todo.id }/>
			))
		}
	</ul>)
}

export default TodoList
