import React, { useState } from 'react';
import './SearchBox.css';

function SearchBox({ onVideoSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Extract video ID from the YouTube link
    const videoIdRegex = /[?&]v=([^&]+)/;
    const match = searchTerm.match(videoIdRegex);
    if (match) {
      const id = match[1];
      onVideoSubmit(id);
      setSearchTerm('');
    } else {
      // Handle invalid YouTube link
      console.error('Invalid YouTube link');
    }
  };

  return (
    <form onSubmit={handleSubmit} role="search">
      <label htmlFor="search">Search for stuff</label>
      <input id="search" type="search" placeholder="Search..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}
       autoFocus required />
      <button type="submit">Go</button>
    </form>
  );
}

export default SearchBox;
