import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search for a city"
        />
        <button className="btn btn-primary" type="submit">
          <i className="bi bi-search"></i> Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;