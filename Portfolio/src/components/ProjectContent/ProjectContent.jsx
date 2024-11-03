import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { iconMap } from "../../utils/data";
import { projects } from "../../utils/data";

import { Card } from "../CardProject/Card";
import { ContainerProjects, Title } from "./ProjectContentStyles";
export const ProjectContent = () => {
  return (
    <ContainerProjects>
      <Title>Proyectos</Title>
      {projects.map((project) => (
        <Card
          key={project.id}
          cardLink={project.link}
          cardGitHub={project.gitHub}
          cardId={project.id}
          cardImage={project.img}
          cardTitle={project.name}
          cardDescription={project.description}
          cardLanguages={project.language}
        />
      ))}
    </ContainerProjects>
  );
};
export default ProjectContent;
