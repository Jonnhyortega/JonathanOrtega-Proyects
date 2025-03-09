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
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { SiTypescript } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { Button } from "../Button3D/Button.jsx";

export const HomeContent = () => {
  const { t } = useTranslation();

  return (
    <HomeContainer>
      <Subtitle>{t("Bienvenido al")}</Subtitle>
      <Title>{t("Portafolios")}</Title>
      <Text>{t("Desarrollador de aplicaciones web full stack")}</Text>
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
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo.png"
              alt="external-react-a-javascript-library-for-building-user-interfaces-logo-shadow-tal-revivo"
            />
          </li>
          <li>
            <FontAwesomeIcon icon={faNode} />
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} />
          </li>
          <li>
            {" "}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo.png"
              alt="external-typescript-an-open-source-programming-language-developed-and-maintained-by-microsoft-logo-shadow-tal-revivo"
            />
          </li>
          <li>
            {" "}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/50/mongo-db.png"
              alt="mongo-db"
            />
          </li>
          <li>
            {" "}
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/color/50/docker.png"
              alt="docker"
            />
          </li>
          <li>
            {" "}
            <img
              width="75"
              height="75"
              src="https://img.icons8.com/fluency/96/nextjs.png"
              alt="nextjs"
            />
          </li>
        </SkillsList>
      </SkillsContainer>
    </HomeContainer>
  );
};

export default HomeContent;
