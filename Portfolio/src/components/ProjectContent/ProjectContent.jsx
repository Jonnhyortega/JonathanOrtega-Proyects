import React from "react";
import { projects } from "../../utils/data";
import { Card } from "../CardProject/Card";
import { ContainerProjects, Title } from "./ProjectContentStyles";
import { useTranslation } from "react-i18next";

export const ProjectContent = () => {
  const { t } = useTranslation;
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
