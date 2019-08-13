from vivid_app import db, login
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin

class User(UserMixin, db.Model):
	id = db.Column(db.Integer, primary_key=True)
	email = db.Column(db.String(120), index=True, unique=True)
	password_hash = db.Column(db.String(128))
	company_id = db.Column(db.Integer, db.ForeignKey('company.id'))


	def __repr__(self):
		return '<User {}>'.format(self.email)

	def set_password(self, password):
		self.password_hash = generate_password_hash(password)

	def check_password(self, password):
		return check_password_hash(self.password_hash, password)

class Company(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	company_name = db.Column(db.String(140))
	domain = db.Column(db.String(120), index=True, unique=True)
	users = db.relationship('User', backref='company', lazy='dynamic')

	def __repr__(self):
		return '<Company {}>'.format(self.company_name)

@login.user_loader
def load_user(id):
	return User.query.get(int(id))
