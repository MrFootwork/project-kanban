import '../styles/List.css';
import { useDroppable } from '@dnd-kit/core';
import ListItem from './ListItem';

const List = ({ list, setList, filterOnStatus }) => {
	// Create a filtered list to display ListItems for each of them
	const statusList = list.filter(({ status }) => status === filterOnStatus);

	// Drag and Drop
	const { isOver, setNodeRef } = useDroppable({
		id: filterOnStatus,
	});

	// Style applied on #listComponent when dragging over it
	const overStyle = {
		outline: isOver ? '5px solid #1eb99d' : undefined,
		outlineOffset: isOver ? '1px' : undefined,
		borderRadius: isOver ? 'var(--border-radius-list)' : undefined,
	};

	// Define deleteItem() and pass it to ListItem component
	const deleteItem = id => setList(list.filter(item => item.id !== id));

	return (
		<div id='listComponent' style={overStyle}>
			<h3>{filterOnStatus}</h3>

			<ul id='list' ref={setNodeRef}>
				{statusList.map(task => (
					<ListItem key={task.id} task={task} deleteItem={deleteItem} />
				))}
			</ul>
		</div>
	);
};

export default List;
