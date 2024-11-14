import ListItem from './ListItem';
import '../styles/List.css';

const List = ({ list, onDelete, filter }) => {
	return (
		<div id='listComponent'>
			<h3>{filter}</h3>

			<ul id='list'>
				{list
					.filter(({ status }) => status === filter)
					.map(task => (
						<ListItem key={task.id} task={task} onDelete={onDelete} />
					))}
			</ul>
		</div>
	);
};

export default List;
