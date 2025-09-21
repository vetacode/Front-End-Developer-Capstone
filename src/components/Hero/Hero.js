import './Hero.styles.css';
import { Link as LinkR } from 'react-router-dom';
import hero from '../../assets/images/hero-image.svg';

const Hero = () => {
  return (
    <section name='home' className='hero aria-labelledby="hero-title'>
      <div className='display-container'>
        <h1 id='hero-title' className='display-title'>
          Little Lemon
        </h1>
        <h3 className='display-subtitle'>Chicago</h3>
        <h4 className='display-text'>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </h4>
        <LinkR to='/bookingPage' aria-label='reserve a table'>
          <button
            className='btn'
            aria-label='reserve a table'
            style={{
              width: '300px',
              height: '50px',
              fontSize: '32px',
              padding: '10px',
              lineHeight: '32px',
            }}
          >
            Reserve a Table{' '}
          </button>
        </LinkR>
      </div>
      <div className='image-container'>
        <img src={hero} alt='restaurant food' className='display-image' />
      </div>
    </section>
  );
};

export default Hero;
