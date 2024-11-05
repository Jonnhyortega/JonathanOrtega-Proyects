import React, { useState } from "react";
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
import { useTranslation } from "react-i18next";

export const ContactComponent = () => {
  const { t } = useTranslation();

  return (
    <ContactSection>
      <h2>{t("Contacto")}</h2>
      <ImgPerfil src={profilePhoto} alt="Profile" />
      <p>{t("Plataformas de interés")}</p>
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
    </ContactSection>
  );
};

export default ContactComponent;
