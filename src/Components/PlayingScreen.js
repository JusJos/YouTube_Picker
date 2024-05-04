import React from 'react';

const PlayingScreen = ({ videoId }) => {
  return (
    <div className="playing-screen">
      <div className="video-container">
        <iframe
          className="video-player"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video Player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="controls">
        {/* Controls go here */}
        {/* Add play/pause, volume, progress bar, fullscreen controls */}
      </div>
    </div>
  );
};

export default PlayingScreen;
