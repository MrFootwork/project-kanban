import './styles/reset.css';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import tasks from './data/tasks.json';

import Dashboard from './pages/Dashboard';
import TaskDetails from './pages/TaskDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
	const [list, setList] = useState(tasks);

	return (
		<>
			<Navbar />
			<Sidebar />
			<Footer />

			<Routes>
				<Route path='/' element={<Dashboard list={list} setList={setList} />} />
				<Route path='/task/:taskID' element={<TaskDetails list={list} />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}

export default App;
