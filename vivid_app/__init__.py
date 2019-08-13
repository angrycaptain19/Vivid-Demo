from flask import Flask
from vivid_config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_login import LoginManager


vivid_app = Flask(__name__)
vivid_app.config.from_object(Config)
db = SQLAlchemy(vivid_app)
migrate = Migrate(vivid_app, db)
login = LoginManager(vivid_app)
login.login_view = '/login'

from vivid_app import routes, models
