import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);

  useEffect(() => {
    // Check if the user is logged in by making an API request
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      if (response.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);
  console.log(isLoggedIn);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <img src="logo.png" alt="Logo" />
          <h1>BookMe</h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {isLoggedIn ? (
          <>
            {/* Links to display when the user is logged in */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </>
        ) : (
          <>
            {/* Links to display when the user is not logged in */}
            <li><Link to="/registeruser">Register</Link></li>
            
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">CMR</Link></li>
          </>
        )}

        <li><Link to="/view">Photographers</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
