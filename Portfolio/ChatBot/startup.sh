#!/bin/bash

# Ejecuta collectstatic para archivos estáticos (opcional, si usas)
python3 manage.py collectstatic --noinput

# Inicia Gunicorn con 2 workers, escucha en 0.0.0.0:8080
gunicorn --workers 2 myproject.wsgi:application --bind 0.0.0.0:8080
