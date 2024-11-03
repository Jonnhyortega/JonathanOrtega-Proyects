import React, { useEffect, useState } from "react";
import { ProjectWrapper } from "./ProjectHighlightStyles.js";
import projects from "../../../utils/data.js";
import { Card } from "../../CardProject/Card.jsx";

export const ProjectHighlight = () => {
  const randomNumber = Math.ceil(Math.random() * 4);
  const project = projects[2];

  return (
    <ProjectWrapper>
      <span>Proyecto de muestra</span>
      <Card
        cardLink={project.link}
        cardGitHub={project.gitHub}
        cardId={project.id}
        cardImage={project.img}
        cardTitle={project.name}
        cardDescription={project.description}
        cardLanguages={project.language}
      />
    </ProjectWrapper>
  );
};

export default ProjectHighlight;
