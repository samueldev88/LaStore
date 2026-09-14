import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

# Em produção (Render), SECRET_KEY vem de uma variável de ambiente — nunca
# fica escrita aqui, já que este arquivo pode acabar público no GitHub.
# Localmente, sem essa variável definida, cai na chave antiga de dev (ok
# pra ambiente local, mas NUNCA use essa mesma chave em produção).
SECRET_KEY = os.environ.get(
    'SECRET_KEY',
    'django-insecure-troque-esta-chave-antes-de-produção',
)

# Localmente continua True (não precisa fazer nada). Em produção, definimos
# DEBUG=False como variável de ambiente no Render.
DEBUG = os.environ.get('DEBUG', 'True') == 'True'

# Localmente continua igual. Em produção, definimos ALLOWED_HOSTS como
# variável de ambiente no Render com o domínio real (ex: seu-app.onrender.com).
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '127.0.0.1,localhost').split(',')

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',

    'rest_framework',

    'loja',
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    # WhiteNoise serve o CSS/JS/imagens direto pelo próprio Django em
    # produção (o runserver faz isso sozinho localmente, mas em produção
    # precisa de algo cuidando disso). Fica logo depois do SecurityMiddleware,
    # é a posição recomendada.
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'lastore_backend.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [BASE_DIR / 'templates'],
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

WSGI_APPLICATION = 'lastore_backend.wsgi.application'

import dj_database_url

DATABASES = {
    'default': dj_database_url.config(
        default=f'sqlite:///{BASE_DIR / "db.sqlite3"}',
        conn_max_age=600,
    )
}

AUTH_PASSWORD_VALIDATORS = [
    {'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator'},
    {'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator'},
    {'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator'},
    {'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator'},
]

LANGUAGE_CODE = 'pt-br'
TIME_ZONE = 'America/Sao_Paulo'
USE_I18N = True
USE_TZ = True

STATIC_URL = 'static/'
STATICFILES_DIRS = [BASE_DIR / 'static']
STATIC_ROOT = BASE_DIR / 'staticfiles'  # usado só em produção (collectstatic)

# Faz o WhiteNoise comprimir e dar cache-busting nos arquivos estáticos em
# produção (precisa do pacote 'whitenoise' instalado — ver requirements.txt).
STORAGES = {
    'default': {
        'BACKEND': 'django.core.files.storage.FileSystemStorage',
    },
    'staticfiles': {
        'BACKEND': 'whitenoise.storage.CompressedManifestStaticFilesStorage',
    },
}

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

# ===== Django REST Framework =====
REST_FRAMEWORK = {
    # Sessão do próprio Django (cookie), já que o front é servido pelo mesmo
    # domínio/projeto — não precisa de token JWT nem de CORS.
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
    ],
}

LOGIN_URL = '/'

# ===== Só entram em ação quando as variáveis de ambiente abaixo existem
# (ou seja: não fazem nada localmente, só valem em produção) =====

# O Render (e a maioria dos serviços parecidos) fica na frente do seu app
# como um proxy HTTPS, mas conversa com o Django por HTTP simples por dentro.
# Essa linha ensina o Django a reconhecer que a conexão original era HTTPS
# mesmo assim — sem ela, cookies marcados como "secure" e o CSRF se comportam
# errado em produção.
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')

# Domínio(s) de onde o Django deve aceitar POSTs (login, cadastro, carrinho,
# etc.) em produção. Defina como variável de ambiente no Render, ex:
# CSRF_TRUSTED_ORIGINS=https://seu-app.onrender.com
_csrf_origins = os.environ.get('CSRF_TRUSTED_ORIGINS', '')
if _csrf_origins:
    CSRF_TRUSTED_ORIGINS = _csrf_origins.split(',')