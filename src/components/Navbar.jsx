import '../styles/Navbar.css';
import logoImage from '../assets/images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<Link to={'/'}>
				<img id='logo' src={logoImage} alt='Logo Image' />
			</Link>
			<Link to={'/'}>
				<h1 id='appTitle'>kannab</h1>
			</Link>
		</nav>
	);
};

export default Navbar;
