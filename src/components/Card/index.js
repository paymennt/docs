import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

function Card({children, title, image, link, action}) {
  let imageTag;
  if (image) {
    imageTag = <img
      src={useBaseUrl(image)}
      alt="Image alt text"
      title="Logo Title Text 1"
    />
  }
  return (
    <div className="card">
      <div className="card__header">
        {title && <h3>{title}</h3>}
        {children && <p>{children}</p>}
      </div>
      <div className="card__image">
        {imageTag}
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href={useBaseUrl(link)} >{action}</a>
      </div>
    </div>
  );
}

export default Card;
