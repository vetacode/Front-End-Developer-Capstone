import logo from '../images/logo-nav.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import { LogoutButton } from './LogInOutButton';
import { useLog } from '../Hooks/LogContext';

function Header() {
  const { logout } = useLog();

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
        <Link to='/Menu' className='nav-item'>
          Menu
        </Link>
        <Link to='/BookingPage' className='nav-item'>
          Reservations
        </Link>
        <Link to='/OrderOnline' className='nav-item'>
          Order Online
        </Link>
      </nav>
      <LogoutButton onLogout={logout} />
    </header>
  );
}

export default Header;
