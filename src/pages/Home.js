import React, { useState, useEffect } from "react";

function Home() {
  const [houses, setHouses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/houses")
      .then((res) => res.json())
      .then((houses) => {
        console.log(houses);
        setHouses(houses);
      })
      .catch((error) => console.log("Error fetching data", error));
  }, []);

  const handleSearch = (e) => {
   
    
    const filteredHouses = houses.filter((house) =>
      house.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setHouses(filteredHouses);
  };

  return (
    <>
      <main className="main-content">
        <section className="section">
          <h2>Welcome to House Hunt</h2>
          <p>serving you is our delight.</p>

          <div className="search-container">
            <input
              type="text"
              placeholder="Search Property by Type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </section>
      </main>

      <section className="featured-properties">
        <h2>Search Results</h2>
        <p className="featured-description">
          Displaying properties matching your search:
        </p>
      </section>

      <section className="card-container">
        {houses.slice(0, 20).map((house) => (
          <div key={house.id} className="card">
            <img src={house.image} alt={house.type} />
            <div className="card-details">
              <h3>Type: {house.type}</h3>
              <p>{house.description}</p>
              <p>Location: {house.location}</p>
              <p>Price: USD {house.price}</p>
              <p>Action: {house.transactionType}</p>
              <p>Agent: {house.name}</p>
              <p>Contact: {house.email}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Home;
