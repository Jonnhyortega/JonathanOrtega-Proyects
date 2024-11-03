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
} from "@fortawesome/free-brands-svg-icons";
import { ProjectHighlight } from "./ProjectHighlight/ProjectHighlight";
export const HomeContent = () => {
  return (
    <HomeContainer >
      <Title>Portafolios de Jonathan</Title>
      <Subtitle>Bienvenido</Subtitle>
      <div>
        <StyledLink to="/projects">Ver proyectos</StyledLink>
        <StyledLink to="/contact">Contacto</StyledLink>
      </div>

      <SkillsContainer>
        <h3>Tecnologias que mejor domino</h3>
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
        </SkillsList>
      </SkillsContainer>

      <section>
      <ProjectHighlight />
      </section>
    </HomeContainer>
  );
};

export default HomeContent;
