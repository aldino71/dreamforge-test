// src/components/GeneratedLocation.js

import React, {useState} from 'react';
import { useLocation } from 'react-router-dom';

const GeneratedLocation = () => {
  const [responseMessage, setResponseMessage] = useState('');

  const handleGenerateLocation = async () => {
    try {
      const response = await fetch('http://localhost:5000/generate-location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          response
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage(responseData.message);
      } else {
        setResponseMessage(`Failed to generate location: ${response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Error generating location: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Generated Location</h1>
      <button onClick={handleGenerateLocation}>Generate Location</button>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default GeneratedLocation;

