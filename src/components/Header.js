import logo from '../images/logo-nav.svg';

function Header() {
  return (
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <nav>
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
      </nav>
    </header>
  );
}

export default Header;
