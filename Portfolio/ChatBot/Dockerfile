# Imagen base oficial de Lambda con Python 3.11
FROM public.ecr.aws/lambda/python:3.11

# Copiar dependencias primero (mejor caching de capas)
COPY requirements.txt  .

# Instalar dependencias
RUN pip install --upgrade pip \
 && pip install --no-cache-dir -r requirements.txt

# Copiar el código de la app dentro del root de Lambda
COPY . ${LAMBDA_TASK_ROOT}

# Comando que ejecuta AWS Lambda → apunta a tu handler.py
CMD [ "handler.handler" ]
