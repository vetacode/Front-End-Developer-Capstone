import logo from '../../images/logo-nav.svg';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <div>
        <h2>Welcome to the Home Page</h2>
        <div className='home-content'>
          <img
            src={logo}
            height={50}
            width={200}
            alt='logo'
            style={{ border: '1px solid black' }}
          />
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
