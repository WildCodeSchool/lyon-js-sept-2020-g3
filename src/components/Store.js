import React from 'react';
import './store.scss';
import Item from './Item';
import yoda from '../pictures/yoda.png';
import drunkBot from '../pictures/drunkBot.jpg';
import pierre from '../pictures/pierre.png';
import matthieu from '../pictures/matthieu.png';
import thomas from '../pictures/thomas.png';
import Background from './Background';

export const items = [
  {
    id: 1,
    name: 'Maitre Yoda',
    description:
      'Become weak you have, me you should buy. Powerfull you will become. Yes, hrrmmm.',
    src: yoda,
    price: '1,99€',
  },
  {
    id: 2,
    name: 'Drunk Bot',
    description: '"H-h-h-heeeeey! Wheeeere dya think yeeeeer goin ?”',
    src: drunkBot,
    price: '1,99€',
  },
  {
    id: 3,
    name: 'Pierre Genthon',
    description: '1 mississippi...2 mississippi...3 mississippi... voila voila',
    src: pierre,
    price: 'NaN',
  },
  {
    id: 4,
    name: 'Matthieu Martinot',
    description: 'Quelle est votre question ?',
    src: matthieu,
    price: '0,01€',
  },
  {
    id: 5,
    name: 'Thomas Ponthoreau',
    description: 'NPM install les gars !',
    src: thomas,
    price: 'Undefined',
  },
];

const Store = () => {
  return (
    <div className="storePart">
      <Background />
      <h1 className="storeTitle">Store</h1>
      {items.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </div>
  );
};

export default Store;
