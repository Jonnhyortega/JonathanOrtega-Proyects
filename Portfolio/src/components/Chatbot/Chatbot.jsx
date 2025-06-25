import  { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import callChatAPI from "../../utils/chatbot";
import "animate.css";
import { useTranslation } from "react-i18next";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { leapfrog } from 'ldrs'
leapfrog.register()



export const Chatbot = ({ context = "" }) => {
  const { t } = useTranslation();
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: t("presentacion-por-chat"),
    },
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "¿Cómo puedo pedir un presupuesto?",
    "¿Dónde los encuentro?",
    "Redes sociales",
  ];

  const toggleChat = () => setChatOpen(prev => !prev);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(scrollToBottom, [messages, scrollToBottom]);

  useEffect(() => {
    const handleEsc = e => e.key === "Escape" && setChatOpen(false);
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const send = async (text) => {
    // Mensaje usuario
    setMessages(prev => [...prev, { from: 'user', text }]);
    setHistory(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);

    let reply;
    switch (text) {
      case "¿Cómo puedo pedir un presupuesto?":
        reply = "¡Genial! Pedí tu presupuesto aquí: https://wa.me/541158227373";
        break;
      case "¿Dónde los encuentro?":
        reply = "Nuestro local está en Lugano. Coordinemos una reunión cuando quieras.";
        break;
      case "Redes sociales":
        reply = "Seguinos: Instagram https://instagram.com/jonnhyortega, LinkedIn https://linkedin.com/in/jonathan-ortega-a00970191";
        break;
      default:
        try {
          reply = await callChatAPI(text, history, context);
        } catch {
          reply = t("Lo siento, ocurrió un error. ¿Podés intentar nuevamente?");
        }
    }

    setMessages(prev => [...prev, { from: 'bot', text: reply }]);
    setHistory(prev => [...prev, { role: 'model', content: reply }]);
    setLoading(false);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;
    send(trimmed);
    setInput("");
  };

  return (
    <ChatbotContainer>
      {!chatOpen ? (
        <button className="chat-icon" onClick={toggleChat} aria-label="Abrir chat">
          <img width="60" height="60" src="https://hpanel.hostinger.com/assets/images/intercom.svg" alt="bot" />
        </button>
      ) : (
        <div className="overlay" onClick={toggleChat}>
          <div className="chat-window animate__animated animate__backInUp" onClick={e => e.stopPropagation()}>
            <header className="chat-header">
              <img width="50" height="50" src="https://img.icons8.com/avantgarde/50/message-bot.png" alt="message-bot"/>
              <button className="close-btn" onClick={toggleChat}>×</button>
            </header>

            <div className="chat-messages">
              {messages.map((m, i) => (
                <div key={i} className={`message ${m.from} animate__animated animate__fadeIn`}>{m.text}</div>
              ))}
              {loading && (
                  <l-leapfrog size="40"speed="2.5" color="black" ></l-leapfrog>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="quick-replies">
              {quickReplies.map((q, i) => (
                <button key={i} onClick={() => send(q)}>{q}</button>
              ))}
            </div>

            <form className="chat-input-area" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder={t("Pregunta algo...")}
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
              />
              <button type="submit"><ArrowUpwardIcon /></button>
            </form>

          </div>
        </div>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;

