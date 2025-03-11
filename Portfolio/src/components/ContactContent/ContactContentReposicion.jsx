import React, { useState } from "react";
import {
  ContactSection,
  ImgPerfil,
  Overlay,
  OverlayImage,
} from "./ContactContentStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCopy, faEye } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import profilePhoto from "../../imgs/img-perfil.jpg";
import certifDW from "../../imgs/diseñoWeb.webp";
import certifJs from "../../imgs/javascript.webp";
import certifReact from "../../imgs/react.webp";
import DownloadCVButton from "../DownloadButton/DownloadButton";
export const ContactContent = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

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

  const handleImageClick = (src) => {
    setImageSrc(src);
    setShowOverlay(true);
  };

  const handleCloseOverlay = () => {
    setShowOverlay(false);
    setImageSrc("");
  };

  return (
    <ContactSection>
      <div className="contact-section">
        <h2>Contacto</h2>
        <ImgPerfil src={profilePhoto} alt="" />
        <p>Plataformas de interes</p>

        <div className="icon-container">
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
        </div>
        
        <DownloadCVButton />
        <div className="email-section">
          <p>jonnhyortega@gmail.com</p>
          <button onClick={() => copyToClipboard("jonnhyortega@gmail.com")}>
            <FontAwesomeIcon icon={faCopy} /> Copiar correo
          </button>
        </div>
      </div>

      <div className="certification-section">
        <h2>Certificaciones</h2>

        <div className="certificate-card">
          <h3>Alura Latam - Oracle</h3>
          <p>Programa educativo de Oracle y Alura Latam</p>
          <a
            href="https://app.aluracursos.com/user/jonnhyortega/fullCertificate/3195a1e9faf52cddc7ec10489f7f6b37"
            target="_blank"
          >
            <FontAwesomeIcon icon={faEye} />
          </a>
        </div>

        <div className="certificate-card">
          <h3>Nucba - Full Stack</h3>
          <p>Stack MERN</p>
          <div className="buttons-full-stack">
            <button onClick={() => handleImageClick(certifDW)}>
              Responsive
            </button>
            <button onClick={() => handleImageClick(certifJs)}>
              Javascript
            </button>
            <button onClick={() => handleImageClick(certifReact)}>React</button>
          </div>
          <small>Click en los botones para ver los certificados</small>
        </div>
      </div>

      {showNotification && (
        <div className="notification">
          Correo copiado al portapapeles, espero tu mensaje 👌😎
        </div>
      )}
      {showOverlay && (
        <Overlay onClick={handleCloseOverlay}>
          <OverlayImage src={imageSrc} alt="Certificado" />
        </Overlay>
      )}
    </ContactSection>
  );
};


export default ContactContent;
