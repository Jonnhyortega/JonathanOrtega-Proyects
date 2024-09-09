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
import certifDW from "../imgs/diseñoWeb.jpg";
import certifJs from "../imgs/javascript.jpg";

const ContactContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  background: transparent;
  text-align: center;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 3em;
  color: #f39c12;
  width: 100%;
  max-width: 800px;
`;

const ProfileImg = styled.img`
  width: 180px;
  border: 3px solid #f39c12;
  border-radius: 50%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Subtitle = styled.p`
  font-size: 1.8em;
  margin: 20px 0;
  font-weight: 200;
`;

const ContactMethods = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const ContactLink = styled.a`
  font-size: 1.8em;
  color: white;
  background-color: #f39c12;
  padding: 10px 15px;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e67e22;
  }
`;

const EmailContainer = styled.div`
  margin-bottom: 40px;
`;

const EmailText = styled.p`
  font-size: 1.4rem;
  color: white;
  margin-bottom: 10px;
`;

const CopyButton = styled.button`
  font-size: 1.4rem;
  color: white;
  background-color: transparent;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #f39c12;
  }
`;

const ContainerCertificados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 0 0 20px 0;
`;

const Certificado = styled.div`
  background: transparent;
  padding: 0 20px;
  border-radius: 12px;

  div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 2px;
  }
`;

const TitleFirst = styled.h2`
  font-size: 2em;
  color: #f39c12;
`;

const TitleCertif = styled.h3`
  font-size: 1.2em;
  color: #f39c12;
`;

const CertifButton = styled.a`
  font-size: 1em;
  color: white;
  text-decoration: none;
  padding: 10px;
  border: 2px solid #f39c12;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f39c12;
    color: white;
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
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #f39c12;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.2rem;
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
      <ProfileImg src={profilePhoto} alt="Foto de perfil" />
      <Subtitle>Contactame a través de las siguientes plataformas</Subtitle>

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
        <ContactLink href="https://wa.link/esj2m3" target="_blank">
          <FontAwesomeIcon icon={faWhatsapp} />
        </ContactLink>
      </ContactMethods>

      <EmailContainer>
        <EmailText>jonnhyortega@gmail.com</EmailText>
        <CopyButton onClick={() => copyToClipboard("jonnhyortega@gmail.com")}>
          <FontAwesomeIcon icon={faCopy} /> Copiar correo
        </CopyButton>
      </EmailContainer>

      {showNotification && (
        <Notification>
          Correo copiado al portapapeles, espero tu mensaje 👌😎
        </Notification>
      )}

      <ContainerCertificados>
        <TitleFirst>Certificaciones</TitleFirst>

        <Certificado>
          <TitleCertif>Alura Latam - Oracle</TitleCertif>
          <p>Programa educativo de Oracle y Alura Latam</p>
          <CertifButton
            href="https://app.aluracursos.com/user/jonnhyortega/fullCertificate/3195a1e9faf52cddc7ec10489f7f6b37"
            target="_blank"
          >
            Ver Certificado
          </CertifButton>
        </Certificado>

        <Certificado>
          <TitleCertif>Nucba - Full Stack</TitleCertif>
          <p>
            Carrera Full Stack con especialización en Diseño Web responsivo,
            JavaScript, React y Back end (Stack MERN)
          </p>
          <div>
            <CertifButton href={certifDW} download="diseñoWeb.jpg">
              Ver Certificado Diseño Web
            </CertifButton>
            <CertifButton href={certifJs} download="javascript.jpg">
              Ver certificado JS
            </CertifButton>
            <CertifButton>React, upcoming next...</CertifButton>
            <CertifButton>Backend, upcoming next...</CertifButton>
          </div>
        </Certificado>
      </ContainerCertificados>
    </ContactContainer>
  );
};
