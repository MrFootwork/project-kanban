import '../styles/pageDashboard.css';
import {
	DndContext,
	closestCorners,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import List from '../components/List';
import { useRef, useState } from 'react';
import DialogTaskEdit from '../components/DialogTaskEdit';

const Dashboard = ({ list, setList }) => {
	const handleDragEnd = ({ active, over }) => {
		if (!over) return;

		const activeId = active.id;
		const overId = over.id;

		// Check if we are dropping in a different status list
		setList(prevList =>
			prevList.map(task => {
				const activeTask = task.id === activeId;
				const taskChangedStatus = task.status !== overId;

				return activeTask && taskChangedStatus
					? { ...task, status: overId }
					: task;
			})
		);
	};

	// Only activate drag when pointer moves at least 10 pixels.
	// Necessary to allow delete button to work.
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: { distance: 10 },
		})
	);

	// Define deleteItem() and pass it to ListItem component
	const deleteItem = id => setList(list.filter(item => item.id !== id));

	/******************************
	 * 	Dialog for Task Editing
	 *****************************/
	const dialogRef = useRef(null);

	const [taskToEdit, setTaskToEdit] = useState({});

	// Update Task state in dialog editor
	const updateTask = e => {
		setTaskToEdit(prevTask => ({
			...prevTask,
			[e.target.name]: e.target.value,
		}));
	};

	// ListItem can open the edit task dialog with initial task values
	const openDialogTaskEdit = id => {
		dialogRef.current?.showModal();
		setTaskToEdit(list.find(task => task.id === id));
	};

	// Define editItem() and pass it to ListItem component
	const editItem = e => {
		e.preventDefault();
		setList(list.map(task => (taskToEdit.id === task.id ? taskToEdit : task)));
		dialogRef.current?.close();
	};

	return (
		<DndContext
			collisionDetection={closestCorners}
			sensors={sensors}
			onDragEnd={e => handleDragEnd(e)}
		>
			<div id='listContainer'>
				<DialogTaskEdit
					dialogRef={dialogRef}
					editItem={editItem}
					taskToEdit={taskToEdit}
					updateTask={updateTask}
				/>

				<List
					list={list}
					deleteItem={deleteItem}
					openDialogTaskEdit={openDialogTaskEdit}
					filterOnStatus='To Do'
				/>
				<List
					list={list}
					deleteItem={deleteItem}
					openDialogTaskEdit={openDialogTaskEdit}
					filterOnStatus='In Progress'
				/>
				<List
					list={list}
					deleteItem={deleteItem}
					openDialogTaskEdit={openDialogTaskEdit}
					filterOnStatus='Done'
				/>
			</div>
		</DndContext>
	);
};

export default Dashboard;
