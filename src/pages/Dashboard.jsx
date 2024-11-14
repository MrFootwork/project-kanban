import '../styles/pageDashboard.css';

import List from '../components/List';

const Dashboard = ({ list, deleteItemHandler }) => {
	return (
		<div id='listContainer'>
			<List list={list} onDelete={deleteItemHandler} filter={'To Do'} />
			<List list={list} onDelete={deleteItemHandler} filter={'In Progress'} />
			<List list={list} onDelete={deleteItemHandler} filter={'Done'} />
		</div>
	);
};

export default Dashboard;
