import '../styles/pageDashboard.css';
import { DndContext, closestCorners } from '@dnd-kit/core';
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
					task.id === activeId ? { ...task, status: overId } : task
				)
			);
		}
	};

	return (
		<DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
			<div id='listContainer'>
				<List list={list} setList={setList} filterOnStatus='To Do' />
				<List list={list} setList={setList} filterOnStatus='In Progress' />
				<List list={list} setList={setList} filterOnStatus='Done' />
			</div>
		</DndContext>
	);
};

export default Dashboard;
