from flask import Flask, jsonify

def create_app():
    app = Flask(__name__)
    app.secret_key = 'your-secret-key'
    
    return app

app = create_app()

@app.route('/')
@app.route('/<name>')
def hello(name=None):
    # name があれば、message: Hello, {name}! を返す
    if name:
        return jsonify({'message': f'Hello, {name}!'})
    
    # name がなければ、message: Hello, World! を返す
    return jsonify({'message': 'Hello, World!'})
