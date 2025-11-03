from flask import Flask, jsonify, request

app = Flask(__name__)
port = 5000

@app.route('/api/message', methods=['GET'])
def get_message():
    """Simple endpoint that returns a message"""
    return jsonify({
        'message': 'This is a message from a Python API server! :)'
    })

@app.route('/api/process', methods=['POST'])
def process_data():
    """Endpoint that processes data sent from Node.js"""
    data = request.get_json()
    input_data = data.get('data', 'no data')
    
    # Do some processing
    result = f"Python processed: \"{input_data}\" capitalized is \"{input_data.upper()}\""
    
    return jsonify({
        'result': result
    })

if __name__ == '__main__':
    print(f"Python API server listening on port {port}")
    app.run(debug=True, port=port)

