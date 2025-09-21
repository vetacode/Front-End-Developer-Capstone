import React from 'react';
import './Modal.styles.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <p>{message}</p>
        <button className='btn' onClick={onClose} aria-label='close modal'>
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Modal;
