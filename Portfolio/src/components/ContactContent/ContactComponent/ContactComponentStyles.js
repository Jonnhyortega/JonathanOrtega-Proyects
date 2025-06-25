import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  color: var(--silverFull5);
  animation: ${fadeIn} 0.5s ease-out;

  h2 {
    font-size: 2.5em;
    color: var(--violetFull5);
    margin-bottom: 10px;
    animation: ${scaleIn} 0.5s ease-out;
  }

  p {
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: 300;
    color: var(--greenStyle);
    animation: ${scaleIn} 0.5s ease-out;
  }
`;

export const ImgPerfil = styled.img`
  width: 200px;
  border-radius: 50%;
  border: 3px solid var(--violetFull1);
  transition: transform 0.3s ease;
  animation: ${scaleIn} 0.5s ease-out;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-out;
  /* background-color: gold; */
  width: 200px;
  a {
    font-size: 1.2em;
    font-weight: 300;
    color: var(--silverFull5);
    padding: 10px 15px;
    border-radius: 10px;
    background-color: var(--violetFull1);
    transition: background-color 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    &:hover {
      background-color: var(--violetFull5);
    }
  }

  @media (max-width: 368px) {
    a {
      padding: 6px 8px;
    }
  }
`;

export const EmailSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-out;

  p {
    font-size: 1.5rem;
    margin: 10px 0;
    animation: ${scaleIn} 0.5s ease-out;
  }

  button {
    font-size: 0.7rem;
    color: var(--silverFull5);
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    background: var(--violetFull1);
    
    &:hover {
      background-color: var(--violetFull5);
    }
  }
`;
