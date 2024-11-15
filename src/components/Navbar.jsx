import '../styles/Navbar.css';
import logoImage from '../assets/images/logo.png';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<img id='logo' src={logoImage} alt='Logo Image' />
			<h1 id='appTitle'>kannab</h1>
		</nav>
	);
};

export default Navbar;
