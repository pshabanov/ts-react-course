import React from 'react'
import { Todo } from '../../types'


export interface TodoItemProps extends Todo {
	toggleTodo: (id: Todo['id']) => void,
	removeTodo: (id: Todo['id']) => void
	style?: React.CSSProperties
}

const TodoItem = ({id, title, completed, style = {}, removeTodo, toggleTodo}: TodoItemProps) => {
	return (
		<li style={ {color: 'red', backgroundColor: 'white', ...style} }>
			<input
				type="checkbox"
				checked={ completed }
				onChange={ () => {
					toggleTodo(id)
				} }/>
			<span>{ title }</span>
			<span onClick={ () => {
				removeTodo(id)
			} }>&times;</span>
		</li>
	)
}

export default TodoItem
