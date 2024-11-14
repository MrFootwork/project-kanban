import '../styles/pageDashboard.css';

import List from '../components/List';

const Dashboard = ({ list, setList }) => {
	return (
		<div id='listContainer'>
			<List list={list} setList={setList} filterOnStatus={'To Do'} />
			<List list={list} setList={setList} filterOnStatus={'In Progress'} />
			<List list={list} setList={setList} filterOnStatus={'Done'} />
		</div>
	);
};

export default Dashboard;
