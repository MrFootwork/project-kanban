import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
	return (
		<aside id='sidebar'>
			<ul>
				<li>
					<Link to={'/'}>Dashboard</Link>
				</li>
				<li>
					<Link to={'/about'}>About</Link>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
