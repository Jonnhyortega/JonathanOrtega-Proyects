import logging
import google.generativeai as genai
from django.conf import settings

logger = logging.getLogger(__name__)

try:
    genai.configure(api_key=settings.GOOGLE_API_KEY)

    # Lista de modelos preferidos (orden de prioridad)
    PREFERRED_MODELS = [
        "gemini-2.5-flash",
        "gemini-2.5-pro",
        "gemini-flash-latest",
        "gemini-pro-latest",
    ]

    # Filtramos solo modelos que soporten generateContent
    available = [
        m.name for m in genai.list_models()
        if "generateContent" in m.supported_generation_methods
    ]

    # Seleccionar el primero válido
    model = None
    for candidate in PREFERRED_MODELS:
        if candidate in available or f"models/{candidate}" in available:
            model = genai.GenerativeModel(candidate)
            logger.info(f"✅ Gemini inicializado con {candidate}")
            break

    if not model:
        logger.error("❌ Ningún modelo válido disponible para esta API Key")

except Exception as e:
    model = None
    logger.error("❌ No se pudo configurar Gemini: %s", e)
