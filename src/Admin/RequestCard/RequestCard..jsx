import React from 'react';
import './RequestCard.css'

const RequestCard = ({ request }) => {
  const { name, location, message, phone, email } = request;

  return (
    <div className="request-card">
      <p><strong>{name}</strong></p>
      <p>{location}</p>
      <p>{message}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <button className="delete-btn">🗑</button>
    </div>
  );
};

export default RequestCard;
