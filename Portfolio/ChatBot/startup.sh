#!/bin/sh
set -e

echo ">>> CONTENIDO DE home.html EN PRODUCCIÓN <<<"
head -n 10 /app/templates/home.html || echo "¡Archivo no encontrado!"
echo ">>> FIN <<<"

python manage.py migrate --noinput
python manage.py collectstatic --noinput
exec gunicorn myproject.wsgi:application --bind 0.0.0.0:8080
