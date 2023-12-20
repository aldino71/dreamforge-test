// src/components/Home.js
import React, { useState, useEffect } from 'react';


const Home = () => {
  const [promptResponse, setPromptResponse] = useState('');
  const [displayedResponse, setDisplayedResponse] = useState('');
  const [isDisplaying, setIsDisplaying] = useState(false);

  useEffect(() => {
    // Trigger displayResponseCharacterByCharacter when promptResponse changes
    if (isDisplaying) {
      displayResponseCharacterByCharacter();
    }
  }, [promptResponse, isDisplaying]);

  const handleGetPromptResponse = async () => {
    // Clear the previous response
    setPromptResponse('');
    setDisplayedResponse('');

    try {
      const response = await fetch('http://localhost:5000/chatbot-home-config', {
        method: 'GET',
      });

      if (response.ok) {
        const responseData = await response.json();
        setPromptResponse(responseData.message);
        setIsDisplaying(true);
      } else {
        setPromptResponse(`Failed to get prompt response: ${response.statusText}`);
      }
    } catch (error) {
      setPromptResponse(`Error getting prompt response: ${error.message}`);
    }
  };

  const displayResponseCharacterByCharacter = () => {
    const delay = 50; // Adjust the delay between characters (in milliseconds)

      // Ensure promptResponse is defined
    if (!promptResponse) {
      return;
    }

    for (let i = 0; i < promptResponse.length; i++) {
      setTimeout(() => {
        setDisplayedResponse((prevResponse) => prevResponse + promptResponse[i]);
      }, i * delay);
    }

    setTimeout(() => {
      setIsDisplaying(false);
    }, promptResponse.length * delay);
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <h2>Welcome to the D&D ChatBot</h2>
      <p>Example Prompt: Describe, in detail, the fortress of an Ork Stronghold. It is located in a taiga biome and the Orks are known for hunting monsters in the area.</p>
      
      <button onClick={handleGetPromptResponse} disabled={isDisplaying}>
        {isDisplaying ? 'Getting Response...' : 'Get Prompt Response'}
      </button>

      {isDisplaying && <p>{displayedResponse}</p>}
      {!isDisplaying && promptResponse && <p>{promptResponse}</p>}
    </div>
  );
};

export default Home;
