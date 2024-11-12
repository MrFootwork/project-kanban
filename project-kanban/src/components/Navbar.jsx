import '../assets/css/Navbar.css' ;
import LogoImage from '../assets/css/logo.png';


const Navbar = () => {
  return (
    <div className='navbar'>
      <img id="logo" src={LogoImage} alt='Logo Image' />
      <h1 id='app-name'>kannab</h1>
    </div>
  )
}

export default Navbar