# Dockerfile para AWS Lambda en Python 3.11
FROM public.ecr.aws/lambda/python:3.11

# Copia y instala las dependencias
COPY requirements.txt ./
RUN pip install --upgrade pip \
 && pip install --no-cache-dir -r requirements.txt

# Copia todo el código del proyecto
COPY . ${LAMBDA_TASK_ROOT}

# handler que AWS Lambda invocará
CMD [ "handler.handler" ]
