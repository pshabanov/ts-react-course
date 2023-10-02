import AddNewItem from 'components/NewItem'
import { useAppDispatch } from '../../redux-hooks'
import { addTodo } from './todoSlide'


export const NewTodo = () => {
	const dispatch = useAppDispatch()

	const handleNewTodo = (title: string) => {
		dispatch(addTodo(title))
	}

	return (
		<AddNewItem placeholder="add new todo" handleClick={handleNewTodo} />
	)
}
