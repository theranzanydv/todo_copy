import React, { useContext } from 'react';

import ListItem from './ListItem';
import { DataContext } from '../contexts/DataProvider';

export default function List() {
	const [todos, setTodos] = useContext(DataContext);
	// console.log(todos);

	const switchComplete = (id) => {
		const newTodos = [...todos];
		newTodos.forEach((todo, index) => {
			if (index === id) {
				todo.complete = !todo.complete;
			}
		});
		setTodos(newTodos);
	};

	const handleEditTodos = (editValue, id) => {
		const newTodos = [...todos];
		newTodos.forEach((todo, index) => {
			if (index === id) {
				todo.name = editValue;
			}
		});
		setTodos(newTodos);
	};

	return (
		<ul className='ul'>
			{todos.map((todo, index) => (
				<ListItem
					todo={todo}
					key={index}
					id={index}
					checkComplete={switchComplete}
					handleEditTodos={handleEditTodos}
				/>
			))}
		</ul>
	);
}
