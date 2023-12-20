// src/components/ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
  const [purpose, setPurpose] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    setSelectedOptions([]);
  };

  const handleOptionsChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/chatbot-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          purpose,
          selectedOptions,
          additionalInfo,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        setResponseMessage(responseData.responseMessage);
      } else {
        setResponseMessage(`Failed to submit configuration: ${response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Error submitting configuration: ${error.message}`);
    }
  };


  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h1>ChatBot Configuration</h1>
      <p>Select options below</p>
      <form onSubmit={handleSubmit}>
        <label>
          ChatBot Purpose:
          <select value={purpose} onChange={handlePurposeChange}>
            <option value="">Select Purpose</option>
            <option value="CreateWorld">Create World</option>
            <option value="ExpandWorld">Expand World</option>
            <option value="CharacterGenerator">Character Generator</option>
          </select>
        </label>

        {purpose && (
          <label>
            Options:
            <select
              multiple
              value={selectedOptions}
              onChange={handleOptionsChange}
            >
              {/* Render options based on selected purpose */}
              {purpose === 'CreateWorld' && (
                <>
                  <option value="Option1">Option 1</option>
                  <option value="Option2">Option 2</option>
                  <option value="Option3">Option 3</option>
                </>
              )}
              {purpose === 'ExpandWorld' && (
                <>
                  <option value="Option4">Option 4</option>
                  <option value="Option5">Option 5</option>
                  <option value="Option6">Option 6</option>
                </>
              )}
              {purpose === 'CharacterGenerator' && (
                <>
                  <option value="Option7">Option 7</option>
                  <option value="Option8">Option 8</option>
                  <option value="Option9">Option 9</option>
                </>
              )}
            </select>
          </label>
        )}

        <label>
          Additional Information:
          <textarea
            value={additionalInfo}
            onChange={(event) => setAdditionalInfo(event.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ChatBot;
