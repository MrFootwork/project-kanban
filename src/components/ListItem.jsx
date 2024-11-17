import '../styles/ListItem.css';
import { useNavigate } from 'react-router-dom';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const ListItem = ({ task, deleteItem, openDialogTaskEdit }) => {
	const navigate = useNavigate();

	const { attributes, listeners, setNodeRef, transform } = useDraggable({
		id: task.id,
	});

	const style = {
		// Outputs `translate3d(x, y, 0)`
		transform: CSS.Translate.toString(transform),
	};

	return (
		<li
			className='list-item'
			ref={setNodeRef}
			style={style}
			{...listeners}
			{...attributes}
		>
			<div
				className='details-container'
				onClick={() => navigate(`/task/${task.id}`)}
			>
				<h4>{task.title}</h4>
				<p className='description'>{task.description}</p>
				<p>{task.assignee}</p>
				<p>{task.status}</p>
				<p>{task.priority}</p>
				<p>{task.createdDate}</p>
				<p>{task.dueDate}</p>
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
