const DialogTaskEdit = ({ dialogRef, editItem, taskToEdit, updateTask }) => {
	const closeModal = e => {
		e.preventDefault();
		dialogRef.current?.close();
	};

	return (
		<dialog className='modal-edit' ref={dialogRef}>
			<form action='submit'>
				<div className='input title'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						value={taskToEdit.title}
						onChange={updateTask}
					/>
				</div>

				<div className='input description'>
					<label htmlFor='description'>Description</label>
					<textarea
						name='description'
						id='description'
						rows='3'
						value={taskToEdit.description}
						onChange={updateTask}
					></textarea>
				</div>

				<div className='input assignee'>
					<label htmlFor='assignee'>Assignee</label>
					<input
						type='text'
						name='assignee'
						id='assignee'
						value={taskToEdit.assignee}
						onChange={updateTask}
					/>
				</div>

				<div className='input status'>
					<label htmlFor='status'>Status</label>
					<select
						name='status'
						placeholder='Status'
						value={taskToEdit.status}
						onChange={updateTask}
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
						value={taskToEdit.priority}
						onChange={updateTask}
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
						type='date'
						placeholder='Created Date'
						min={'2023-01-01'}
						max={'2029-01-01'}
						value={taskToEdit.createdDate}
						onChange={updateTask}
					/>
				</div>

				<div className='input due-date'>
					<label htmlFor='dueDate'>Due Date</label>
					<input
						name='dueDate'
						type='date'
						placeholder='Created Date'
						min={'2023-01-01'}
						max={'2029-01-01'}
						value={taskToEdit.dueDate}
						onChange={updateTask}
					/>
				</div>

				<button className='change' onClick={editItem}>
					Save Changes
				</button>
				<button className='cancel' onClick={closeModal}>
					Cancel
				</button>
			</form>
		</dialog>
	);
};

export default DialogTaskEdit;
