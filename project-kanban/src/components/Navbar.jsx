import '../assets/css/Navbar.css' ;
import LogoImage from '../assets/css/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <img id="logo" src={LogoImage} alt='Logo Image' />
      <h2 id='app-name'>kannab</h2>
    </div>
  )
}

export default Navbar