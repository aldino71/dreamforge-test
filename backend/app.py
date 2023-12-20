from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from http://localhost:3000

@app.route('/chatbot-config', methods=['GET', 'POST'])
def process_config():
    try:
        data = request.json
        print(type(data))
        print("Received Configuration:")
        print("Purpose:", data.get('purpose'))
        print("Selected Options:", data.get('selectedOptions'))
        print("Additional Info:", data.get('additionalInfo'))

        # Here, you can implement logic to interact with OpenAI or perform other tasks

        response_message = f"You have selected {data.get('selectedOptions')} with additional input: {data.get('additionalInfo')}"
        return jsonify({'success': True, 'message': 'Configuration processed successfully', 'responseMessage':response_message})
    except Exception as e:
        print("Exception raised (FC):")
        return jsonify({'success': False, 'error': str(e)})

@app.route('/chatbot-home-config', methods=['GET'])
def get_prompt_response():
    try:
        # Here you can implement logic to generate a response based on the received prompt
        # For simplicity, let's return a fixed message
        print("Received Home Configuration:")
        return jsonify({'success': True, 'message': 'Hello Ork World!'})
    except Exception as e:
        print("Exception Raised (FH):")
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
