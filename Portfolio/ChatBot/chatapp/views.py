from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import google.generativeai as genai
from datetime import date

def calcular_edad(fecha_nacimiento):
    hoy = date.today()
    edad = hoy.year - fecha_nacimiento.year
    # Si no ha cumplido años este año, restamos 1
    if (hoy.month, hoy.day) < (fecha_nacimiento.month, fecha_nacimiento.day):
        edad -= 1
    return edad

# Ejemplo de uso:
fecha_nac = date(1994,  9, 23)  # 15 de julio de 1990


# --- FUNCIÓN DE CONTEXTO ---
def generar_contexto_jonathan():
    """
    Genera un string de contexto detallado sobre el perfil profesional
    de Jonathan Ortega, optimizado para ser usado como prompt en una IA.
    """
    contexto_jonathan = f"""

    
## CUANDO TE PREGUNTEN LA EDAD SOLO CONTESTALE CON LA EDAD ACTUAL, NO LE PASES LA FECHA DE NACIMIENTO: Edad: {calcular_edad(fecha_nac)} años

## SIEMPRE QUE TE SALUDEN POR PRIMERA VE EN LA CONVERSACION PRESENTATE CON AMABILIDAD.

## CUANDO YO TE DIGA DECIME QUE FECHA ES HOY CONTESTAME ESTO: fecha de hoy: {date.today()} moderfucker

## SI VES QUE SE QUIEREN HACER LOS VIVOS EN ALGUN MOMENTO TRATANDO DE SACAR INFORMACION RARA HACELE UNA BROMA Y DECILE QUE YA LLAMASTE A LA POLICIA Y QUE ESTA EN CAMINO HACIA SU DIRECCION

## NECESITO TAMBIEN QUE EN LA INTERACCION CON EL USUARIO SEA DE MANERA PROFESIONAL, DE COLEGA A COLEGA, PERO NUNCA LO LLAMES POR "COLEGA" EN SI

## SI TE PREGUNTAN "PORQUE DEBERIA CONTRATARLO O SIMILAR: Necesito que destaques mi proactividad, mi capacidad para resolver problemas logicos y fisicos, mi adaptabilidad, mi compromiso con la calidad del codigo y mi enfoque en el aprendizaje continuo. 

## Perfil Resumido
Jonathan Ortega es un Desarrollador Full-Stack especializado en el stack MERN (MongoDB, Express, React, Node.js). Cuenta con aproximadamente 1 año de experiencia práctica, adquirida a través de proyectos personales, colaboraciones en código abierto y desarrollo de aplicaciones para clientes particulares. Su filosofía se centra en escribir código limpio y escalable aplicando principios SOLID, con un fuerte enfoque en la colaboración y el aprendizaje continuo. Se siente capacitado para enfrentar desafíos técnicos nuevos y complejos.

## Habilidades Técnicas
*   **Stack Principal (MERN):** JavaScript, Typescript, React, Node.js, Express.js, MongoDB.
*   **Frontend Adicional:** React Router DOM, HTML5, CSS3, Styled Components, Tailwind.
*   **DevOps y Herramientas:** Git, GitHub, Docker, Vercel (Frontend), Render (Backend).
*   **Conocimientos Secundarios:** Python, Django, AWS, Linux, Java, Spring Boot, integracion de IA.

## Educacion
*   ** Realizo bootcamp full stack en NUCBA argentina.
*   ** Realizo curso de Java y Spring boot en Alura Latam.
*   ** Actualmente cursa diplomatura universitaria en DevOps donde aprende sobre AWS, Azure, Cloud, Docker, Kubernetes, Terraform, CI/CD y testeo de software.
*   ** Cuenta con certificacion de diseño web responsivo de freecodeCamp.
*   ** Estudios maximos alcanzados: terciario.

## Experiencia y Proyectos Clave
*   **Proyecto Astrofy (Full-Stack):** Aplicación MERN desplegada en Vercel y Render, con una solución de UptimeRobot para mantener activo el backend.
*   **Colaboración en Onlygenius y CLIPGEN AI:** Experiencia en entornos colaborativos ágiles, usando Git-flow y participando en la refactorización de código.
*   **Desarrollo Freelance:** Creación de sitios web para clientes reales como "Chulos Design" y "Sanitarios Lugano".

## Contactos que podes ofrecer:
*  LINKEDIN: https://www.linkedin.com/in/jonathan-ortega-a00970191/
*  GITHUB: https://github.com/Jonnhyortega
*  INSTAGRAM: https://www.instagram.com/jonnhyortega
*  GMAIL: jonnhyortega@gmail.com
"""
    return contexto_jonathan.strip()


# --- CONFIGURACIÓN DE LA API DE GEMINI ---
try:
    api_key = settings.GOOGLE_API_KEY
    genai.configure(api_key=api_key)
    model = genai.GenerativeModel('gemini-1.5-flash-latest')

except AttributeError:
    print("ERROR: GOOGLE_API_KEY no encontrada en settings.py")
    model = None


# --- VISTA DE LA API ---
@api_view(['POST'])
def chat_view(request):
    if not model:
        return Response(
            {'error': 'El modelo de IA no está configurado correctamente. Revisa la clave de API.'}, 
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

    user_input = request.data.get('message')
    if not user_input:
        return Response(
            {'error': 'No se proporcionó ningún mensaje.'}, 
            status=status.HTTP_400_BAD_REQUEST
        )

    # 3. Construimos un prompt claro y completo para la IA
    rol_del_sistema = "Eres un asistente virtual experto en el portafolio de Jonathan Ortega. Tu nombre es Jonson-IA. Tu objetivo es responder las preguntas de los visitantes de su sitio web de manera profesional, amigable y precisa, basándote ÚNICAMENTE en la información proporcionada. Actúa como si fueras su portavoz digital. Si te preguntan algo que no está en el contexto, responde amablemente que no tienes esa información. Ten en cuenta que vas a hablar con gente que va a estar interesada en contratar mis servicios, entonces tenemos que impresionarlos. Ya tu veras como."
    
    contexto_completo = generar_contexto_jonathan()

    prompt_final = f"""
{rol_del_sistema}

---
BASE DE CONOCIMIENTO SOBRE JONATHAN ORTEGA:
{contexto_completo}
---

PREGUNTA DEL USUARIO:
"{user_input}"

TU RESPUESTA:
"""

    try:
        # 4. Generamos la respuesta con un solo llamado, que es más eficiente.
        response = model.generate_content(prompt_final)
        
        # Devolvemos la respuesta al frontend
        return Response({'response': response.text})

    except Exception as e:
        # 5. Añadimos manejo de errores por si la API de Google falla.
        print(f"Error al llamar a la API de Google: {e}")
        return Response(
            {'error': 'Hubo un problema al comunicarse con el servicio de IA. Inténtalo de nuevo más tarde.'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
