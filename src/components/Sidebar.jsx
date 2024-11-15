import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
	const addActiveLinkClass = ({ isActive }) => (isActive ? 'active-link' : '');

	return (
		<aside id='sidebar'>
			<ul>
				<li>
					<NavLink to={'/'} className={addActiveLinkClass}>
						Dashboard
					</NavLink>
				</li>
				<li>
					<NavLink to={'/about'} className={addActiveLinkClass}>
						About
					</NavLink>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;
