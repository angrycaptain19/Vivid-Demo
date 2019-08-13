from vivid_app import vivid_app, db
from vivid_app.models import User, Company

@vivid_app.shell_context_processor
def make_shell_context():
	return{'db':db, 'User': User, 'Company': Company}