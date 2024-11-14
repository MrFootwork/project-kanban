import ListItem from './ListItem';
import '../styles/List.css';

const List = ({ list, setList, filterOnStatus }) => {
	// Define deleteItem() and pass it to ListItem component
	const deleteItem = id => setList(list.filter(item => item.id !== id));

	// Create a filtered list to display ListItems for each of them
	const statusList = list.filter(({ status }) => status === filterOnStatus);

	return (
		<div id='listComponent'>
			<h3>{filterOnStatus}</h3>

			<ul id='list'>
				{statusList.map(task => (
					<ListItem key={task.id} task={task} deleteItem={deleteItem} />
				))}
			</ul>
		</div>
	);
};

export default List;
