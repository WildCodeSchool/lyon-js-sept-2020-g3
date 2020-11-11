import React from 'react';
import { Link } from 'react-router-dom';
import yoda from '../pictures/yoda.png';

const Item = (props) => {
  const { data } = props;

  return (
    <div>
      <div className="storeCard">
        <img
          className="storeImg"
          src={yoda}
          alt={`Avatar ${data.name}`}
          height="150"
          width="150"
        />
        <h2>{data.name}</h2>
        <Link to={`/store/${data.id}`}>
          <button type="button" className="btnStore">
            {data.price}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
