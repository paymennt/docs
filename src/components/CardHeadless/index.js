import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

function CardHeadless({children, image, link, action}) {
  let imageTag;
  imageTag = <img
    src={useBaseUrl(image)}
    alt="{action}"
    title="{action}"
  />
  if (link) {
    imageTag = <a href={useBaseUrl(link)}>{imageTag}</a>
  }
  return (
    <div className="card headless">
      <div className="card__image">
        {imageTag}
      </div>
      <div className="card__body">
      {children}
      </div>
    </div>
  );
}

export default CardHeadless;
