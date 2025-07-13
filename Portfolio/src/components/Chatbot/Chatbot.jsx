import { useState, useRef, useEffect, useCallback } from "react";
import { ChatbotContainer } from "./ChatbotStyles";
import callChatAPI from "../../utils/chatbot";
import "animate.css";
import { useTranslation } from "react-i18next";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { leapfrog } from 'ldrs';

leapfrog.register();

export const Chatbot = ({ context = "" }) => {
  const { t } = useTranslation();
  const presentacion = t("presentacion-por-chat");
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      content: presentacion,
    },
  ]);
  const [history, setHistory] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "¿Cómo puedo pedir un presupuesto?",
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
    setMessages(prev => [...prev, { from: 'user', content: text }]);
    setHistory(prev => [...prev, { role: 'user', content: text }]);
    setLoading(true);

    let reply;
    switch (text) {
      case "¿Cómo puedo pedir un presupuesto?":
        reply =(
          <span>
            <a href="https://wa.me/1122684234" target="_blank" rel="noopener noreferrer">
              <img width="24" height="24" src="https://img.icons8.com/fluency/48/whatsapp.png" alt="whatsapp"/>
              Contacta personalmente a Jonathan para pedir tu presupuesto: +541122684234
            </a>
          </span>
        ) 
                break;
      case "¿De donde es Jonathan Ortega?":
        reply = "Jonathan Ortega actualmente reside en Ciudad Autónoma de Buenos Aires.";
        break;
      case "Redes sociales":
        reply = (
          <span>
            Seguime en
            <a href="https://instagram.com/jonnhyortega" target="_blank" rel="noopener noreferrer">
            {' '}
            <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-instagram-photo-and-video-sharing-social-networking-service-owned-by-facebook-logo-color-tal-revivo.png" alt="external-instagram-photo-and-video-sharing-social-networking-service-owned-by-facebook-logo-color-tal-revivo"/>
              Instagram
            </a>{' '}
            y{' '}
            {' '}
            <img width="24" height="24" src="https://img.icons8.com/fluency/48/linkedin.png" alt="linkedin"/>
            <a href="https://linkedin.com/in/jonathan-ortega-a00970191" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </span>
        );
        break;
      default:
        try {
          reply = await callChatAPI(text, history, context);
        } catch {
          reply = t("Lo siento, ocurrió un error. Intenta nuevamente, si el error persiste avisale a Jonnhy para que lo solucione.");
        }
    }

    setMessages(prev => [...prev, { from: 'bot', content: reply }]);
    setHistory(prev => [...prev, { role: 'assistant', content: typeof reply === 'string' ? reply : '' }]);
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
          <span>{t("texto_de_boton_de_chat")}</span>
          {/* <img width="60" height="60" src="https://hpanel.hostinger.com/assets/images/intercom.svg" alt="bot" /> */}
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
                <div key={i} className={`message ${m.from} animate__animated animate__fadeIn`}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <l-leapfrog size="40" speed="2.5"></l-leapfrog>
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
                placeholder={t("Pregunta algo")}
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
