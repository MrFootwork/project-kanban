import '../styles/ListItem.css';
import { useNavigate } from 'react-router-dom';
import { useDraggable } from '@dnd-kit/core';

const ListItem = ({
	task,
	deleteItem,
	openDialogTaskEdit,
	isOverlay = false,
}) => {
	const navigate = useNavigate();

	const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
		id: task.id,
	});

	// If this is the DragOverlay, make both the original ListItem
	// and the overlay item semi-transparent.
	const style = {
		opacity: isDragging || isOverlay ? '0.8' : undefined,
		boxShadow: isOverlay ? '2px 2px 10px 2px rgba(0, 0, 0, 0.5)' : undefined,
	};

	const priorityColor = {
		backgroundColor: {
			High: 'red',
			Medium: 'orange',
			Low: 'blue',
		}[task.priority],
	};

	function getInitials() {
		const initials = task.assignee.match(/\b[a-zA-Z]/g);
		return initials ? initials.join('') : '';
	}

	return (
		<li
			className='list-item'
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			<div className='priority-indicator' style={priorityColor} />

			<div
				className='details-container'
				onClick={() => navigate(`/task/${task.id}`)}
			>
				<h4>{task.title}</h4>
				<p className='description'>{task.description}</p>
				<div className='assignee'>{getInitials()}</div>
				<p>📃 {task.createdDate}</p>
				<p>🎯 {task.dueDate}</p>
			</div>

			<div className='icon-container'>
				<i
					className={'delete fa fa-trash'}
					onClick={() => deleteItem(task.id)}
				/>
				<i
					className={'edit fas fa-edit'}
					onClick={() => openDialogTaskEdit(task.id)}
				/>
			</div>
		</li>
	);
};

export default ListItem;
