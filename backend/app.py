from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})  # Allow requests from http://localhost:3000

@app.route('/process-config', methods=['GET', 'POST'])
def process_config():
    try:
        data = request.json
        print("Received Configuration:")
        print("Purpose:", data.get('purpose'))
        print("Selected Options:", data.get('selectedOptions'))
        print("Additional Info:", data.get('additionalInfo'))

        # Here, you can implement logic to interact with OpenAI or perform other tasks

        return jsonify({'success': True, 'message': 'Configuration processed successfully'})
    except Exception as e:
        print("Exception raised.")
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
