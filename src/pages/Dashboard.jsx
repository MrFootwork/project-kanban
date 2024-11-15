import '../styles/pageDashboard.css';
import {
	DndContext,
	closestCorners,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import List from '../components/List';

const Dashboard = ({ list, setList }) => {
	const handleDragEnd = ({ active, over }) => {
		if (!over) return;

		const activeId = active.id;
		const overId = over.id;

		// Check if we are dropping in a different status list
		if (activeId !== overId) {
			setList(prevList =>
				prevList.map(task =>
					task.id === activeId && task.status !== overId
						? { ...task, status: overId }
						: task
				)
			);
		}
	};

	// Only activate drag when pointer moves at least 10 pixels.
	// Necessary to allow delete button to work.
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: { distance: 10 },
		})
	);

	return (
		<DndContext
			collisionDetection={closestCorners}
			sensors={sensors}
			onDragEnd={handleDragEnd}
		>
			<div id='listContainer'>
				<List list={list} setList={setList} filterOnStatus='To Do' />
				<List list={list} setList={setList} filterOnStatus='In Progress' />
				<List list={list} setList={setList} filterOnStatus='Done' />
			</div>
		</DndContext>
	);
};

export default Dashboard;
