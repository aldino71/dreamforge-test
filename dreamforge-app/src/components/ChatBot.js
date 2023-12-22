// src/components/ChatBot.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './ChatBot.css'; // Import the CSS file

const ChatBot = () => {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState('');
  const [naturalEnvironment, setNaturalEnvironment] = useState('');
  const [structuralDesign, setStructuralDesign] = useState('');
  const [atmosphere, setAtmosphere] = useState('');
  const [history, setHistory] = useState('');
  const [recentInfluence, setRecentInfluence] = useState('');
  const [culture, setCulture] = useState('');
  const [inhabitants, setInhabitants] = useState('');
  const [mysteries, setMysteries] = useState('');
  const [notables, setNotableNPC] = useState('');
  const [lootAndRumors, setLootRumors] = useState('');
  const [mapLegend, setMapLegend] = useState(false);   
  const [roomLegend, setRoomLegend] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);

  const handlePurposeChange = (event) => {
    const newPurpose = event.target.value;

    // Reset state variables when ChatBot Purpose changes
    setPurpose(newPurpose);
    setMapLegend(false);
    setRoomLegend(false);
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
          naturalEnvironment,
          structuralDesign,
          atmosphere,
          history,
          notables,
          mysteries,
          culture,
          lootAndRumors,
          recentInfluence,
          inhabitants,
          mapLegend,
          roomLegend
        }),
      });

      if (response.ok) {
        const responseData = await response.json();
        // Navigate to a new page and pass the response data as a parameter
        navigate('/generated-location', { state: { responseData } });
      } else {
        setResponseMessage(`Failed to submit configuration: ${response.statusText}`);
      }
    } catch (error) {
      setResponseMessage(`Error submitting configuration: ${error.message}`);
    }
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <h1>ChatBot Configuration</h1>
      <p>Select purpose and provide information</p>
      <br></br>
      <form onSubmit={handleSubmit}>
        <label>
          Choose a Location Generator:
          <label>
            <br></br>1. - Village - Populates a village with a name, inhabitants, and a few buildings. Creates a small amount of backstory for the village.
            <br></br>2. Town - Complex version of Village selection. Includes Village output along with buildings and guilds with larger historical/cultural background.
            <br></br>3. Dungeon - Creates a dungeon with a specific creature/organization in mind. Fleshes out the dungeon’s design in relation to the inhabitants activities.
            <br></br>4. Building - Similar to dungeon parameter, but heavily reducing the traps, monsters, and loot. 
          </label>
          <br></br>
          <select value={purpose} onChange={handlePurposeChange}>
            <option value="">Select Purpose</option>
            <option value="Village">Create Village</option>
            <option value="Town">Create Town</option>
            <option value="Building">Create Building</option>
            <option value="Dungeon">Create Dungeon</option>
          </select>
        </label>

        {purpose && (
          <>
            <div>
              <label>
                -----------------------------------------<br></br>
                Natural Environment:
                <br />
                <span className="parameter-description">
                  Describe where this location is in relation to its natural surroundings. What is the flora and fauna? What are major points regarding climate and geography?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={naturalEnvironment}
                  onChange={(event) => setNaturalEnvironment(event.target.value)}
                  placeholder="This village is in a tundra. There are few pine trees and bushes that populate the area. There is a river delta located at the edge of the village."
                />
              </label>
            </div>

            <div>
              <label>
                Structural Design:
                <br />
                <span className="parameter-description">
                If applicable, describe the architecture and building styles used? What materials and design styles are found?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={structuralDesign}
                  onChange={(event) => setStructuralDesign(event.target.value)}
                  placeholder="The mead hall is in a Nordic architecture style with some Gothic influence. It is made of dark wood and gray stone bricks. Skulls and torches are found decorating the walls of the building."
                />
              </label>
            </div>

            <div>
              <label>
                Atmosphere:
                <br />
                <span className="parameter-description">
                Describe the mood of the location. Dark and gloomy due to recent circumstance? Jolly due to a recent celebration?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={atmosphere}
                  onChange={(event) => setAtmosphere(event.target.value)}
                  placeholder="The town is at edge due to a string of murders. Townsfolk look hesitant and avoidant. Town preachers make shallow attempts to coordinate gatherings in public."
                />
              </label>
            </div>

            <div>
              <label>
                History:
                <br />
                <span className="parameter-description">
                Describe a brief history of this place. An abandoned site recently settled by prospectors? Does this location serve a purpose, or served one long ago?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={history}
                  onChange={(event) => setHistory(event.target.value)}
                  placeholder="The village was frequently used by hunters as a place of rest before venturing in the forest. It provided fletchers with mastercraft woodworkers over the years."
                />
              </label>
            </div>

            <div>
              <label>
                Notable NPCs:
                <br />
                <span className="parameter-description">
                Are there any people/creatures that are known in this location, either publicly or secretly? How big is their influence in this location?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={notables}
                  onChange={(event) => setNotableNPC(event.target.value)}
                  placeholder="The orc warchief Saverok is said to operate here with his generals, Morazak and Krek."
                />
              </label>
            </div>

            <div>
              <label>
                Mysteries:
                <br />
                <span className="parameter-description">
                What are some potential hooks for the party to uncover here? What surprises and hidden aspects can players uncover?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={mysteries}
                  onChange={(event) => setMysteries(event.target.value)}
                  placeholder="The wizard's tower is found at the edge of the village. It has magical locks that thieves have tried to break but always fail fatally."
                />
              </label>
            </div>

            <div>
              <label>
                Tradition and Culture:
                <br />
                <span className="parameter-description">
                  Describe the lifestyles and cultures of the inhabitants here? What is their social structure and societal practices? What is the locations primary focal points in terms of economy or production?</span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={culture}
                  onChange={(event) => setCulture(event.target.value)}
                  placeholder="The elven fortress hosts a weekly dance and feast to provide relief for the soldiers. This is the one day of the week where gates are open to traders and smiths, but security is on high alert."
                />
              </label>
            </div>

            <div>
              <label>
                Loot and Rumors:
                <br />
                <span className="parameter-description">
                Describe the rumors that other people use to talk about this location. What can potentially be found here? What should be avoided at all costs?
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={lootAndRumors}
                  onChange={(event) => setLootRumors(event.target.value)}
                  placeholder="The Dragon Tooth Dagger was last seen in this cave, where kobolds frequently come to search it out but never return."
                />
              </label>
            </div>

            <div>
              <label>
                Recent Influence:
                <br />
                <span className="parameter-description">
                What events or circumstances have been affecting this location as of late? 
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={recentInfluence}
                  onChange={(event) => setRecentInfluence(event.target.value)}
                  placeholder="The Mavenwood Manor has not been the same since Albus Mavenwood was hung for his crimes against the city."
                />
              </label>
            </div>

            <div>
              <label>
                Inhabitants:
                <br />
                <span className="parameter-description">
                What kinds of people or creatures inhabit this space? List any humanoids or creatures that will be found here.
                </span>
                <br />
                <textarea
                  className="textarea-default-size"
                  value={inhabitants}
                  onChange={(event) => setInhabitants(event.target.value)}
                  placeholder="On the outskirts of a tundra near a river delta with pine trees surrounding the village."
                />
              </label>
            </div>

            {purpose === 'Town' && (
              <div>
                <label>
                  Map Legend:
                  <input
                    type="checkbox"
                    checked={mapLegend}
                    onChange={() => setMapLegend(!mapLegend)}
                  />
                </label>
              </div>
            )}

            {purpose === 'Dungeon' && (
              <div>
                <label>
                  Room Legend:
                  <input
                    type="checkbox"
                    checked={roomLegend}
                    onChange={() => setRoomLegend(!roomLegend)}
                  />
                </label>
              </div>
            )}

            {purpose === 'Village' && (
              <div>
                <label>
                  Map Legend:
                  <input
                    type="checkbox"
                    checked={mapLegend}
                    onChange={() => setMapLegend(!mapLegend)}
                  />
                </label>
              </div>
            )}

            {purpose === 'Building' && (
              <div>
                <label>
                  Room Legend:
                  <input
                    type="checkbox"
                    checked={roomLegend}
                    onChange={() => setRoomLegend(!roomLegend)}
                  />
                </label>
              </div>
            )}
          </>
        )}
        <br></br>-----------------------------------------
        <br></br>
        <button type="submit">Generate Location</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default ChatBot;
