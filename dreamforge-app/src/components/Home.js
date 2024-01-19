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
    const delay = 10; // Adjust the delay between characters (in milliseconds)

    // Ensure promptResponse is defined
    if (!promptResponse) {
      return;
    }
    console.log(typeof (promptResponse))

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
      <h2>Welcome to the Dreamforge!</h2>
      <p> Dreamforge is a service that will produce personalized Dreamsmiths to build your Dungeons and Dragons world.</p>
      <br></br>
      <p>What is a Dreamsmith?</p> <br></br>
      <p>A dreamsmith is an OpenAI GPT instance that will take user inputs on a desired location and generate a concept for that place you have in mind.

      </p><br></br>
      <p>Example Prompt:
      <br></br> Create a Kobold Dungeon.
      <br></br> Include the Kobold Matriarch, Zarrin. She has one eye and is a pyromaniac.
      <br></br> The dungeon should be the ruins of an old monastary. Include lots of loose stone and dirt.
      <br></br> The monastary was taken over by dark sorcers decades ago. Include some of their ancient altars and influence before the Kobold moved in.
      <br></br> The Kobolds have stolen from the local villages: Morris's Rest and Featherington.
      </p>

      <button onClick={handleGetPromptResponse} disabled={isDisplaying}>
        {isDisplaying ? 'Getting Response...' : 'Get Prompt Response'}
      </button>
      {isDisplaying && <p>{displayedResponse}</p>}
      {!isDisplaying && promptResponse && <p>{promptResponse}</p>}
    </div>
  );
};

export default Home;

