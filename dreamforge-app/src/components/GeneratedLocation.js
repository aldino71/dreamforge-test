// src/components/GeneratedLocation.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const GeneratedLocation = () => {
  const location = useLocation();
  const responseData = location.state?.responseData || {};

  return (
    <div>
      <h1>Generated Location</h1>
      <p>Generated Response: {responseData.generated_response}</p>
      <p>Additional Info: {responseData.additional_info}</p>
      {/* ... (display other information based on the JSON response) */}
    </div>
  );
};

export default GeneratedLocation;
