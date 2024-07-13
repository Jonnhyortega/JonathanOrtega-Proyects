import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import profilePhoto from "../imgs/img-perfil.jpg";

const ContactContainer = styled.div`
  margin: 20px auto auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 90%;
`;

const Title = styled.h2`
  border-bottom: 2px solid;
  font-size: 2.5em;
  color: #f39c12;
  text-align: justify;
  animation: fadeInDown 1s ease-in-out;

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProfileImg = styled.img`
  width: 150px;
  border: 1px solid #f39c12;
  border-radius: 50%;
  animation: animationProfile 1s ease-in-out;
  transform-origin: center;

  @keyframes animationProfile {
    0% {
      opacity: 0;
      width: 10px;
      transform: scale(0.1) translateY(25px);
    }
    100% {
      opacity: 1;
      width: 150px;
      transform: scale(1) translateY(0);
    }
  }
`;

const Subtitle = styled.p`
  font-size: 1.5em;
  font-weight: 200;
  margin-top: 25px;
  padding: 1em;
  animation: fadeInUp 1s ease-in-out;
  text-align: justify;
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContactMethods = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ContactLink = styled.a`
  font-size: 1.3em;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: #f39c12;
    box-shadow: 1px 1px 5px black;
  }
`;

const EmailContainer = styled.div`
  padding: 1em;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  animation: fadeIn 1.5s ease-in-out;
`;

const EmailText = styled.p`
  font-size: 1.2rem;
  color: white;
`;

const CopyButton = styled.button`
  font-size: 1.2rem;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.1s ease, color 0.3s ease;

  &:hover {
    background-color: white;
    color: #f39c12;
    box-shadow: 1px 1px 5px black;
  }
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  10% {
    opacity: 1;
    transform: translateY(0);
  }
  90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const Notification = styled.div`
  letter-spacing: 1px;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-20%);
  background-color: #f39c12;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: 300;
  animation: ${fadeInOut} 3s ease-in-out;
`;

export const Contact = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      },
      (err) => {
        alert("Error al copiar el correo: ", err);
      }
    );
  };

  return (
    <ContactContainer>
      <Title>Contacto</Title>
      <ProfileImg src={profilePhoto}></ProfileImg>

      <Subtitle>
        Puedes contactarme a través de las siguientes plataformas:
      </Subtitle>

      <ContactMethods>
        <ContactLink href="mailto:jonnhyortega@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </ContactLink>
        <ContactLink
          href="https://www.linkedin.com/in/jonathan-ortega-a00970191/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </ContactLink>
        <ContactLink href="https://github.com/Jonnhyortega" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </ContactLink>
        <ContactLink href="https://twitter.com/your-profile" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </ContactLink>
      </ContactMethods>

      <EmailContainer>
        <EmailText>jonnhyortega@gmail.com</EmailText>
        <CopyButton onClick={() => copyToClipboard("jonnhyortega@gmail.com")}>
          <FontAwesomeIcon icon={faCopy} />
        </CopyButton>
      </EmailContainer>

      {showNotification && (
        <Notification>
          Copiado en portapapeles, espero tu mensaje 👌😎
        </Notification>
      )}
    </ContactContainer>
  );
};

export default Contact;
