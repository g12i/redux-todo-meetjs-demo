import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Modal = ({ children }) => (
  <div className="Modal">
    <div className="Modal__ContentWrapper">
      <div className="Modal__Content">
        {children}
      </div>
    </div>
    <div className="Modal__Background" />
  </div>
);

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
