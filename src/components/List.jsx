import '../styles/List.css';
import { useDroppable } from '@dnd-kit/core';
import ListItem from './ListItem';

const List = ({ list, deleteItem, filterOnStatus, openDialogTaskEdit }) => {
	// Create a filtered list to display ListItems for each of them
	const statusList = list.filter(({ status }) => status === filterOnStatus);

	// Drag and Drop
	const { isOver, setNodeRef } = useDroppable({
		id: filterOnStatus,
	});

	// Style applied on #listComponent when dragging over it
	const overStyle = {
		outline: isOver
			? '5px solid hsl(from var(--app-background-color) h 100% calc(l + 0.2))'
			: undefined,
		outlineOffset: isOver ? '1px' : undefined,
		borderRadius: isOver ? 'var(--border-radius-list)' : undefined,
	};

	return (
		<div id='listComponent' style={overStyle}>
			<h3>{filterOnStatus}</h3>

			<ul id='list' ref={setNodeRef}>
				{statusList.map(task => (
					<ListItem
						key={task.id}
						task={task}
						deleteItem={deleteItem}
						openDialogTaskEdit={openDialogTaskEdit}
					/>
				))}
			</ul>
		</div>
	);
};

export default List;
