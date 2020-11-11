import React from 'react';
import './store.scss';
import Item from './Item';

export const items = [
  {
    id: 1,
    name: 'Maitre Yoda',
    description:
      'Become weak you have, me you should buy. Powerfull you will become. Yes, hrrmmm.',
    src: '',
    price: '1,99€',
  },
  {
    id: 2,
    name: 'Drunk Bot',
    description: '"H-h-h-heeeeey! Wheeeere dya think yeeeeer goin ?”',
    src: '/home/verin/Projet_2/lyon-js-sept-2020-g3/src/pictures/yoda.png',
    price: '1,99€',
  },
  {
    id: 3,
    name: '&&&',
    description: '&&&',
    src: '',
    price: 'NaN',
  },
  {
    id: 4,
    name: '!!!',
    description: '!!!',
    src: '',
    price: '0,01€',
  },
  {
    id: 5,
    name: '???',
    description: '???',
    src: '',
    price: 'Undefined',
  },
];

const Store = () => {
  return (
    <div className="storePart">
      <h1 className="storeTitle">Store</h1>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Store;
