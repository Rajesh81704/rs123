import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const recipientPhoneNumber = '+918597722752';
    const encodedMessage = encodeURIComponent(`Name: ${name}\nPhone Number: ${phoneNumber}\nMessage: ${message}`);
    const apiKey = '7572720';
    const whatsappApiUrl = `https://api.callmebot.com/whatsapp.php?phone=${recipientPhoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;
// const  abcd= async()=>{
//   const response = await fetch(whatsappApiUrl);
//   if (response.ok) {
//     window.alert('Message sent successfully!');
//     // window.location.href = "https://www.w3schools.com"; // Redirect to a URL
//   } else {
//     window.alert('Failed to send message. Please try again later.');
//   }
// }
// abcd();
    try {
      const response = await fetch(whatsappApiUrl);

      if (response.ok) {
        window.alert('Message sent successfully!');
        // window.location.href = "https://www.w3schools.com"; // Redirect to a URL
      } else {
        window.alert('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      window.alert('We will Get in Touch With You With in 1 Hour');
    }

    setName('');
    setPhoneNumber('');
    setMessage('');
  };

  return (
    <div style={styles.contactCard}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="name">Name:</label>
          <input
            style={styles.input}
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="phoneNumber">Phone Number:</label>
          <input
            style={styles.input}
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label} htmlFor="message">Message:</label>
          <textarea
            style={styles.input}
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button style={styles.button} type="submit">Request Callback</button>
      </form>
    </div>
  );
};

const styles = {
  contactCard: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '16px',
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default ContactForm;
