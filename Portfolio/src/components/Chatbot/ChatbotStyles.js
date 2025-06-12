import styled from 'styled-components';

export const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-family: Arial, sans-serif;
  z-index: 10000;
  
  h4{
    font-family: var(--kanit);
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(3px) saturate(180%);
    -webkit-backdrop-filter: blur(3px) saturate(180%);
    background-color: rgba(255, 255, 255, 0);    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

 
  .chat-icon {
    background-color: transparent;
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 28px;
    width: 56px;
    height: 56px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    position: relative;
    }

    
    .chat-icon > img{
      transition:  0.3s ease;
    }

    .chat-icon > img:hover{
      transition: .3s ease;
      transform: scale(1.1);
      filter: drop-shadow(1px 1px 5px var(--violetFull1));
    }


    .chat-window {
    width: 90%;
    height: 90%;
    background: black;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    }

    .chat-header {
    background: linear-gradient(
    to bottom,
    rgba(74, 35, 90, 1) 0%,
    rgba(108, 52, 131, 1) 38%,
    rgba(142, 68, 173, 1) 80%
     );
    color: white;
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 5px black;

    img{
      filter: drop-shadow(1px 1px 5px black);
    }

    }

    .close-btn {
    background: transparent;
    border: none;
    font-size: 24px;
    color: white;
    cursor: pointer;
    line-height: 1;
    }

    .chat-messages {
    flex: 1;
    padding: 12px 16px;
    overflow-y: auto;
background: linear-gradient(
    to bottom,
    rgba(74, 35, 90, 1) 0%,
    rgba(108, 52, 131, 1) 38%,
    rgba(142, 68, 173, 1) 80%
     );    position: relative;
    
    }

    .empty-msg {
    color: gold;
    font-size: 5rem;
    font-style: italic;
    text-align: center;
    margin-top: 50%;
    position: fixed;
    width: 100%;
    height: 100%;
    top:1500px;
    background-color: gold;
    }

    .message {
    margin-bottom: 10px;
    padding: 8px 12px;
    border-radius: 16px;
    max-width: 75%;
    word-wrap: break-word;
    font-family: var(--kanit);
    font-weight: 300;
    
    }

    

    .message.user {
    background-color: var(--violetFull1);
    color: white;
    align-self: flex-end;
    }

    .message.bot {
    background-color: var(--violetFull5);
    color: white;
    align-self: flex-start;
    }

    .chat-input-area {
    display: flex;
    padding: 8px 12px;
    border-top: 1px solid transparent;
    background: black;
    }

    .chat-input-area input {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid transparent;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    background-color: transparent;
    color: var(--greenStyle);
    font-family: var(--kanit);
    }

    .chat-input-area input::placeholder{
      color: white;
    }

    .chat-input-area button {
    background-color: transparent;
    border: none;
    color: white;
    padding: 0 16px;
    margin-left: 8px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    transition:  0.3s ease;
    }

    .chat-input-area button > *:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
    }
`;

