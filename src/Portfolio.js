import React from 'react';
import { Link } from 'react-router-dom';
import Data from './data';

export default () => {
  const getItems = () => {
    const arr = Object.keys(Data).map((item, idx) => {
      return (
        <li key={idx}>
          <Link to={'/item/' + item}>
            <img className="thumbnail" src={Data[item].poster} />
            {Data[item].title}
          </Link>
        </li>
      );
    });
    return arr;
  };
  return (
    <main className="portfolioItems fadeIn">
      <ul>{getItems()}</ul>
    </main>
  );
};
