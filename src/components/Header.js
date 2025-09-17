import logo from '../images/logo-nav.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <nav className='nav'>
        <Link to='/' className='nav-item'>
          Home
        </Link>
        <Link to='/About' className='nav-item'>
          About
        </Link>
        <Link to='/Contact' className='nav-item'>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;

/* <nav>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            {' '}
            <a href='#about'>About </a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a a href='#reservation'>
              Reservation
            </a>
          </li>
          <li>
            <a href='#order'>Order Online</a>
          </li>
          <li>
            <a href='#login'>Login</a>
          </li>
        </ul>
      </nav> */
