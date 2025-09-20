import hero from '../../images/hero-image.svg';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <section className='home'>
        <div className='hero'>
          <div className='hero-text'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <button className='btn' style={{ marginTop: '2rem' }}>
              Reserve a Table
            </button>
          </div>
          <div>
            <img src={hero} height={500} alt='logo' className='hero-img' />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Home;
