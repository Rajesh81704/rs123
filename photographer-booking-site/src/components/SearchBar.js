import React from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, }) {
  const handleInputChange = (event) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search Your Fav Photographer"
        onChange={handleInputChange}
      />
      <button  className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
