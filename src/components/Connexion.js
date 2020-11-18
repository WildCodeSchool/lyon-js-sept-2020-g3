import React from 'react';
import { Link } from 'react-router-dom';
import './Connexion.scss';
import Modal from './Modal';
import './Modal.scss';

const Connexion = () => {
  const isModalOpen = true;

  return (
    <div className="connexionBody">
      {' '}
      <Modal showModal={isModalOpen}>
        <div className="modalHeader">
          <h2>Work In Progress ...</h2>
        </div>
        <div className="modalBody">
          <h3>
            This page is a work in progress
            <br />
            Come check back soon !
          </h3>
        </div>
        <div className="modalFooter">
          <Link to="/">
            {' '}
            <button type="button" className="modalButton">
              Home
            </button>
          </Link>
        </div>
      </Modal>
    </div>
  );
};

export default Connexion;
