import React, { useState } from "react";
import "./Rg.css";
// import { Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [chargePerHour, setChargePerHour] = useState("");
  const [imageSrcFile, setImageSrcFile] = useState(null);
  const [email, setEmail] = useState("");
  const [photoshootType, setPhotoshootType] = useState("");
  const [eventRate, setEventRate] = useState("");
  const [overview, setOverview] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");
  // const [Redirect, setRedirect] = useState(false);
  // console.log(Redirect);

  const handleSubmit = async (event) => {
    const recipientPhoneNumber = '+918597722752';
    const encodedMessage = encodeURIComponent(`Name: ${name}\nPhone Number: ${phone}\nChargePerHour: ${chargePerHour}\nEmail:${email}\nPhotoshootType:${photoshootType}\nEventRate:${eventRate}\nOverview:${overview}\nServiceLocation:${serviceLocation}`);
    const apiKey = '7572720';
    const whatsappApiUrl = `https://api.callmebot.com/whatsapp.php?phone=${recipientPhoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;

    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("chargePerHour", chargePerHour);
    formData.append("profileImage", imageSrcFile);
    formData.append("email", email);
    formData.append("photoshootType", photoshootType);
    formData.append("eventRate", eventRate);
    formData.append("overview", overview);
    formData.append("serviceLocation", serviceLocation);

    try {
      const response = await fetch("http://localhost:4000/users", {
        method: "POST",
        body: formData,
      });
      const SendData = await fetch(whatsappApiUrl);
      if (SendData.ok){
        console.log(SendData);
      }

      if (response.ok) {
        alert("Registration Successful");
    // setRedirect(true)

      } else {
        alert("Registration Failed");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Registration Successful");
    }
  };

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImageSrcFile(selectedImage);
    setImageSrc(URL.createObjectURL(selectedImage));
    
  };
  // const handleImageChange = (event) => {
  //   const selectedImages = event.target.files;
  //   const imageFiles = Array.from(selectedImages);
  
  //   const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));
  
  //   setImageSrcFile(imageFiles);
  //   setImageSrc(imageUrls);
  // };

  function Reset() {
    setName("");
    setPhone("");
    setChargePerHour("");
    setImageSrcFile(null);
    setImageSrc("");
    setEmail("");
    setPhotoshootType("");
    setEventRate("");
    setOverview("");
    setServiceLocation("");
  }

// if(Redirect){
//   return <Navigate to={'/'} />;
// }
  return (
    <div className="register-with-curve">
      <div className="register-section">
        <h2 id="h2">Register as a Camera Man</h2>
        <p>Showcase your photography skills to the world.</p>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Type Your Name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="charge">Charge Per Hour:</label>
            <input
              type="text"
              id="charge"
              name="charge"
              required
              placeholder="What is Your Charge Per Hour"
              value={chargePerHour}
              onChange={(ev) => setChargePerHour(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="phone">Whatsapp No:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="Type Your 10 Digit Number ex-1234567890"
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="profileImage">Profile Image:</label>
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              required
              multiple  
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>

          <div className="input-container">
            <label htmlFor="portfolio">Portfolio Link:</label>
            <input
              type="text"
              id="portfolio"
              name="portfolio"
              required
              placeholder="It Will AutoGenerate"
              value={imageSrc}
              onChange={(ev) => setImageSrc(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email Address"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="photoshootType">Photoshoot Type:</label>
            <input
              type="text"
              id="photoshootType"
              name="photoshootType"
              required
              placeholder="Type of Photoshoot"
              value={photoshootType}
              onChange={(ev) => setPhotoshootType(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="eventRate">Event Rate:</label>
            <input
              type="text"
              id="eventRate"
              name="eventRate"
              required
              placeholder="Your Event Rate"
              value={eventRate}
              onChange={(ev) => setEventRate(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="overview">Overview:</label>
            <textarea
              id="overview"
              name="overview"
              required
              placeholder="Brief Overview"
              value={overview}
              onChange={(ev) => setOverview(ev.target.value)}
            />
          </div>

          <div className="input-container">
            <label htmlFor="serviceLocation">Service Location:</label>
            <input
              type="text"
              id="serviceLocation"
              name="serviceLocation"
              required
              placeholder="Your Service Location"
              value={serviceLocation}
              onChange={(ev) => setServiceLocation(ev.target.value)}
            />
          </div>

          <div className="button-container">
            <button type="submit" id="register-button">
              Register Now
            </button>
            <button type="reset" onClick={Reset} id="register-button">
              Reset Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
