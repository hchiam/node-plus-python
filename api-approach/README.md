# Node.js + Python HTTP API approach

Instead of spawning Python as a subprocess.

- **Node.js server** (port 8001): Express server that makes HTTP requests to the Python API
- **Python server** (port 5000): Flask API server that handles requests and returns JSON responses

## setup

```sh
npm install
pip install -r requirements.txt
```

## run

In 2 separate CLI terminals:

```sh
npm start
```

and

```sh
python3 python-server.py
```

then open `http://localhost:8001` in a browser.

## endpoints

### Node.js server

- `GET http://localhost:8001/` - calls Python API and returns message result
- `GET http://localhost:8001/process?data=hello` - sends data to Python API for processing and result

### Python server

- `GET http://localhost:5000/api/message` - returns simple message
- `POST http://localhost:5000/api/process` - processes data sent from Node.js
