# !!! Possibly too many workers. 'gevent' marked not installed. 'app' not found.
# web: gunicorn -w 4 -b 0.0.0.0:$PORT -k gevent app:app

# To Test: 1
# web: gunicorn gettingstarted.wsgi --log-file -

# To Test: 2
web: gunicorn 

# Temporarily Borrowed from Just-a-Dash
## Heroku Processes ##
# TRY THE NEXT LINE NEXT 3
# !!! FAILED 'app not found'
# web: gunicorn app:app
#web: gunicorn app:app --preload
#web: gunicorn app:app --preload --config app/configuration/gunicorn_config.py
#init: python db_create.py
#upgrade: python db_upgrade.py

## Notes ##
#Local Debugging for Django Apps:
#web: python manage.py runserver 0.0.0.0:$PORT --noreload