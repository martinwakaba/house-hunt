import React, { useState, useEffect } from 'react';
import SearchResult from '../pages/SearchResults';

export default function SearchForm ()  {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3000/houses')
      .then((res) => res.json())
      .then((houses) => {
        setHouses(houses);
        setLoading(false);
      })
      .catch((error) => console.log('Error fetching data', error));
  }, []);

  const handleSearch = () => {
    const filteredResults = houses.filter((house) =>
      house.type.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div>
      <h1>Home Search</h1>
      <input
        type="text"
        placeholder="Search by house type"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <SearchResult results={searchResults} />
      )}
    </div>
  );
};