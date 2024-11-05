import React from "react";
import {
  HomeContainer,
  Title,
  Subtitle,
  StyledLink,
  SkillsContainer,
  SkillsList,
} from "./HomeContentStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faCss3Alt,
  faHtml5,
  faReact,
  faNode,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "react-i18next";

export const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <Subtitle>{t("Bienvenido al")}</Subtitle>
      <Title>{t("Portafolios")}</Title>
      <Subtitle>{t("Desarrollador de aplicaciones web")}</Subtitle>
      <div>
        <StyledLink to="/projects">{t("Ver proyectos")}</StyledLink>
        <StyledLink to="/contact">{t("Contacto")}</StyledLink>
      </div>

      <SkillsContainer>
        <h3>{t("Tecnologias preferidas")}</h3>
        <SkillsList>
          <li>
            <FontAwesomeIcon icon={faJs} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCss3Alt} />{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faHtml5} />{" "}
          </li>
          <li>
            <FontAwesomeIcon icon={faReact} />
          </li>
          <li>
            <FontAwesomeIcon icon={faNode} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
        </SkillsList>
      </SkillsContainer>
    </HomeContainer>
  );
};

export default HomeContent;
