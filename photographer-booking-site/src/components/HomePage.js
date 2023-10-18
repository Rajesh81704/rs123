import React from 'react';
// import NavBar from './NavBar'; // Import the NavBar component
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    
    <div className="home-page background-image">
    {/* <NavBar></NavBar> */}

      <h1>Welcome to BookMy Shoot</h1>
      <p>Find the perfect photographer for your special moments.</p>
      <div className="buttons">
        <Link to="/contact">
        <button>Call Us</button></Link>
        <Link to={'/view'}>
        <button id='book-now'>Book Now</button>

        </Link>
      </div>
    </div>
  );
};

export default HomePage;
