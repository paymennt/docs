import React from 'react';

import useBaseUrl from '@docusaurus/useBaseUrl';

function CardHeadless({children, image, link, action}) {
  return (
    <div className="card headless">
      <div className="card__image">
        <img
          src={useBaseUrl(image)}
          alt="{action}"
          title="{action}"
        />
      </div>
      <div className="card__body">
      {children}
      </div>
    </div>
  );
}

export default CardHeadless;
