import '../styles/ListItem.css';
import { Link } from 'react-router-dom';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const ListItem = ({ task, deleteItem }) => {
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
			<Link to={`/task/${task.id}`}>
				<h4>{task.title}</h4>
				<p>{task.description}</p>
				<p>{task.assignee}</p>
				<p>{task.status}</p>
				<p>{task.priority}</p>
				<p>{task.createdDate}</p>
				<p>{task.dueDate}</p>
			</Link>
			<i className={'fa fa-trash'} onClick={() => deleteItem(task.id)} />
		</li>
	);
};

export default ListItem;
