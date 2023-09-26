import React, { useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem'
import NewTodoForm from './components/NewTodoForm'
import { Todo } from '../types'


function App() {

	const [text, setText] = useState('')
	const [todos, setTodos] = useState<Todo[]>([])

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setText(event.target.value)
	}
	const addTodo = () => {
		const newTodo:Todo = {
			id: new Date().toString(),
			title: text,
			completed: false
		}
		setTodos([newTodo, ...todos])
		setText('')
	}

	return (
		<div className="App">
			<NewTodoForm value={ text } onChange={ handleInput } handleClick={ addTodo }/>
			<TodoItem id="1" title="title" completed={ true } style={ {fontStyle: 'italic'} }/>
		</div>
	)
}

export default App
