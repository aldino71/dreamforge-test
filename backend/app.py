from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/process-config', methods=['POST'])
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
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
