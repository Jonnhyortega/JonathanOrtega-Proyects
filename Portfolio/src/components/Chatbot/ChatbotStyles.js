import styled from "styled-components";

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-family: Arial, sans-serif;
  z-index: 10000;
  background-color: transparent;

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px) saturate(180%);
    -webkit-backdrop-filter: blur(3px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;

    .close-btn {
    background: transparent;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
  }

  .close-btn:hover{
    color: var(--violetFull1);

  }
  }

  .chat-icon {
    background: var(--violetFull5);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    width: 156px;
    height: 56px;
    transition: 0.3s ease;
  }


  .chat-icon:hover {
        background: var(--violetFull4);

  }

  .chat-window {
    width: 90%;
    height: 90%;
    background: transparent;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .chat-header {
    background: var(--violetFull5);
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 5px black;
  }

  .chat-header img {
    filter: drop-shadow(1px 1px 5px black);
  }

  

  .chat-messages {
    flex: 1;
    padding: 12px 16px;
    overflow-y: auto;
    background: var(--silverFull5);

    span{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    a{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: white;

    }
    }
  }

  .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 16px;
    width: fit-content;
    max-width: 80%;
    word-wrap: break-word;
    font-family: var(--inter);
    font-weight: 300;
    box-shadow: 1px 1px 10px grey;
  }

  .message.user {
    background: #e0e0e0;
    color: black;
    align-self: flex-end;
  }

  .message.bot {
    background: #7e3ff2;
    color: white;
    align-self: flex-start;
  }

  .message.loading {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .chat-input-area {
    display: flex;
    padding: 8px 12px;
    border: 1px solid #2f2f2f;
    background: var(--silverFull5);
    width: 80%;
    margin: 0 auto;
    margin-top: 10px;
    border-radius: 20px;
    box-shadow: #2f2f2f;
  }

  .chat-input-area input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    background: transparent;
    color: black;
    font-family: var(--kanit);
  }

  .chat-input-area input::placeholder {
    color: black;
    font-weight: 200;
  }

  .chat-input-area button {
    background: transparent;
    border: 1px solid black;
    color: black;
    padding: 0 16px;
    margin-left: 8px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s ease;
  }

  .chat-input-area button:hover {
    background: black;
    color: white;
  }

  .quick-replies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 8px 12px;
    background: var(--silverFull5);
  }

  .quick-replies button {
    background: #ffffff;
    border: none;
    border-radius: 16px;
    padding: 6px 12px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .quick-replies button:hover {
    background: #7e3ff2;
    color: white;
  }
`;
