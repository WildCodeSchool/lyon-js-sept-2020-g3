/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { items } from './Store';
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';

const ItemDetails = (props) => {
  const data = props.match.params;
  const { id } = data;
  const result = items.find((item) => item.id === parseInt(id, 10));
  const [modalShow, setModalShow] = useState(false);

  const MyVerticallyCenteredModal = (props) => {
    return (
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={props.onHide}>Close</button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="uniqueStore">
      {result.id === 1 ? (
        <Link to={`/store/${items.length}`}>
          <div class="arrow left"></div>
        </Link>
      ) : (
        <Link to={`/store/${result.id - 1}`}>
          <div class="arrow left"></div>
        </Link>
      )}
      <div className="uniqueCard">
        <img
          className="storeImg"
          src={result.src}
          alt={`Avatar ${result.name}`}
          height="150"
          width="150"
        />
        <div className="uniqueStoreText">
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <p className="uniqueStorePrice">{result.price}</p>
        </div>
        <div className="uniqueStoreButton">
          {' '}
          <button onClick={() => setModalShow(true)}>Buy</button>
          <Link to="/store">
            <button type="button">Store</button>
          </Link>
        </div>
        {result.id === items.length ? (
          <Link to={'/store/1'}>
            <div class="arrow right"></div>
          </Link>
        ) : (
          <Link to={`/store/${result.id + 1}`}>
            <div class="arrow right"></div>
          </Link>
        )}
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ItemDetails;
/* eslint-enable */

/* {!modalShow ? (
  <div className="uniqueStore">
    <h1 className="storeTitle">Store</h1>
    {result.id === 1 ? (
      <Link to={`/store/${items.length}`}>
        <div class="arrow left"></div>
      </Link>
    ) : (
      <Link to={`/store/${result.id - 1}`}>
        <div class="arrow left"></div>
      </Link>
    )}
    <div className="uniqueCard">
      <div className="test">
        {' '}
        <img
          className="storeImg"
          src={result.src}
          alt={`Avatar ${result.name}`}
          height="150"
          width="150"
        />
        <div className="uniqueStoreText">
          <h2>{result.name}</h2>
          <p>{result.description}</p>
          <p className="uniqueStorePrice">{result.price}</p>
        </div>
        <div className="uniqueStoreButton">
          <button variant="primary" onClick={() => setModalShow(true)}>
            Buy
          </button>
          <Link to="/store">
            <button type="button">Store</button>
          </Link>
          ;
        </div>
      </div>
    </div>
    {result.id === items.length ? (
      <Link to={'/store/1'}>
        <div class="arrow right"></div>
      </Link>
    ) : (
      <Link to={`/store/${result.id + 1}`}>
        <div class="arrow right"></div>
      </Link>
    )}
  </div>
) : (
  <div>{uniqueStorePage()}</div>
)} */
