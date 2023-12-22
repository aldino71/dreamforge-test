from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import openai
import os
#openai.api_key = os.environ.get['OPENAI_API_KEY']

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from http://localhost:3000

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/chatbot-config', methods=['GET', 'POST'])
def process_config():
    try:
        data = request.get_json()

        # Extract data from the JSON request
        parameters = {
        'purpose': data.get('purpose'),
        'natural_environment' :data.get('naturalEnvironment'),
        'structural_design' :data.get('structuralDesign'),
        'atmosphere' :data.get('atmosphere'),
        'history' :data.get('history'),
        'notables' :data.get('notables'),
        'mysteries' :data.get('mysteries'),
        'culture' :data.get('culture'),
        'lootAndRumors' :data.get('lootAndRumors'),
        'recent_influence' :data.get('recentInfluence'),
        'map_legend' :data.get('mapLegend'),
        'room_legend' :data.get('roomLegend'),
        'inhabitants' :data.get('inhabitants')
        }
        print('Parameters recieved:')
        print(parameters)
        print("----------------")

        # Call genResponse to aquire OpenAI output
        response_dict = gen_response(parameters)

        # Return a response
        return jsonify(response_dict)

    except Exception as e:
        # Handle exceptions appropriately
        print(f"Error processing configuration: {str(e)}")
        return jsonify({'responseMessage': 'Error processing configuration'}), 500


@app.route('/chatbot-home-config', methods=['GET', 'POST'])
def get_prompt_response():
    ex_message = '''
    Welcome to the Ork Stronghold of Frostfang Fortress, nestled deep within the heart of the taiga biome. This formidable fortress stands as a testament to the strength and savagery of the Ork warbands that call it home. As you approach through the dense, snow-laden trees, the air is filled with the scent of pine and the distant roars of monsters echoing through the frosty wilderness.

    \n Exterior:
    Frostfang Fortress is a massive, imposing structure built from rough-hewn logs, enormous stones, and the bones of formidable monsters conquered by the Orks. Tall wooden walls, adorned with gruesome trophies such as the skulls of dire wolves and frost giants, surround the stronghold. The outer defenses include sharpened stakes, pitfalls, and crude watchtowers manned by vigilant Ork sentinels.

    The fortress itself is a sprawling complex of interconnected longhouses, watchtowers, and barracks. Thick layers of snow and ice cover the roofs, providing additional insulation against the harsh winter winds. A massive, intricately carved gate adorned with the symbols of Ork war gods serves as the main entrance, guarded by heavily armed Ork warriors.

    \n\n  Interior:
    Upon entering the stronghold, visitors are greeted by a central courtyard covered in packed snow and surrounded by various buildings. The air is thick with the scent of burning wood from numerous hearths, and the sounds of blacksmiths hammering on anvils echo through the halls.

    \n\n  Great Hall: The heart of Frostfang Fortress is the Great Hall, a colossal structure where the Ork chieftain holds court and feasts with his lieutenants. The walls are adorned with the spoils of monster hunts—trophies, skins, and fearsome weapons. A massive, crackling fire pit in the center bathes the hall in warmth, and the air is thick with the aroma of roasted meats.

    \n\n  Barracks: The living quarters for the Ork warriors are a series of longhouses surrounding the Great Hall. Each longhouse is filled with bunk beds made of furs and animal hides. Ork war paint and tribal symbols decorate the walls, and the crude smell of weapon oils and armor permeates the air.

    \n\n  Shaman's Hut: The fortress is home to a revered Ork shaman who communicates with the spirits of the taiga. The shaman's hut is adorned with mystical symbols, bones, and totems. A mystical aura fills the air, and the shaman's eerie chants can be heard echoing throughout the stronghold.

    \n\n  Monster Trophy Room: One of the most impressive chambers in Frostfang Fortress is the Monster Trophy Room. Here, the Orks proudly display the heads, claws, and hides of the formidable monsters they have hunted. It serves as both a testament to their prowess and a warning to any who would dare challenge them.

    \n\n  Activities and Lifestyle:
    The Orks of Frostfang Fortress are a hardy and fierce people, known for their love of battle and hunting. They spend much of their time honing their combat skills, crafting weapons, and planning their next monster-hunting expeditions. The taiga provides ample opportunities for hunting dire wolves, yetis, and other magical creatures that inhabit the snowy wilderness.

    \n\n  Surrounding Area:
    The taiga around Frostfang Fortress is a treacherous and unforgiving landscape. The Orks venture deep into the wilderness to face off against fearsome monsters, bringing back trophies and resources to sustain their stronghold. The trees are twisted and covered in snow, and the frozen lakes conceal dangerous creatures beneath their icy surfaces.

    Frostfang Fortress stands as a bastion of Ork strength in the frozen wilderness, a place where the call of battle and the thrill of the hunt echo through the taiga, leaving a mark on both the land and those who dare to challenge the might of the Orks.
    '''
    try:
        # Here you can implement logic to generate a response based on the received prompt
        # For simplicity, let's return a fixed message
        return jsonify({'success': True, 'message': ex_message})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})
    

#########################################################################

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
    prompt += f"history: {parameters['history']}\n"
    prompt += f"Notable Characters or Creatures: {parameters['notables']}\n"
    prompt += f"Secrets and Mysteries: {parameters['mysteries']}\n"
    prompt += f"Cultures and Traditions: {parameters['culture']}\n"
    prompt += f"Items, Rumors, Secrets, and Treasure: {parameters['lootAndRumors']}\n"
    prompt += f"Recent Events at Location: {parameters['recent_influence']}\n"
    prompt += f"Population and Inhabitants: {parameters['inhabitants']}\n"

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
    print("Response")
    print(response_dict)

    return response_dict

if __name__ == '__main__':
    app.run(debug=True)
