import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import Whatsapp from "./whatsapp.png";
import "./PhotographerPost.css";
import { Link } from 'react-router-dom';
const PhotographerPost = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);

  console.log(photographer);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPhotographer(data);
      })
      .catch((error) => {
        console.error("Error fetching photographer:", error);
      });
  }, [id]);

  if (!photographer) {
    return <div>Loading...</div>;
  }

  return (
    

    <div id="card">
      <img
        src={`http://localhost:4000/uploads/${photographer.imageSrc}`}
        alt={photographer.name}
      />
      <div className="profile-image">
        <img
          src={`http://localhost:4000/uploads/${photographer.imageSrc}`}
          alt={photographer.name}
        />
      </div>
      <div className="profile-info">
        <h2>Name:{photographer.name}</h2>
        <br />
        <p>{photographer.serviceLocation}</p>
        <div className="profile-contect"></div>
        <p style={{ marginRight: "4px" }}> <span style={{fontSize:'30px',position:'relative',top:'5px',color:'green',right:'9px',fontWeight:'bold'}}>&#9993;</span>{photographer.email}</p>
        <div className="profile-buttons">
   <Link to={`https://wa.me/91${photographer.phone}` } target="_blank" style={{ textDecoration: 'none' }}>

          <button className="whatsapp-button">
            {/* <img src={Whatsapp} alt="Whatsapp" /> */}
            Whatsapp
          </button>
          </Link>
          <button className="call-button">
            {/* <img src={Whatsapp} alt="Whatsapp" /> */}
            <span>&#9742;</span>
            Call Me
          </button>
        </div>
      </div>
      <p>{photographer.overview}</p>
    </div>
    
  );
};

export default PhotographerPost;



