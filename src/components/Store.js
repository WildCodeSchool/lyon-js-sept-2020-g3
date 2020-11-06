import React from 'react';
import './store.css';
// import { items } from './StoreItems';
import Item from './Item';

const items = [
  {
    id: 1,
    name: 'Maitre Yoda',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/yoda.png',
    price: '1,99 €',
  },
  {
    id: 2,
    name: 'Drunk Bot',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/yoda.png',
    price: '1,99 €',
  },
  {
    id: 3,
    name: '&&&',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/&&&.png',
    price: 'NaN',
  },
  {
    id: 4,
    name: '!!!',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/!!!.png',
    price: '0,01 €',
  },
  {
    id: 5,
    name: '???',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/???.png',
    price: 'Undefined',
  },
];

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Store;
