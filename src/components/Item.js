import React from 'react';
import { Link } from 'react-router-dom';

const Item = (props) => {
  const { data } = props;

  return (
    <div>
      {/* <Background /> */}
      <div className="storeCard">
        <img
          className="storeImg"
          src={data.src}
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
