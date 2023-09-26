import React from 'react'

interface NewTodoProps {
	value: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	handleClick: () => void
}

const NewTodoForm = ({value, onChange, handleClick}: NewTodoProps) => {
	return (
		<>
			<input
				type="text"
				placeholder="new todo"
				value={ value }
				onChange={ onChange }
			/>
			<button onClick={ handleClick }>Add todo</button>
		</>
	)
}

export default NewTodoForm
