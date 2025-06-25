# Dockerfile
FROM python:3.11-slim

# Variables de entorno para no generar .pyc y usar UTF-8
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Instala dependencias del sistema
RUN apt-get update && apt-get install -y build-essential libpq-dev curl

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos del proyecto
COPY . /app

# Instala dependencias de Python
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Recolecta archivos estáticos (si usás STATICFILES)
RUN mkdir -p /app/staticfiles
RUN python manage.py collectstatic --noinput

# Expone el puerto 8000 para Gunicorn
EXPOSE 8080


# Comando para correr la app con Gunicorn
CMD ["gunicorn", "myproject.wsgi:application", "--bind", "0.0.0.0:8080"]
