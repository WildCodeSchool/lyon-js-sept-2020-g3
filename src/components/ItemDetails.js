/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { items } from './Store';
import yoda from '../pictures/yoda.png';

const ItemDetails = (props) => {
  const data = props.match.params;
  const { id } = data;
  const result = items.find((item) => item.id === parseInt(id, 10));

  const test = () => {
    return (
      <div>
        <p>Work in progress</p>
      </div>
    );
  };

  return (
    <div className="uniqueStore">
      <h1 className="storeTitle">Store</h1>
      <div class="arrow left"></div>

      <div className="uniqueCard">
        <img
          className="storeImg"
          src={yoda}
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
          <button type="button" onClick={test()}>
            Buy
          </button>
          <Link to="/store">
            <button type="button">Store</button>
          </Link>
        </div>
      </div>
      <Link to="/store">
        <div class="arrow right"></div>
      </Link>
    </div>
  );
};

export default ItemDetails;
/* eslint-enable */
