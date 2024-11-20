import { useNavigate } from 'react-router-dom';
import '../styles/pageAddTask.css';
import React, { useState } from 'react';

function AddTask({ list, setList }) {
	const navigate = useNavigate();

	const [task, setTask] = useState({
		title: '',
		description: '',
		assignee: '',
		status: 'To Do',
		priority: 'High',
		createdDate: '2023-01-01',
		dueDate: '2023-01-01',
	});

	const handleTask = e => {
		const value = e.target.value;
		setTask({ ...task, [e.target.name]: value });
	};

	const handleSubmit = e => {
		e.preventDefault();

		// generate a new unique ID as a string of integers in a sequence
		const getNextId = list => {
			if (list.length === 0) return '1';

			const maxId = list.reduce((max, oneTask) => {
				return parseInt(oneTask.id, 10) > parseInt(max.id, 10) ? oneTask : max;
			}, list[0]);

			return (parseInt(maxId.id, 10) + 1).toString();
		};

		const newtask = {
			id: getNextId(list),
			title: task.title,
			description: task.description,
			assignee: task.assignee,
			status: task.status,
			priority: task.priority,
			createdDate: task.createdDate,
			dueDate: task.dueDate,
		};

		setList([...list, newtask]);

		setTask({
			title: '',
			description: '',
			assignee: '',
			status: 'To Do',
			priority: 'High',
			createdDate: '2023-01-01',
			dueDate: '2023-01-01',
		});

		navigate('/');
	};

	return (
		<section id='pageAddTask'>
			<h2 className='title'>Add a Task</h2>

			<form onSubmit={handleSubmit}>
				<div className='input title'>
					<label htmlFor='title'>Title</label>
					<input
						name='title'
						id='title'
						type='text'
						placeholrde='Title'
						value={task.title}
						onChange={handleTask}
					/>
				</div>

				<div className='input description'>
					<label htmlFor='description'>Description</label>
					<textarea
						name='description'
						id='description'
						rows='3'
						type='text'
						placeholder='Description'
						value={task.description}
						onChange={handleTask}
					/>
				</div>

				<div className='input assignee'>
					<label htmlFor='assignee'>Assignee</label>
					<input
						name='assignee'
						id='assignee'
						type='text'
						placeholder='Assignee'
						value={task.assignee}
						onChange={handleTask}
					/>
				</div>

				<div className='input status'>
					<label htmlFor='status'>Status</label>
					<select
						name='status'
						id='status'
						placeholder='Status'
						value={task.status}
						onChange={handleTask}
					>
						<option value='To Do'>🔲 To Do</option>
						<option value='In Progress'>🕐 In Progress</option>
						<option value='Done'>✅ Done</option>
					</select>
				</div>

				<div className='input priority'>
					<label htmlFor='priority'>Priority</label>
					<select
						name='priority'
						id='priority'
						value={task.priority}
						onChange={handleTask}
					>
						<option value='High'>🟥 High</option>
						<option value='Medium'>🟧 Medium</option>
						<option value='Low'>🟦 Low</option>
					</select>
				</div>

				<div className='input created-date'>
					<label htmlFor='createdDate'>Created Date</label>
					<input
						name='createdDate'
						id='createdDate'
						type='date'
						placeholder='Created Date'
						min={'2023-01-01'}
						max={'2029-01-01'}
						value={task.createdDate}
						onChange={handleTask}
					/>
				</div>

				<div className='input due-date'>
					<label htmlFor='dueDate'>Due Date</label>
					<input
						name='dueDate'
						id='dueDate'
						type='date'
						placeholder='Created Date'
						min={'2023-01-01'}
						max={'2029-01-01'}
						value={task.dueDate}
						onChange={handleTask}
					/>
				</div>

				<button type='submit'>Add Task</button>
			</form>
		</section>
	);
}

export default AddTask;
