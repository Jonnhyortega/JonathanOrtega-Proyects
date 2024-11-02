import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  ContactSection,
  ImgPerfil,
  EmailSection,
  IconContainer,
} from "./ContactComponentStyles";
import profilePhoto from "../../../imgs/img-perfil.jpg";
import DownloadCVButton from "../../DownloadButton/DownloadButton";

export const ContactComponent = () => {
  const [showNotification, setShowNotification] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch((err) => {
        alert("Error al copiar el correo: ", err);
      });
  };
  return (
    <ContactSection>
      <h2>Contacto</h2>
      <ImgPerfil src={profilePhoto} alt="Profile" />
      <p>Plataformas de interés</p>
      <IconContainer>
        <a href="mailto:jonnhyortega@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/jonathan-ortega-a00970191/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/Jonnhyortega"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.link/esj2m3" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </IconContainer>
      <DownloadCVButton />
        {/* <p>jonnhyortega@gmail.com</p> */}
      <EmailSection>
        
      </EmailSection>

      {showNotification && (
        <div className="notification">
          Correo copiado al portapapeles, espero tu mensaje 👌😎
        </div>
      )}
    </ContactSection>
  );
};

export default ContactComponent;
