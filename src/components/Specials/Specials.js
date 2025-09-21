import './Specials.styles.css';
import Card from '../Card/Card';
import { Link as LinkR } from 'react-router-dom';
import { useLog } from '../../Hooks/LogContext';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Specials = () => {
  const { isLoggedIn } = useLog();
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault();
      setShowModal(true);
    }
  };
  return (
    <section name='menu' className='specials'>
      <div className='specials-header'>
        <h1 className='specials-title'>This weeks Specials!</h1>
        <LinkR to='/OrderOnline' onClick={handleClick}>
          <button className='menu-button' style={{ cursor: 'pointer' }}>
            Order Online{' '}
          </button>
        </LinkR>
      </div>
      <Card />
      {showModal && (
        <Modal
          message='⚠️ Please Log In To Access Our Full Services'
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default Specials;
