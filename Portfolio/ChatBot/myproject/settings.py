import os
from pathlib import Path
import dj_database_url

BASE_DIR = Path(__file__).resolve().parent.parent

# Alterna entre .env y AWS Secrets Manager
from decouple import config  # Necesaria solo para leer USE_AWS_SECRETS
USE_AWS_SECRETS = config('USE_AWS_SECRETS', default=False, cast=bool)

if USE_AWS_SECRETS:
    import boto3
    import json

    def get_secret():
        secret_name = "myapp/production/secrets"
        region_name = os.environ.get("AWS_REGION", "us-east-1")
        session = boto3.session.Session()
        client = session.client(service_name="secretsmanager", region_name=region_name)
        get_secret_value_response = client.get_secret_value(SecretId=secret_name)
        return json.loads(get_secret_value_response['SecretString'])

    secrets = get_secret()
    SECRET_KEY = secrets.get('SECRET_KEY', 'fallback')
    GOOGLE_API_KEY = secrets.get('GOOGLE_API_KEY', '')
    ALLOWED_HOSTS = secrets.get('ALLOWED_HOSTS', '127.0.0.1').split(',')
    DEBUG = secrets.get('DEBUG', 'False') == 'True'
    SECURE_SSL_REDIRECT = secrets.get('SECURE_SSL_REDIRECT', 'False') == 'True'
    SESSION_COOKIE_SECURE = secrets.get('SESSION_COOKIE_SECURE', 'False') == 'True'
    CSRF_COOKIE_SECURE = secrets.get('CSRF_COOKIE_SECURE', 'False') == 'True'
else:
    SECRET_KEY = config('SECRET_KEY', default='fallback')
    GOOGLE_API_KEY = config('GOOGLE_API_KEY', default='')
    ALLOWED_HOSTS = config('ALLOWED_HOSTS', default='127.0.0.1').split(',')
    DEBUG = config('DEBUG', default=False, cast=bool)
    SECURE_SSL_REDIRECT = config('SECURE_SSL_REDIRECT', default=False, cast=bool)
    SESSION_COOKIE_SECURE = config('SESSION_COOKIE_SECURE', default=False, cast=bool)
    CSRF_COOKIE_SECURE = config('CSRF_COOKIE_SECURE', default=False, cast=bool)

# Seguridad adicional
SECURE_CONTENT_TYPE_NOSNIFF = True
SECURE_BROWSER_XSS_FILTER = True

DATABASES = {
    'default': dj_database_url.config(
        default=f"sqlite:///{BASE_DIR / 'db.sqlite3'}"
    )
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'rest_framework',
    'chatapp',
    'corsheaders',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

APPEND_SLASH = True

# CORS_ALLOWED_ORIGINS = [
#     "http://localhost:5173",
#     "http://localhost:5174",
#     "https://www.jonnhyortegadev.com",
#     "https://jonnhyortegadev.com",
#     "https://portfolio-ortega.vercel.app",
#     "https://www.portfolio-ortega.vercel.app",
#     "https://chulosdesign.com",
#     "https://www.chulosdesign.com",
#     "https://landingchulos.vercel.app",
#     "https://www.landingchulos.vercel.app"
# ]

CORS_ALLOW_ALL_ORIGINS = True

ROOT_URLCONF = 'myproject.urls'

TEMPLATES = [
    {
        'DIRS': [BASE_DIR / 'templates'],
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myproject.wsgi.application'

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'UTC'
USE_I18N = True
USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
