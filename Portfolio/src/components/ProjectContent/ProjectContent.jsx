import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { iconMap } from "./data";
import { projects } from "./data";
import {
  ContainerProjects,
  Title,
  CardGrid,
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardLanguages,
  CardLink,
} from "./ProjectContentStyles";

export const ProjectContent = () => {
  return (
    <ContainerProjects>
      <Title>Proyectos</Title>
      <CardGrid>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardImage src={project.img} alt={project.name} />
            <CardContent>
              <CardTitle>{project.name}</CardTitle>
              <CardLink
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </CardLink>
              <CardLanguages>
                {project.language.map((lang, idx) => {
                  const IconComponent = iconMap[lang];
                  return <IconComponent key={idx} />;
                })}
              </CardLanguages>
            </CardContent>
          </Card>
        ))}
      </CardGrid>
    </ContainerProjects>
  );
};
export default ProjectContent;
