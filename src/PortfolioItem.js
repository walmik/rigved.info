import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useParams } from 'react-router-dom';
import Data from './data';

export default function PortfolioItem() {
  const { id } = useParams();
  const key = id || window.location.hash.replace('#/item/', '');
  const getMedia = () =>
    Data[key].media.map((m, i) => {
      if (m.type === 'image') {
        return <img key={m.path || i} className="fullsize" src={m.path} />;
      }

      if (m.type === 'video') {
        return (
          <video key={m.path || i} playsInline autoPlay muted loop poster={m.poster}>
            <source src={m.path} type="video/mp4" />
          </video>
        );
      }

      if (m.type === 'youtube') {
        return (
          <div className="video-wrapper" key={m.path || i}>
            <iframe
              src={m.path}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
    });

  const getMarkdown = () => {
    return (
      <>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{Data[key].markdown}</ReactMarkdown>
      </>
    );
  };

  return (
    <div className="portfolioItem fade-in">
      <h2 className="pageTitle">{Data[key].title}</h2>
      <blockquote>{Data[key].shortDescription}</blockquote>
      <p>{Data[key].longDescription}</p>
      {Data[key].media && getMedia()}
      {Data[key].markdown && getMarkdown()}
    </div>
  );
}
