import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

const VeiwPage = () => {
  const [filteredPhotographers, setFilteredPhotographers] = useState([]);
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users').then(response => {
      response.json().then(post => {
        setPhotographers(post);
        setFilteredPhotographers(post); // Set the initial filtered data
      });
    });
  }, []);

  const handleSearch = (query) => {
    const formattedQuery = query.replace(/\s/g, ''); // Remove spaces from query
    const filtered = photographers.filter((photographer) =>
      photographer.name.toLowerCase().replace(/\s/g, '').includes(formattedQuery.toLowerCase())
    );
    setFilteredPhotographers(filtered);
  };

  return (
    <div className="section">
      <SearchBar onSearch={handleSearch} />
      <div className="card-container">
        {filteredPhotographers.map((photographer) => (
          <div key={photographer._id} className="card photographer-card">
            <Link to={`/post/${photographer._id}`} >
              <img src={`http://localhost:4000/uploads/${photographer.imageSrc}`} alt={photographer.name} />
            </Link>
   
            <p>Name: {photographer.name}</p>
            <Link to={`https://wa.me/91${photographer.phone}` } target="_blank" style={{ textDecoration: 'none' }}>
            <p style={{color:'black'}}> <img src="whatsapp.png" alt="" /> {photographer.phone}</p>
            </Link>
            <p>Charge per Hour: {photographer.chargePerHour}</p>
            <Link to={`/post/${photographer._id}`}>
              <button className="book-now-button">Book Now</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VeiwPage;
