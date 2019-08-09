import os
basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'you-will-never-guess'
    db_user = 'vivid_admin'
    db_password= 'timnotjim'
    endpoint = 'vivid-database.cs5r2ju2phzz.us-east-2.rds.amazonaws.com:3306'
    database_name = 'vivid_database'
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://'+db_user+':'+db_password+'@'+endpoint+'/'+database_name
#	For local database
#    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or \
#        'sqlite:///' + os.path.join(basedir, 'app.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False