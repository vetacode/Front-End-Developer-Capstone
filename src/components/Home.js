import logo from '../images/logo-nav.svg';
import Footer from './Footer';

function Home() {
  return (
    <>
      <div className='nav-elements'>
        <h2>Welcome to the Home Page</h2>
        <div className='home-content'>
          <img src={logo} height={200} width={200} alt='logo' />
          <p>
            This is the homepage of Little Lemon Company Ltd. on React
            application.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
export default Home;
