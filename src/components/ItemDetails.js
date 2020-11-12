/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import { items } from './Store';

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
      {result.id === 1 ? (
        <Link to={`/store/${items.length}`}>
          <div class="arrow left"></div>
        </Link>
      ) : (
        <Link to={`/store/${result.id - 1}`}>
          <div class="arrow left"></div>
        </Link>
      )}
      <div className="uniqueCardTest">
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
            <button type="button" onClick={test()}>
              Buy
            </button>
            <Link to="/store">
              <button type="button">Store</button>
            </Link>
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
  );
};

export default ItemDetails;
/* eslint-enable */
