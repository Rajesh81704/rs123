import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: 'Professional Photographers',
      text: 'Capture your memories with experienced photographers.',
      logoSrc: 'love-card.png', // Replace with your logo image URL
    },
    {
      id: 2,
      title: 'Wide Collection',
      text: 'Choose from a wide range of photography collections.',
      logoSrc: 'wallet.png', // Replace with your logo image URL
    },
    {
      id: 2,
      title: 'Wide Collection',
      text: 'Shortlist Photographers you like based on their albums, packages and reviews to keep track. ',
      logoSrc: 'contact-list.png', // Replace with your logo image URL
    },
    {
      id: 3,
      title: 'Affordable Rates',
      text: 'Quality photography at affordable hourly rates.',
      logoSrc: 'best-price.png', // Replace with your logo image URL
    },
  ];

  return (
    <div className="feature-section">
      {features.map((feature) => (
        <div key={feature.id} className="feature-card">
          <img src={feature.logoSrc} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureSection;
