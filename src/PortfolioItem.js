import React from 'react';
import ReactMarkdown from 'react-markdown';
const gfm = require('remark-gfm');
import { Link } from 'react-router-dom';
import Data from './data';

export default () => {
  const key = window.location.hash.replace('#/item/', '');
  const getMedia = () =>
    Data[key].media.map((m) => {
      if (m.type === 'image') {
        return <img className="fullsize" src={m.path} />;
      }

      if (m.type === 'video') {
        return (
          <video playsinline autoPlay muted loop poster={m.poster}>
            <source src={m.path} type="video/mp4" />
          </video>
        );
      }

      if (m.type === 'youtube') {
        return (
          <iframe
            width="700"
            height="394"
            src={m.path}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        );
      }
    });

  const getMarkdown = () => <ReactMarkdown plugins={[gfm]}>{Data[key].markdown}</ReactMarkdown>;

  return (
    <div className="portfolioItem fade-in">
      <h2 className="pageTitle">{Data[key].title}</h2>
      {Data[key].markdown ? getMarkdown() : getMedia()}
      <p>
        <Link to="/">Back</Link>
      </p>
    </div>
  );
};
