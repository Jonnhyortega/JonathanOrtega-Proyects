import React, { useState } from 'react';
import { ChatbotContainer } from './ChatbotStyles';
import { sendMessage } from "../../utils/chatbot.js"
import 'animate.css';
import { useTranslation } from 'react-i18next';


export const Chatbot = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const { t } = useTranslation();
  const toggleChat = () => setChatOpen(!chatOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    sendMessage(input)
      .then(response => {
        setMessages(prevMessages => [...prevMessages, { from: 'bot', text: response }]);
      })
      .catch(error => {
        console.error('Error al enviar el mensaje:', error);
        setMessages(prevMessages => [...prevMessages, { from: 'bot', text: 'Lo siento, ocurrió un error.' }]);
      });
  };

  return (
    <ChatbotContainer>
      {!chatOpen && (
        <button className="chat-icon" onClick={toggleChat} aria-label="Abrir chat">
          <img width="60" height="60" src="https://img.icons8.com/color/50/bot.png" alt="bot"/>
        </button>
      )}

      {chatOpen && (
        <div className={`overlay animate__animated ${chatOpen && "animate__backInUp"}`} onClick={toggleChat}>
          <div className="chat-window" onClick={(e) => e.stopPropagation()}>
          <header className="chat-header">
          <img width="50" height="50" src="https://img.icons8.com/color/50/bot.png" alt="bot"/>

            <button className="close-btn" onClick={toggleChat} aria-label="Cerrar chat">
              ×
            </button>
          </header>

          <div className="chat-messages">
            {messages.length === 0 && <p className="empty-msg">Escribe tu consulta...</p>}
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <form className="chat-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={`${t("Pregunta algo")}`}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
            />
            <button type="submit">
              <img width="30" height="30" src="https://img.icons8.com/fluency/96/filled-sent.png" alt="filled-sent"/>
            </button>
          </form>
        </div>
        </div>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;
