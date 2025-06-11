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

export const CertificationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  animation: ${fadeIn} 0.5s ease-out;

  h2 {
    font-size: 2.5em;
    color: var(--violetFull5);
    text-align: center;

    @media (max-width: 368px) {
      font-size: 1.6em;
    }
  }
`;

export const CertificateCard = styled.div`
  background: transparent;
  border: 1px solid var(--violetFull1);
  padding: 15px 20px;
  border-radius: 12px;
  width: 400px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  animation: ${scaleIn} 0.5s ease-out;

  * {
    margin: 0;
  }

  h3 {
    font-size: 1.2em;
    color: var(--greenStyle);
    font-weight: 400;

    @media(max-width: 368px) {
      font-size: 1.2em; 
    }
  }

  p {
    font-size: 1em;
    font-weight: 400;
    color: var(--silverFull5);

    @media(max-width: 368px) {
      font-size: 0.9em; 
    }
  }

  a {
    color: white;
    padding: 0.5em 1em;
    border: none;
    background-color: var(--violetFull1);
    border-top-right-radius: 9px;
    border-bottom-left-radius: 9px;
    font-weight: 300;
    cursor: pointer;
    text-decoration: none;
    position: absolute;
    top: 0;
    right: 0;
    &:hover {
      background: var(--violetFull5);
    }

    @media (max-width: 568px) {
      padding: 0.3em 0.6em;
    }

    @media (max-width: 360px) {
      padding: 0.2em 0.4em;
      width: 10%;
      text-align: center;
      border-radius: 20px;
      height: 20%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  small {
    margin-top: 1rem;
    color: var(--silverFull5);
    font-weight: 200;

    @media (max-width: 568px) {
      font-size: 0.8em;
    }

    @media (max-width: 360px) {
      font-size: 0.7em;
    }
  }

  @media (max-width: 568px) {
    width: 80%;
  }

  @media (max-width: 368px) {
    width: auto;
    border: none;
  }
`;

export const ButtonStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: .6rem;
`;

export const ButtonCertif = styled.button`
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.2em 1em;
  border: none;
  border-radius: 4px;
  background-color: transparent;
  overflow: hidden;
  transition: color 0.4s ease-in-out;
  border: 1px solid var(--violetFull5);
  animation: ${scaleIn} 0.5s ease-out;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--violetFull5);
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 0.45s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: black;
  }

  &:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
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
  }

  p {
    font-size: 1.5em;
    margin: 10px 0;
    font-weight: 100;
    color: var(--greenStyle);
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
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin: 20px 0;
  animation: ${fadeIn} 0.5s ease-out;

  a {
    font-size: 1.4em;
    color: var(--silverFull5);
    padding: 10px 15px;
    border-radius: 10px;
    background-color: var(--violetFull1);
    transition: background-color 0.3s ease;

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
