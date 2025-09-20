import hero from '../../assets/images/hero-image.svg';
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
              traditional recipes served with a modern twist. Little Lemon
              Chicago is the perfect place to indulge in a delicious meal in a
              cozy and welcoming atmosphere.
            </p>
            <button
              className='btn'
              style={{ marginTop: '2rem', width: '300px', height: '50px' }}
            >
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
