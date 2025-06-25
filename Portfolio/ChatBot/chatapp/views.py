from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import google.generativeai as genai
from datetime import date

def calcular_edad(fecha_nacimiento):
    hoy = date.today()
    edad = hoy.year - fecha_nacimiento.year
    if (hoy.month, hoy.day) < (fecha_nacimiento.month, fecha_nacimiento.day):
        edad -= 1
    return edad

fecha_nac = date(1994, 9, 23)

# Contexto estático para Jonathan
def generar_contexto_jonathan():
    return f"""
## Edad (solo responde con la edad actual, no la fecha de nacimiento)
Edad: {calcular_edad(fecha_nac)} años

## Interacción profesional
Responde siempre de manera profesional, directa, con un tono simpático, sin ser cortante.

## Si me preguntas "decime que fecha es hoy", responde exactamente:
fecha de hoy: {date.today()} moderfucker

## Perfil resumido
Jonathan Ortega es Desarrollador Full-Stack especializado en MERN (MongoDB, Express, React, Node.js), con aproximadamente 1 año de experiencia práctica en proyectos personales y desarrollo para clientes.
""".strip()

def convertir_historial(historial):
    return [
        {
            "role": "user" if h["role"] == "user" else "model",
            "parts": [h["content"]]
        }
        for h in historial
    ]

# Configuración de Google Gemini
try:
    api_key = settings.GOOGLE_API_KEY
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash-latest')
except AttributeError:
    print("ERROR: GOOGLE_API_KEY no encontrada en settings.py")
    model = None

@api_view(['POST'])
def chat_view(request):
    user_input   = request.data.get("message")
    historial    = request.data.get("history", [])
    context_body = request.data.get("context", "").strip()

    if not user_input:
        return Response(
            {'error': 'No se proporcionó ningún mensaje.'},
            status=status.HTTP_400_BAD_REQUEST
        )

    # Convertimos el history que venga del frontend
    historial_gemini = convertir_historial(historial)

    # Definimos el rol de sistema
    sistema = (
        "Eres un asistente virtual profesional y amigable. "
        "Adapta tus respuestas al contexto provisto."
    )

    # Seleccionamos el contexto: el enviado o el default de Jonathan
    prompt_contexto = context_body or generar_contexto_jonathan()
    primer_mensaje  = f"{sistema}\n\n---\n\n{prompt_contexto}"

    # Insertamos siempre el mensaje de sistema + contexto al inicio
    historial_gemini.insert(0, {"role": "user", "parts": [primer_mensaje]})

    try:
        chat     = model.start_chat(history=historial_gemini)
        response = chat.send_message(user_input)
        return Response({'response': response.text.strip()})
    except Exception as e:
        print(f"Error al llamar a la API de Google: {e}")
        return Response(
            {'error': 'Hubo un problema al comunicarse con el servicio de IA. Inténtalo de nuevo más tarde.'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
