import React from 'react';

const SearchResult = ({ results }) => {
  return (
    <div>
      <h2>Search Results</h2>
      <div className="search-results">
        {results.map((house) => (
          <div key={house.id} className="search-result-card">
            <h3>{house.type}</h3>
            <p>{house.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;