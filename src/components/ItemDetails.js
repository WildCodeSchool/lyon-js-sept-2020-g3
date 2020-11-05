/* eslint-disable */
import React from 'react';
import Store from './Store';

const ItemDetails = (props) => {
  const data = props.match.params;
  const { id } = data;
  const result = Store.find((item) => Store.id === parseInt(id, 10));

  return (
    <div className="">
      <h2>{result.name}</h2>
    </div>
  );
};

export default ItemDetails;
/* eslint-enable */
