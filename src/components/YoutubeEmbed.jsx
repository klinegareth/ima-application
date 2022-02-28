import React from "react";
import * as css from './YoutubeEmbed.module.css';

const YoutubeEmbed = ({ embedId, w, h }) => (
  <div className="video-responsive">
    <iframe
      width={`${w}`}
      height={`${h}`}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeEmbed;
