import React from 'react';
import { Link } from 'react-router-dom';
import Data from './data';

export default () => {
  const key = window.location.hash.replace('#/item/', '');
  return (
    <div className="portfolioItem">
      <h2>{Data[key].title}</h2>
      <img className="fullsize" src={Data[key].media[0].path} />
      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  );
};
