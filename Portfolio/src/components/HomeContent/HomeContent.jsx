import React from "react";
import {
  HomeContainer,
  Title,
  Subtitle,
  StyledLink,
  SkillsContainer,
  SkillsList,
  Text,
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
import { Button } from "../Button3D/Button.jsx";

export const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      {/* <Button /> */}
      <Subtitle>{t("Bienvenido al")}</Subtitle>
      <Title>{t("Portafolios")}</Title>
      <Text>{t("Desarrollador de aplicaciones web")}</Text>
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
