import React from 'react';

import './App.css';

import Navbar from './components/Navbar';
import FormInput from './components/FormInput';
import List from './components/List';
import FormFooter from './components/FormFooter';
import { DataProvider } from './contexts/DataProvider';

function App() {
	return (
		<DataProvider>
			<div className='App'>
				<Navbar />
				<div className='Todo'>
					<h1>To Do List</h1>
					<FormInput />
					<List />
					<FormFooter />
				</div>
			</div>
		</DataProvider>
	);
}

export default App;
