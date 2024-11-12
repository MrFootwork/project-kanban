import '../assets/css/Navbar.css' ;
import logoImage from '../assets/images/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <img id="logo" src={logoImage} alt='Logo Image' />
      <h1 id='app-title'>kannab</h1>
    </div>
  )
}

export default Navbar