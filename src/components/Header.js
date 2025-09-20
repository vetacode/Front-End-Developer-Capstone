import logo from '../assets/images/logo-nav.svg';
import { Link } from 'react-router-dom';
import '../App.css';
import { LoginButton, LogoutButton } from './LogInOutButton';
import { useLog } from '../Hooks/LogContext';
import { useNavigate } from 'react-router-dom';

function Header() {
  const { logout, isLoggedIn, login } = useLog();

  const navigate = useNavigate();
  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div>
      <header className='App-header'>
        <img src={logo} height={60} className='App-logo' alt='logo' />
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
        {!isLoggedIn ? (
          <LoginButton onLogin={handleLogin} />
        ) : (
          <LogoutButton onLogout={logout} />
        )}
      </header>
    </div>
  );
}

export default Header;
