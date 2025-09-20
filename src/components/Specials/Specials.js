import './Specials.styles.css';
import Card from '../Card/Card';
import { Link as LinkR } from 'react-router-dom';

const Specials = () => {
  return (
    <section name='menu' className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>This weeks Specials!</h1>
        <LinkR to='/OrderOnline'>
          <button
            className='btn'
            style={{ width: '200px', backgroundColor: '#ee9972' }}
          >
            Order Online{' '}
          </button>
        </LinkR>
      </div>
      <Card />
    </section>
  );
};

export default Specials;
