import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

function Card({children, image, link, action}) {
  return (
    <div className="card">
      <div className="card__header">
        <h3>{children}</h3>
      </div>
      <div className="card__image">
        <img
          src={useBaseUrl(image)}
          alt="Image alt text"
          title="Logo Title Text 1"
        />
      </div>
      <div className="card__footer">
        <a
          className="button button--secondary button--block"
          href={useBaseUrl(link)}
        >{action}</a>
      </div>
    </div>
  );
}

export default Card;
