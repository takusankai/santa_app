from flask import Flask, jsonify
import os

def create_app():
    app = Flask(__name__)
    app.secret_key = 'your-secret-key'

    # 環境変数 DATABASE_URL があればそれを使う、なければ sqlite:///sample.db を使う
    print("次がDATABASE_URL:::::::::::::::::", os.getenv('DATABASE_URL', 'sqlite:///sample.db'))
    DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///sample.db')
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    # app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    
    # init_db(app)
    
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
