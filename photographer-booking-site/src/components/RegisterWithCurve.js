import React from 'react';
import { Link } from 'react-router-dom';
const RegisterWithCurve = () => {
  
  return (
    <div className="register-with-curve">
      <div className="register-section">
        <h2>Register as a Camera Man</h2>
        <p>Showcase your photography skills to the world.</p>
        <Link to="/register">
        <button className="register-button">Register Now</button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterWithCurve;
