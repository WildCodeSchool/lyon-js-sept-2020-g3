/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { items } from './Store';
import yoda from '../pictures/yoda.png';

const ItemDetails = (props) => {
  const data = props.match.params;
  const { id } = data;
  const result = items.find((item) => item.id === parseInt(id, 10));

  return (
    <div className="uniqueStore">
      <div className="card">
        <img
          className="storeImg"
          src={yoda}
          alt={`Avatar ${result.name}`}
          height="150"
          width="150"
        />
        <p>{result.description}</p>
        <p>{result.price}</p>
        <h2>{result.name}</h2>
        <button type="button">Buy</button>
        <Link to="/store">
          <button type="button">Store</button>
        </Link>
      </div>
    </div>
  );
};

export default ItemDetails;
/* eslint-enable */
