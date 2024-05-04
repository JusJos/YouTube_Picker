import React, { useState } from 'react';
import SearchBox from './Components/SearchBox';
import PlayingScreen from './Components/PlayingScreen';
import './Components/PlayingScreen.css';

function App() {
  const [videoId, setVideoId] = useState('');
  const [isLinkSubmitted, setIsLinkSubmitted] = useState(false);

  const handleVideoSubmit = (id) => {
    setVideoId(id);
    setIsLinkSubmitted(true);
  };

  return (
    <div className="App">
        <SearchBox onVideoSubmit={handleVideoSubmit} />
      {isLinkSubmitted ? (
        <PlayingScreen videoId={videoId} />
      ) : (
        <>
          <div className="sample-playing-screen">
            <PlayingScreen/>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
