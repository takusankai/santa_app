from database_settings import db
from flask_login import UserMixin
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship

# ユーザー情報クラスを作成
class Users(db.Model, UserMixin):
    __tablename__ = 'users'
    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(100), unique=True)
    user_name = db.Column(db.String(100))
    password = db.Column(db.String(100))
    santa_password = db.Column(db.String(100))

    talks = relationship("Talks", backref="user")

    # login_userで使用するためのメソッド
    def get_id(self):
        return self.user_id

# トーク内容クラスを作成
class Talks(db.Model):
    __tablename__ = 'talks'
    talk_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, ForeignKey('users.user_id'))
    contents = db.Column(db.String(300))
    is_santa = db.Column(db.Boolean)
