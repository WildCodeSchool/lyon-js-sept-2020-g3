import React from 'react';
import { Link } from 'react-router-dom';
import './Connexion.scss';
import Modal from './Modal';
import './Modal.scss';
import workInProgress from '../Images/workInProgress.png';

const Connexion = () => {
  const isModalOpen = true;

  return (
    <div className="connexionBody">
      <h1 className="connexionTitle">Connexion</h1>
      <Modal showModal={isModalOpen}>
        <div className="modalHeaderConnexion">
          <h2>Work In Progress ...</h2>
        </div>
        <div className="modalBody">
          <img
            src={workInProgress}
            alt="work in progress"
            className="connexionModalImage"
          />
          <h3>
            This page is a work in progress
            <br />
            Come check back soon !
          </h3>
        </div>
        <div className="modalFooterConnexion">
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
