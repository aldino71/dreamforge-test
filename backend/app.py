from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from chatbot_config import gen_response
from chatbot_config import gen_dreamsmith_id

import openai
import os
import random
import string
#openai.api_key = os.environ.get['OPENAI_API_KEY']

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from http://localhost:3000
chatbot_configs = {}

test_data = {}

@app.route('/dreamforge-home-config', methods=['GET', 'POST'])
def get_prompt_response():
    ex_message = """
    Dungeon Name: Ember Sanctum TEST
    \n
    Description:
    The Ember Sanctum is a subterranean labyrinth nestled beneath the ruins of an ancient monastery that once served as a bastion of light and knowledge. Now, the echoing halls are home to a tribe of cunning kobolds led by their fiery-eyed matriarch, Zarrin. The air is thick with the scent of earth and the faint aroma of smoldering embers, a testament to the pyromaniacal tendencies of the Kobold queen.
    \n
    Dungeon Layout:
    The dungeon consists of a network of tunnels and chambers, with the ruins of the monastery acting as a deceptive facade above ground. Loose stones and dirt make navigation treacherous, concealing numerous traps and pitfalls set by the resourceful kobolds to deter intruders.
    \n
    Key Areas:
    \n
    Zarrin's Lair:
    Zarrin, the Kobold Matriarch, resides in a cavernous chamber adorned with stolen trinkets and treasures. Her single eye glows with a mischievous glint, and the air is thick with the acrid scent of burning herbs. Beware of concealed flame traps that she has strategically placed to guard her lair.
    \n
    Ancient Altars:
    Deep within the dungeon are remnants of the monastery's past. Dark sorcerers once held sway here, leaving behind ancient altars tainted with residual magic. These altars now serve as focal points for the kobolds' rituals and have been repurposed for their chaotic and often dangerous ceremonies.
    \n
    Stolen Storerooms:
    The Kobolds have raided nearby villages, Morris's Rest and Featherington, accumulating a hoard of stolen goods. Storerooms within the dungeon are filled with pilfered supplies, from grain sacks to intricate jewelry. Kobold guards patrol these areas, ever watchful of potential thieves.
    \n
    Trap-filled Corridors:
    The kobolds have ingeniously rigged many corridors with pressure plates, tripwires, and pitfalls. Unwary adventurers will find themselves falling prey to these traps if they aren't cautious. Kobold skirmishers often use these corridors to their advantage, ambushing intruders who trigger the traps.
    \n
    History:
    Decades ago, dark sorcerers seized the monastery, desecrating its sacred halls with dark rituals. The residue of their malevolent magic lingers, giving the dungeon an eerie atmosphere. The monastery's fall paved the way for the kobolds to make the Ember Sanctum their home. Zarrin, with her penchant for fire, claimed the ruins as her domain and began orchestrating raids on nearby villages.
    \nHooks for Adventurers:
    \nRescue Mission:
    Villagers from Morris's Rest and Featherington seek brave adventurers to rescue their stolen goods and loved ones taken captive by the kobolds.
    \nAncient Artifacts:
    Rumors speak of ancient artifacts hidden within the monastery's depths, drawing treasure hunters and scholars alike. Unbeknownst to them, the kobolds have already claimed these artifacts and incorporated them into their hoard.
    \nDark Sorcery's Resurgence:
    Scholars suspect that the dark sorcery once practiced in the monastery may be stirring again. An arcane order might task the adventurers with investigating and putting an end to any lingering dark magic.
    The Ember Sanctum presents a multifaceted challenge, blending history, danger, and the mischievous nature of kobolds in a dynamic dungeon-crawling experience.
    """
    ex_message = ex_message.split('\n')

    try:
        # Here you can implement logic to generate a response based on the received prompt
        # For simplicity, let's return a fixed message
        return jsonify({'success': True, 'message': ex_message})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

@app.route('/dreamsmith-get', methods=['GET'])
def handle_get():
    print("___Data GET___")
    print(test_data)
    try:
        return jsonify({'success': True, 'message': test_data})
    except Exception as ex1:
        return jsonify({'success': False, 'error': str(ex1)})

@app.route('/dreamsmith-post', methods=['GET', 'POST'])
def handle_post():
    try:
        try:
            data = request.get_json()
        except Exception as e1:
            print(e1)
            data = request.get_json()
        print("____Data____")
        print(data)
        test_data = data

        # Extract data from the JSON request
        #parameters = {
        #    'purpose': data.get('purpose'),
        #    'natural_environment' :data.get('naturalEnvironment'),
        #    'structural_design' :data.get('structuralDesign'),
        #    'atmosphere' :data.get('atmosphere'),
        #    'history' :data.get('history'),
        #    'notables' :data.get('notables'),
        #    'mysteries' :data.get('mysteries'),
        #    'culture' :data.get('culture'),
        #    'lootAndRumors' :data.get('lootAndRumors'),
        #    'recent_influence' :data.get('recentInfluence'),
        #    'map_legend' :data.get('mapLegend'),
        #    'room_legend' :data.get('roomLegend'),
        #    'inhabitants' :data.get('inhabitants')
        #}

        # Call genResponse to aquire OpenAI output
        #response_dict = gen_response(parameters)
        #print("Data type is: " + str(type(response_dict)))
#
        #dreamsmith_id = gen_dreamsmith_id()
        #print("______ID Created_______:")
        #print(dreamsmith_id)
#
        #chatbot_configs[dreamsmith_id] = response_dict
#
        #response_dict['dreamsmith_ID'] = dreamsmith_id
        #response_dict = "Hello"

        # Return a response
        #res = jsonify(response_dict)
        #print("______Jsonify_______:")
        #print(res)

        return jsonify({'success': True, 'message': "Hello"})
    except Exception as e2:
        return jsonify({'success': False, 'error': str(e2)})

if __name__ == '__main__':
    app.run(debug=True)
