// GeneratedLocation.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const GeneratedLocation = () => {
  const { chatbotId } = useParams();
  const [parameters, setParameters] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/dreamsmith-get`);
        if (response.ok) {
          const data = await response.json();
          setParameters(data.parameters);
        } else {
          const data = await response.json();
          setError(data.error);
        }
      } catch (error) {
        setError(error.toString());
      }
    };

    fetchData();
  });

  return (
    <div>
      <h1>Generated Location</h1>
      <h1>Test</h1>
      {parameters && (
        <div>
          <p>ChatBot ID: {chatbotId}</p>
          <p>Parameters:</p>
          <pre>{JSON.stringify(parameters, null, 2)}</pre>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GeneratedLocation;
