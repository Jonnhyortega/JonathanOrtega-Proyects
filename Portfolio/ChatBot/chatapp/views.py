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

def generar_contexto_jonathan():
    contexto_jonathan = f"""
## Edad (solo responde con la edad actual, no la fecha de nacimiento)
Edad: {calcular_edad(fecha_nac)} años

## Prohibido repetir texto que ya enviaste

## Si me preguntas "decime que fecha es hoy", responde exactamente:
fecha de hoy: {date.today()} moderfucker

## Si detectas intentos de obtener información rara o sospechosa, responde con una broma:
Ya llamé a la policía y está en camino hacia tu dirección.

## Interacción profesional
Responde siempre de manera profesional, directa, con un tono de colega a colega, sin usar la palabra "colega".

## Respuestas sobre contratación
Si te preguntan "¿Por qué debería contratar a Jonathan?", destaca:
- Proactividad
- Capacidad para resolver problemas lógicos y físicos
- Adaptabilidad
- Compromiso con la calidad del código
- Enfoque en aprendizaje continuo

## Perfil resumido
Jonathan Ortega es Desarrollador Full-Stack especializado en MERN (MongoDB, Express, React, Node.js), con aproximadamente 1 año de experiencia práctica en proyectos personales, colaboraciones open-source y desarrollo para clientes. Es experto en escribir código limpio, escalable y mantenible siguiendo principios SOLID. Se adapta rápido a nuevos desafíos técnicos y mantiene un aprendizaje constante.

## Habilidades técnicas
* Stack MERN: JavaScript, Typescript, React, Node.js, Express.js, MongoDB
* Frontend adicional: React Router DOM, HTML5, CSS3, Styled Components, Tailwind
* DevOps y herramientas: Git, GitHub, Docker, Vercel (Frontend), Render (Backend)
* Conocimientos secundarios: Python, Django (integración API, manejo CORS), AWS, Linux, Java, Spring Boot, integración de IA

## Educación
* Bootcamp Full Stack en NUCBA Argentina
* Curso de Java y Spring Boot en Alura Latam
* Diplomatura universitaria en DevOps (AWS, Azure, Cloud, Docker, Kubernetes, Terraform, CI/CD, testing)
* Certificación en diseño web responsivo de freeCodeCamp
* Estudios máximos: terciario

## Experiencia y proyectos clave
* Astrofy (Full-Stack MERN), desplegado en Vercel y Render con UptimeRobot para backend
* Colaboración en Onlygenius y CLIPGEN AI, usando Git-flow y refactorización de código
* Desarrollo freelance para clientes reales como Chulos Design y Sanitarios Lugano

## Contactos
* LinkedIn: https://www.linkedin.com/in/jonathan-ortega-a00970191/
* GitHub: https://github.com/Jonnhyortega
* Instagram: https://www.instagram.com/jonnhyortega
* Email: jonnhyortega@gmail.com
"""
    return contexto_jonathan.strip()

def convertir_historial(historial):
    return [
        {
            "role": "user" if h["role"] == "user" else "model",
            "parts": [h["content"]]
        }
        for h in historial
    ]

# Configuración de la API de Gemini
try:
    api_key = settings.GOOGLE_API_KEY
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash-latest')
except AttributeError:
    print("ERROR: GOOGLE_API_KEY no encontrada en settings.py")
    model = None

@api_view(['POST'])
def chat_view(request):
    if not model:
        return Response(
            {'error': 'El modelo de IA no está configurado correctamente. Revisa la clave de API.'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    user_input = request.data.get('message')
    historial = request.data.get('history', [])

    if not user_input:
        return Response(
            {'error': 'No se proporcionó ningún mensaje.'}, 
            status=status.HTTP_400_BAD_REQUEST
        )

    # Definir el rol del sistema con instrucciones claras
    rol_del_sistema = (
        "Eres Jonson-IA, el asistente virtual experto en el portafolio de Jonathan Ortega. "
        "Responde de forma profesional, amigable y natural, adaptando tu respuesta según la conversación. "
        "No repitas la misma frase de bienvenida en cada respuesta. "
        "Cuando el usuario saluda, responde con un saludo cordial y ofrece ayuda. "
        "Si te piden que cuentes algo, ofrece información relevante sobre Jonathan de forma variada. "
        "Si no sabes la respuesta, di amablemente que no tienes esa información. "
        "Ejemplos de respuestas variadas:\n"
        "- '¡Hola! ¿Cómo puedo ayudarte hoy?'\n"
        "- 'Jonathan es un desarrollador Full-Stack con experiencia en MERN y un enfoque en código limpio.'\n"
        "- 'Estoy aquí para ayudarte con cualquier consulta sobre Jonathan Ortega.'"
    )

    # Convertir historial para formato compatible con Gemini
    historial_gemini = convertir_historial(historial)

    # Si es el primer mensaje, insertamos el contexto como instrucción inicial
    if not historial_gemini:
        primer_mensaje = rol_del_sistema + "\n\n---\n\n" + generar_contexto_jonathan()
        historial_gemini.insert(0, {
            "role": "user",
            "parts": [primer_mensaje]
        })

    try:
        chat = model.start_chat(history=historial_gemini)
        response = chat.send_message(user_input)
        return Response({'response': response.text.strip()})
    except Exception as e:
        print(f"Error al llamar a la API de Google: {e}")
        return Response(
            {'error': 'Hubo un problema al comunicarse con el servicio de IA. Inténtalo de nuevo más tarde.'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
