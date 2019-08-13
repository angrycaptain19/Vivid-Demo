from flask import render_template, flash, redirect, url_for
from flask_login import current_user, login_user, logout_user, login_required
from vivid_app import vivid_app, db
from vivid_app.forms import LoginForm, RegistrationForm
from vivid_app.models import User, Company 

@vivid_app.route('/')
@vivid_app.route('/index')
@login_required
def index():
	return render_template('index.html', title='Vivid PR')

@vivid_app.route('/login', methods=['GET','POST'])
def login():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = LoginForm()
	if form.validate_on_submit():
		user = User.query.filter_by(email=form.email.data).first()
		if user is None or not user.check_password(form.password.data):
			flash('Invalid email or password')
			return redirect(url_for('login'))
		login_user(user, remember=form.remember_me.data)
		return redirect(url_for('index'))
	return render_template('login.html', title='Sign In', form=form)

@vivid_app.route('/logout')
def logout():
	logout_user()
	return redirect(url_for('login'))

@vivid_app.route('/register', methods=['GET', 'POST'])
def register():
	if current_user.is_authenticated:
		return redirect(url_for('index'))
	form = RegistrationForm()
	if form.validate_on_submit():
		email = User.query.filter_by(email=form.email.data).first()
		if email is not None:
			flash('Account for this email already exists. Please login instead')
			return redirect(url_for('login'))
		user = User(email=form.email.data)
		company = Company.query.filter_by(domain=form.email.data.split('@')[1]).first()
		if company is None:
			flash(form.email.data.split('@')[1] + ' does not have a Vivid account. Please contact us to setup a company account')
			return redirect(url_for('register'))
		user.set_password(form.password.data)
		db.session.add(user)
		db.session.commit()
		company = Company.query.filter_by(domain=form.email.data.split('@')[1]).first()
		company.users.append(user)
		db.session.add(company)
		db.session.commit()
		flash('Account successfully created. Please login to continue')
		return redirect(url_for('login'))
	return render_template('register.html', title='Register', form=form)