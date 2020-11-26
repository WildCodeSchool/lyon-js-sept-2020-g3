import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { SoundEffectContext } from './SoundEffectContext';

const Item = (props) => {
  const { data } = props;
  const { playButtonSound } = useContext(SoundEffectContext);

  return (
    <div>
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
          <button type="button" className="btnStore" onClick={playButtonSound}>
            {data.price}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
