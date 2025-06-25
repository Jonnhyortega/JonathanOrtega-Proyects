import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import {
  CertificationSection,
  CertificateCard,
  ButtonStack,
  ButtonCertif,
} from "./CertificationStyles";
import certifDW from "../../../imgs/Certifications/CERTIF_DW.webp";
import certifJs from "../../../imgs/Certifications/CERTIF_JS.webp";
import certifReact from "../../../imgs/Certifications/REACT.webp";
import fullStack from "../../../imgs/Certifications/fullStack.webp";
import respDesign from "../../../imgs/Certifications/respDesign.webp";
import { useTranslation } from "react-i18next";

export const Certification = ({ handleImageClick }) => {
  const { t } = useTranslation();
  return (
    <CertificationSection>
      <h2>{t("Certificaciones")}</h2>
      <CertificateCard>
        <h3>MundosE - UNC</h3>
        <p>DevOps</p>
        <ButtonStack>
          
        </ButtonStack>
        <small>{t("Actualmente cursando")}</small>
      </CertificateCard>
      <CertificateCard>
        <h3>Nucba - Full Stack</h3>
        <p>Stack MERN</p>
        <ButtonStack>
          <ButtonCertif onClick={() => handleImageClick(certifDW)}>
            Responsive
          </ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(certifJs)}>
            Javascript
          </ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(certifReact)}>
            React
          </ButtonCertif>
          <ButtonCertif onClick={() => handleImageClick(fullStack)}>
            Full Stack
          </ButtonCertif>
        </ButtonStack>
        <small>{t("Click en los botones para ver los certificados")}</small>
      </CertificateCard>
      <CertificateCard>
        <h3>Alura Latam - Oracle</h3>
        <p>{t("Programa educativo de Oracle y Alura Latam")}</p>
        <a
          href="https://app.aluracursos.com/user/jonnhyortega/fullCertificate/3195a1e9faf52cddc7ec10489f7f6b37"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEye} />
        </a>
      </CertificateCard>      
      <CertificateCard>
        <h3>Free Code Camp</h3>       
        <ButtonStack>
          <ButtonCertif onClick={() => handleImageClick(respDesign)}>
            Responsive Design
          </ButtonCertif>
        </ButtonStack>
        <small>{t("Click en los botones para ver los certificados")}</small>
      </CertificateCard>
    </CertificationSection>
  );
};

export default Certification;
