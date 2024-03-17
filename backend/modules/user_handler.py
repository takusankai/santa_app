from flask import Blueprint, jsonify, request
from database_settings import db
from modules.models import Users
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, current_user, login_required

user_handle_app = Blueprint('index', __name__)

# サインアップ処理
@user_handle_app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data['email']
    user_name = data['user_name']
    password = data['password']
    santa_password = data['santa_password']
    hashed_password = generate_password_hash(password, method='sha256')
    hashed_santa_password = generate_password_hash(santa_password, method='sha256')

    # emailは一意である必要がある
    if Users.query.filter_by(email=email).first():
        return jsonify({'status': 'failed', 'message': 'そのメールアドレスは既に登録されています'})
    
    # 2つのpasswordは異なる必要がある
    if password == santa_password:
        return jsonify({'status': 'failed', 'message': 'パスワードとサンタパスワードは異なる必要があります'})
    
    new_user = Users(email=email, user_name=user_name, password=hashed_password, santa_password=hashed_santa_password)
    db.session.add(new_user)
    db.session.commit()

    login_user(new_user, remember=True)
    return jsonify({'status': 'success', 'message': 'ユーザー登録が正常に完了しました'})

# ログイン処理
@user_handle_app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data['email']
    password = data['password']

    # emailとpasswordが一致するユーザーがいるか確認
    user = Users.query.filter_by(email=email).first()
    if user and check_password_hash(user.password, password):
        login_user(user, remember=True)
        return jsonify({'status': 'success', 'message': 'ログインに成功しました'})
    
    return jsonify({'status': 'failed', 'message': 'ログインに失敗しました'})

# ログアウト処理
@user_handle_app.route('/logout', methods=['GET'])
@login_required
def logout():
    logout_user()
    return jsonify({'status': 'success', 'message': 'ログアウトしました'})

# ユーザー情報取得処理
@user_handle_app.route('/user', methods=['GET'])
@login_required
def get_user():
    user = Users.query.filter_by(user_id=current_user.user_id).first()
    return jsonify({'status': 'success', 'user': {'email': user.email, 'user_name': user.user_name}})

# （デバッグ用にログイン関係なく）全ユーザーのユーザー情報を取得する処理
@user_handle_app.route('/all_users', methods=['GET'])
def get_all_users():
    users = Users.query.all()
    return jsonify({'status': 'success', 'users': users})

# サンタであることを判定する処理
@user_handle_app.route('/santa_login', methods=['POST'])
@login_required
def santa_login():
    data = request.json
    santa_password = data['santa_password']

    user = Users.query.filter_by(user_id=current_user.user_id).first()
    if user and check_password_hash(user.santa_password, santa_password):
        return jsonify({'status': 'success', 'message': 'サンタとしてログインしました'})
    
    return jsonify({'status': 'failed', 'message': 'サンタとしてログインに失敗しました'})
