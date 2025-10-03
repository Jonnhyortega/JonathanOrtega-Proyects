import logging
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .gemini_client import model

logger = logging.getLogger(__name__)


def convertir_historial(historial):
    """
    Convierte el history del frontend a la forma que espera Gemini.
    - Frontend manda: user | assistant (u otros)
    - Gemini espera: user | model
    """
    mapeo_roles = {
        "user": "user",
        "assistant": "model",
        "bot": "model",
        "model": "model",  # por si llega ya mapeado
    }

    limpio = []
    for h in historial:
        role = str(h.get("role", "")).strip().lower()  # normaliza a lowercase
        content = h.get("content", "")
        if role in mapeo_roles and content:
            limpio.append({
                "role": mapeo_roles[role],
                "parts": [content]
            })
    return limpio



@csrf_exempt
@api_view(["POST"])
def chat_view(request):
    logger.info("🚀 Versión Lambda desplegada 2025-10-02 23:55")
    # 1. Leer payload
    user_input = request.data.get("message", "").strip()
    historial = request.data.get("history", [])
    context_body = request.data.get("context", "").strip()

    # 2. Validaciones
    if not user_input:
        return Response(
            {"error": "El campo 'message' es obligatorio."},
            status=status.HTTP_400_BAD_REQUEST,
        )
    if not context_body:
        return Response(
            {"error": "El campo 'context' es obligatorio."},
            status=status.HTTP_400_BAD_REQUEST,
        )
    if model is None:
        return Response(
            {"error": "El servicio de IA no está disponible."},
            status=status.HTTP_503_SERVICE_UNAVAILABLE,
        )

    # 3. Armar historial para Gemini
    historial_gemini = convertir_historial(historial)
    full_history = [{"role": "user", "parts": [context_body]}] + historial_gemini

    # 4. Llamada al modelo
    try:
        logger.info("🔹 Enviando mensaje a Gemini con historial: %s", full_history)

        chat = model.start_chat(history=full_history)
        response = chat.send_message(user_input)

        return Response(
            {"response": response.text.strip()},
            status=status.HTTP_200_OK,
        )
    except Exception as e:
        logger.exception("❌ Error llamando a Gemini")
        return Response(
            {"error": "Fallo interno en el servicio de chat."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
