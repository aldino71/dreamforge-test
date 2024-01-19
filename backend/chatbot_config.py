import openai
import os
import random
import string
import pandas

def gen_dreamsmith_id():
    new_ID = ''.join(random.choices(string.ascii_uppercase+string.digits, k=6))
    return new_ID

def gen_response(parameters):
    # Construct a prompt using the parameters
    prompt = "Your role will be as an extension to a creative storyteller's (known as 'User') brain for Dungeons and Dragons. You are optimzied to be detail orientated and flexible to allow the 'User' to be the main driver for creativity. Your main knowledge base is sourced from anthropology, cultural/historical study of myths and civilizations, and fantasy storytelling. The 'User' will provide input parameters for you to use and explore so that the 'User' can flesh out their campaigns, characters, and storylines.\n\n"
    prompt += f"Create a {parameters['purpose']} with the following objective: "
    if parameters['purpose'] == 'Village':
        prompt += "Populate this location with a Village name. Include at least 2 notable individuals and at least 4 key buildings.\n\n"
    elif parameters['purpose'] == 'Town':
        prompt += "Populate this location with a Town name. Include at least 5 notable individuals and at least 9 key buildings. There should be at least 1 tavern/inn and 1 general store. List any organizations or guilds found in this city. Provide a brief description on the social structure, political structure, and economic welfare of the town. \n\n"
    elif parameters['purpose'] == 'Dungeon':
        prompt += "Populate this dungeon/encounter with a name and affiliated creature or organization based on user input. Design rooms, loot, and characters/creatures that share a theme with this location's description. Optionally, include traps or puzzles if applicable.\n\n"
    else:
        prompt += "Populate this building with a name and purpose based on user input. Design rooms, items, and characters/creatures that share a theme with this location's description.\n\n"

    prompt += "Include the following details:\n"
    prompt += f"Natural Environment: {parameters['natural_environment']}\n"
    prompt += f"Architectural/Structural Design: {parameters['structural_design']}\n"
    prompt += f"Atmosphere and Theme: {parameters['atmosphere']}\n"
    prompt += f"History: {parameters['history']}\n"
    prompt += f"Notable Characters or Creatures: {parameters['notables']}\n"
    prompt += f"Secrets and Mysteries: {parameters['mysteries']}\n"
    prompt += f"Cultures and Traditions: {parameters['culture']}\n"
    prompt += f"Items, Rumors, Secrets, and Treasure: {parameters['lootAndRumors']}\n"
    prompt += f"Recent Events at Location: {parameters['recent_influence']}\n"
    prompt += f"Population and Inhabitants: {parameters['inhabitants']}\n"

    prompt += "Display your results in the following format: 1. Synopsis (3-5 sentence summary on the location and the location name), 2. Notable Characters (List of named characters in this location that are important), 3. Plotlines (Based on the history, recent events, and rumors, create a list of plotlines suitable for an adventuring party), "

    if parameters['purpose'] == 'Village':
        prompt += "4. Buildings (List of important structures with a description on their appearances and purpose)."
    elif parameters['purpose'] == 'Town':
        prompt += "4. Buildings (List of important structures with a description on their appearances and purpose). 5. Organizations or Guilds (describe the connection to the city). 6. Socio-economic Structure (Describe the political and economic forces the drive this town) "
    elif parameters['purpose'] == 'Dungeon':
        prompt += "4. Rooms (list of notable rooms where enemies, treasure, or secrets can be found. Provide brief details on the rooms' appearance). "
    else:
        prompt += "4. Rooms (list of every rooms and who or what can be found in the room. Provide brief details on the rooms' appearance.). "



    # Call OpenAI API to get a response
    #gpt_response = openai.Completion.create(
    #    engine="text-davinci-002",  # Choose the appropriate engine
    #    prompt=prompt,
    #    max_tokens=150,  # Adjust as needed
    #    n=1,
    #    stop=None,
    #    temperature=0.7,
    #)

    # Extract the generated response
    generated_response = prompt

    # Create a JSON-like dict to return
    response_dict = {
        'generated_response': generated_response,
        'additional_info': 'Any additional info you want to include',
    }
    print("____Response Here____")
    print(response_dict)

    return response_dict
