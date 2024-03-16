from flask import Flask, jsonify
from flask_login import LoginManager
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from modules.models import Users
import os

def create_app():
    app = Flask(__name__)
    app.secret_key = 'your-secret-key'

    # 環境変数 DATABASE_URL があればそれを使う、なければ sqlite:///sample.db を使う
    print("log確認用、DATABASE_URL:::::", os.getenv('DATABASE_URL', 'sqlite:///sample.db'))
    DATABASE_URL = os.getenv('DATABASE_URL', 'sqlite:///sample.db')
    if DATABASE_URL.startswith("postgres://"):
        DATABASE_URL = DATABASE_URL.replace("postgres://", "postgresql://", 1)
    app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL
    
    # DB設定
    db = SQLAlchemy()
    db.init_app(app)
    migrate = Migrate(app, db)
    with app.app_context():
        db.create_all()
        db.session.commit()
        db.session.close()
        print('DB initialized')

    # セッション管理設定
    login_manager = LoginManager()
    # login_manager.login_view = '/' # ログイン出来ていない場合はこのURLにリダイレクトされる
    login_manager.init_app(app)

    @login_manager.user_loader
    def load_user(user_id):
        return Users.query.get(int(user_id))

    # modules下のブループリントを呼び出す
    from modules.user_handler import user_handle_app
    app.register_blueprint(user_handle_app)
    
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
