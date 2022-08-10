import React, { useContext, useState } from 'react';

import { DataContext } from '../contexts/DataProvider';

export default function FormFooter() {
	const [checkAll, setCheckAll] = useState(false);
	const [todos, setTodos] = useContext(DataContext);

	const handleCheckAll = () => {
		const newTodos = [...todos];
		newTodos.forEach((todo) => {
			todo.complete = !checkAll;
		});
		setTodos(newTodos);
		setCheckAll(!checkAll);
	};

	const newTodosComplete = () => {
		return todos.filter((todo) => todo.complete === false);
	};

	const deleteTodo = () => {
		setTodos(newTodosComplete());
		setCheckAll(false);
	};

	return (
		<>
			{todos.length === 0 ? (
				<div id='nothing'>
					<h2> Nothing Here!!</h2>
					<h2>Add something you need to do</h2>
				</div>
			) : (
				<div className='row'>
					<label htmlFor='all'>
						<input
							type='checkbox'
							name='all'
							id='all'
							onChange={handleCheckAll}
							checked={checkAll}
						/>
						All
					</label>
					<p>
						{/* You have {todos.filter((todo) => todo.complete === false).length}{' '}
						to-do */}
						You have {newTodosComplete().length} to-do
					</p>
					<button id='delete' onClick={deleteTodo}>
						Delete
					</button>
				</div>
			)}
		</>
	);
}
