from index import db
from werkzeug.security import generate_password_hash, check_password_hash
# Might want to change code to be like the following.
# def self._password = User.hashed_password(password)
# @property
# def password(self):
#     return self._password
#
# @password.setter
# def set_password(self, password):
#     self._password = generate_password_hash(password)


class User(db.Model):
    id = db.Column(db.Integer(), primary_key=True)
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    def __init__(self, email, password):
        self.email = email
        self.active = True
        self.password = User.hashed_password(password)

    @staticmethod
    def hashed_password(password):
        # Hacky Solution ;(. For some reason, the former is working on Heroku, but the latter is working locally. Maybe reset my virtual environment and try again?
        try:
            return generate_password_hash(password)
        except:
            from index import bcrypt
            return bcrypt.generate_password_hash(password)

    @staticmethod
    def get_user_with_email_and_password(email, password):
        user = User.query.filter_by(email=email).first()
        # See above: 'Hacky Solution'.
        try:
            pw_ok = check_password_hash(user.password, password)
        except:
            from index import bcrypt
            pw_ok = bcrypt.check_password_hash(user.password, password)

        if user and pw_ok:
            return user
        else:
            return None
