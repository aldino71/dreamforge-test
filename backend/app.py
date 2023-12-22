from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from http://localhost:3000

@app.route('/chatbot-config', methods=['GET', 'POST'])
def process_config():
    try:
        data = request.get_json()

        # Extract data from the JSON request
        purpose = data.get('purpose')
        natural_environment = data.get('naturalEnvironment')
        structural_design = data.get('structuralDesign')
        atmosphere = data.get('atmosphere')
        history = data.get('history')
        notables = data.get('notables')
        mysteries = data.get('mysteries')
        culture = data.get('culture')
        lootAndRumors = data.get('lootAndRumors')
        recent_influence = data.get('recentInfluence')
        inhabitants = data.get('inhabitants')

        # Process the data (you can customize this part based on your needs)
        result_message = f"Config received for {purpose}. Additional information: \
            \nNatural Environment: {natural_environment} \
            \nStructural Design: {structural_design} \
            \nAtmosphere: {atmosphere} \
            \nHistory: {history} \
            \nNotables: {notables} \
            \nMysteries: {mysteries} \
            \nTradition and Culture: {culture} \
            \nLoot and Rumors: {lootAndRumors} \
            \nRecent Influence: {recent_influence} \
            \nInhabitants: {inhabitants}"

        # Print the result in the terminal
        print(result_message)

        # Return a response
        return jsonify({'responseMessage': 'Response Received'}), 200

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

if __name__ == '__main__':
    app.run(debug=True)
