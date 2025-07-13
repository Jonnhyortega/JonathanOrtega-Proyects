from django.conf import settings
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import google.generativeai as genai
from django.views.decorators.csrf import csrf_exempt

# Inicialización de Gemini
try:
    genai.configure(api_key=settings.GOOGLE_API_KEY)
    model = genai.GenerativeModel('gemini-1.5-flash-latest')
    print("✅ Gemini listo")
except Exception:
    model = None
    print("❌ No se pudo configurar Gemini. Revisa GOOGLE_API_KEY")

def convertir_historial(historial):
    """
    Convierte el history del frontend a la forma que espera Gemini.
    history: [{ role: 'user'|'assistant', content: '...' }, ...]
    """
    return [
        {"role": h["role"], "parts": [h["content"]]}
        for h in historial
        if h["role"] in ("user", "assistant")
    ]
    
@csrf_exempt
@api_view(['POST'])
def chat_view(request):
    # 1. Leer payload
    user_input   = request.data.get("message", "").strip()
    historial    = request.data.get("history", [])
    context_body = request.data.get("context", "").strip()

    # 2. Validaciones
    if not user_input:
        return Response(
            {"error": "El campo 'message' es obligatorio."},
            status=status.HTTP_400_BAD_REQUEST
        )
    if not context_body:
        return Response(
            {"error": "El campo 'context' es obligatorio."},
            status=status.HTTP_400_BAD_REQUEST
        )
    if model is None:
        return Response(
            {"error": "El servicio de IA no está disponible."},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )

    # 3. Convertir historial
    historial_gemini = convertir_historial(historial)

    # 4. Inyectar contexto COMO mensaje de usuario al inicio
    contexto_usuario = {
        "role": "user",
        "parts": [context_body]
    }
    full_history = [contexto_usuario] + historial_gemini

    # 5. Llamada al modelo
    try:
        chat     = model.start_chat(history=full_history)
        response = chat.send_message(user_input)
        return Response({"response": response.text.strip()})
    except Exception as e:
        # Para depurar, devolvemos la excepción real
        return Response(
            {"error": f"Exception: {str(e)}"},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )
