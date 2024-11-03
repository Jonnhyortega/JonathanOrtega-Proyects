import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  CertificationSection,
  CertificateCard,
  ButtonStack,
  ButtonCertif,
} from "./CertificationStyles";
import certifDW from "../../../imgs/Certifications/CERTIF_DW.jpg";
import certifJs from "../../../imgs/Certifications/CERTIF_JS.jpg";
import certifReact from "../../../imgs/Certifications/REACT.jpg";
import upcoming from "../../../imgs/Certifications/proximamente.jpeg"

export const Certification = ({ handleImageClick }) => {
  return (
    <CertificationSection>
      <h2>Certificaciones</h2>
      <CertificateCard>
        <h3>Alura Latam - Oracle</h3>
        <p>Programa educativo de Oracle y Alura Latam</p>
        <a
          href="https://app.aluracursos.com/user/jonnhyortega/fullCertificate/3195a1e9faf52cddc7ec10489f7f6b37"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEye} />
          
        </a>
      </CertificateCard>
      <CertificateCard>
        <h3>Nucba - Full Stack</h3>
        <p>Stack MERN</p>
        <ButtonStack>
          <ButtonCertif onClick={() => handleImageClick(certifDW)}>Responsive</ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(certifJs)}>Javascript</ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(certifReact)}>React</ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(upcoming)}>BackEnd</ButtonCertif>
        </ButtonStack>
        <small>Click en los botones para ver los certificados</small>
      </CertificateCard>
    </CertificationSection>
  );
};

export default Certification;
