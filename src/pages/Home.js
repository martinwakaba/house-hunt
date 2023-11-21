import { useState, useEffect } from "react";

function Home(){

    const [houses, setHouses] = useState([])

    useEffect(() =>{
        fetch(' http://localhost:3000/houses')
        .then(res => res.json())
        .then(houses => {
            console.log(houses)
            setHouses(houses)
        } )
        .catch(error => console.log('Error fetching data', error))

    }, [])


return (
    
    <>

     <main className="main-content">
        <section className="section">
          <h2>Welcome to House Hunt</h2>
          <p> serving you is our delight.</p>

          <div className="search-container">
            <input type="text" placeholder="Search Propety by Type..." />
            <button>Search</button>
          </div>
        </section>
      </main>

      <section className="featured-properties">
          <h2>Featured Properties</h2>
          <p className="featured-description">
            These are some of the most recent listings
          </p>
        </section>

      <section className="card-container">
        {houses.slice(0, 12).map((house) => (
          <div key={house.id} className="card">
            <img src={house.image} alt={house.type} />
            <div className="card-details">
              <h3>Type: {house.type}</h3>
              <p>{house.description}</p>
              <p>Location: {house.location}</p>
              <p>Price:Ksh {house.price}</p>
              <p>{house.transactionType}</p>
              <p>Agent: {house.name}</p>
              <p>Contact: {house.email}</p>
              {/* Add more details as needed */}
            </div>
          </div>
        ))}
      </section>

    </>



)
}

export default Home ;