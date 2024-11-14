import '../styles/pageTaskDetails.css';

import { useParams } from 'react-router-dom';

const TaskDetails = ({ list }) => {
	const { taskID } = useParams();
	const task = list.find(task => task.id === taskID);

	return (
		<div id='pageTaskDetails'>
			<h2>{task.title}</h2>
			<p>description: {task.description}</p>
			<p>assignee: {task.assignee}</p>
			<p>status: {task.status}</p>
			<p>priority: {task.priority}</p>
			<p>createdDate: {task.createdDate}</p>
			<p>dueDate: {task.dueDate}</p>
		</div>
	);
};

export default TaskDetails;
