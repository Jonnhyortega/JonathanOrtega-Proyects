/**
 * Llama al endpoint de chat de tu API.
 *
 * @param {string} message — El mensaje que envía el usuario.
 * @param {Array<{role: "user"|"model", content: string}>} [history=[]] — Historial de la conversación.
 * @param {string} [context=""] — Contexto o prompt personalizado para este sitio.
 * @returns {Promise<string>} — La respuesta generada por el modelo.
 *
 * @example
 * const history = [
 *   { role: "user",  content: "¿Cómo estás?" },
 *   { role: "model", content: "¡Todo bien! ¿En qué puedo ayudarte?" }
 * ];
 *
 * callChatAPI("Cuéntame un chiste", history, "## Contexto:\nEres un asistente divertido.")
 *   .then(reply => console.log("Bot:", reply))
 *   .catch(err   => console.error("Error al hablar con la API:", err));
 */
async function callChatAPI(message, history = [], context = "") {
  const payload = { message, history, context };

  const res = await fetch("/api/chat/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // si utilizas CORS:
      // "Origin": window.location.origin
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`API error ${res.status}: ${errorText}`);
  }

  const { response } = await res.json();
  return response;
}
