import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import cves from "./CV_ES.pdf";
import cven from "./CV_EN.pdf";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

const LinkDownload = styled.a`
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--violetFull1);
  &:hover {
    color: var(--violetFull5);
  }
`;

export const DownloadCVButton = () => {
  const { t } = useTranslation();
  const { currentLanguage } = useLanguage();

  return (
    <LinkDownload
      href={currentLanguage === "es" ? cves : cven}
      download={currentLanguage === "es" ? cves : cven}>
      {t("Descargar CV")} {""}
      <FontAwesomeIcon icon={faFile} />
    </LinkDownload>
  );
};

export default DownloadCVButton;
