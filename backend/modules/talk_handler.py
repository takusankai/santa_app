from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from database_settings import db
from modules.models import Talks

talk_handle_app = Blueprint('talk', __name__)

# トーク内容取得処理
@talk_handle_app.route('/talks', methods=['GET'])
@login_required
def get_talks():
    talks = Talks.query.filter_by(user_id=current_user.user_id).all()
    talk_list = []
    for talk in talks:
        talk_list.append({'contents': talk.contents, 'is_santa': talk.is_santa})
    return jsonify({'status': 'success', 'talks': talk_list})

# トーク内容登録処理
@talk_handle_app.route('/talks', methods=['POST'])
@login_required
def post_talks():
    data = request.json
    contents = data['contents']
    is_santa = data['is_santa']
    new_talk = Talks(user_id=current_user.user_id, contents=contents, is_santa=is_santa)
    db.session.add(new_talk)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'トーク内容を登録しました'})

# トーク内容削除処理
@talk_handle_app.route('/talks', methods=['DELETE'])
@login_required
def delete_talks():
    data = request.json
    talk_id = data['talk_id']
    talk = Talks.query.filter_by(talk_id=talk_id).first()
    db.session.delete(talk)
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'トーク内容を削除しました'})

# トーク内容更新処理
@talk_handle_app.route('/talks', methods=['PUT'])
@login_required
def update_talks():
    data = request.json
    talk_id = data['talk_id']
    contents = data['contents']
    is_santa = data['is_santa']
    talk = Talks.query.filter_by(talk_id=talk_id).first()
    talk.contents = contents
    talk.is_santa = is_santa
    db.session.commit()
    return jsonify({'status': 'success', 'message': 'トーク内容を更新しました'})

# （デバッグ用にログイン関係なく）全ユーザーのトーク情報を取得する処理
@talk_handle_app.route('/all_talks', methods=['GET'])
def get_all_talks():
    talks = Talks.query.all()
    talk_list = []
    for talk in talks:
        talk_list.append({'user_id': talk.user_id, 'contents': talk.contents, 'is_santa': talk.is_santa})
    return jsonify({'status': 'success', 'talks': talk_list})
