import React, { useState, useEffect } from 'react';

import Header from './Header'; // Import the Header component
import { Link } from 'react-router-dom';

const PhotographerSection = () => {

  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/users').then(response => {
      
      response.json().then(post => {
        setPhotographers(post);
       
      });
    });
  }, []);

  return (
    <div className="section">
      <Header title="Photographers" /> {/* Use the Header component */}
      <div className="card-container">
        {photographers.map((photographer) => (
          <div key={photographer.id} className="card photographer-card">
            {/* <img src={photographer.imageSrc} alt={photographer.name} /> */}
            <Link to={`/post/${photographer._id}`} >
              <img src={`http://localhost:4000/uploads/${photographer.imageSrc}`} alt={photographer.name} />
              
            </Link>
            
            <p>Name: {photographer.name}</p>
            <p> <img src="whatsapp.png" alt="" /> {photographer.phone}</p>
            <p>Charge per Hour: {photographer.chargePerHour}</p>

 <Link to={`/post/${photographer._id}`}>
              <button className="book-now-button">Book Now</button>
            </Link>          </div>
        ))}
      </div>
      <Link to={'/view'}>
      <button id='view'>Veiw All</button>
      </Link>
    </div>
  );
};

export default PhotographerSection;
