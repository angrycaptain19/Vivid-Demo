from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms.validators import DataRequired, ValidationError, Email, EqualTo
from vivid_app.models import User, Company

class LoginForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired()])
	password = PasswordField('Password', validators=[DataRequired()])
	remember_me = BooleanField('Remember Me')
	submit = SubmitField('Sign In')

class RegistrationForm(FlaskForm):
	email = StringField('Email', validators=[DataRequired(), Email()])
	password = PasswordField('Password', validators=[DataRequired()])
	password2 = PasswordField('Repeat Password', validators=[DataRequired(), EqualTo('password')])
	submit = SubmitField('Register')

	def validate_company(self, email):
		Email = form.email.data
		Domain = Email.split('@')[1]
		domains = []
		companies = Company.query.all()
		for company in companies:
			domains.append(company.domain)
		if Domain in domains:
			return 
		else:
			raise ValidationError('No company account exists for that domain. Please contact our team to setup an account.')

	def validate_email(self, email):
		email = User.query.filter_by(email=email.data).first()
		if email is not None:
			raise ValidationError('An account already exists for this email address, please use a different email address.')
