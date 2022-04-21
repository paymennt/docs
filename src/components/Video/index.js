import React from 'react';

function Video({children, url, title}) {
  return (
    <div class="row">
      <div class="col col--10">
        <div className="video__wrapper">
          <iframe
            src={'https://www.youtube.com/embed/' + url}
            title={title}
            frameborder="0"
            allow="autoplay; encrypted-media;"
            allowfullscreen
            className="video">
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;
