// src/components/ChatBot.js
import React, { useState } from 'react';

const ChatBot = () => {
  const [purpose, setPurpose] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handlePurposeChange = (event) => {
    setPurpose(event.target.value);
    setSelectedOptions([]); // Reset selectedOptions when purpose changes
  };

  const handleOptionsChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create JSON object with user selections
    const chatbotConfig = {
      purpose,
      selectedOptions,
      additionalInfo,
    };
    // Send the JSON to the backend (to be implemented)
    console.log(chatbotConfig);
  };

  return (
    <div>
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
    </div>
  );
};

export default ChatBot;
