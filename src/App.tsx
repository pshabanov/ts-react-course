import './App.css'
import TodoList from './features/Todo/TodoList'
import { NewTodo } from './features/Todo/NewTodo'
import { NewAsyncTodo } from './features/AsyncTodo/NewAsyncTodo'
import AsyncTodoList from './features/AsyncTodo/AsyncTodoList'


function App() {

	return (
		<div className="App">
			<NewTodo/>
			<TodoList/>

			<hr/>

			<NewAsyncTodo/>
			<AsyncTodoList/>
		</div>
	)
}


export default App
