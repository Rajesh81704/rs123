// SendSMSForm.js
import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const SendSMSToPhotographer = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = async () => {
    const apiKey = '1847995'; // Your API Key
    const encodedMessage = encodeURIComponent(message);
    const apiUrl = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;

    try {
      const response = await axios.get(apiUrl); // Use Axios to make the GET request

      if (response.status === 200) {
        alert('SMS sent successfully!');
      } else {
        alert('Failed to send SMS. Please check your inputs.');
      }
    } catch (error) {
      console.error('Error sending SMS:', error);
      alert('An error occurred while sending SMS.');
    }
  };

  return (
    <div>
      <h2>Send SMS</h2>
      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button onClick={handleSendMessage}>Send SMS</button>
    </div>
  );
};

export default SendSMSToPhotographer;
