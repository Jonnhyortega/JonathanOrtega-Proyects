import React from "react";
import { projects } from "../../utils/data";
import { Card } from "../CardProject/Card";
import { ContainerProjects, Title } from "./ProjectContentStyles";
import { useTranslation } from "react-i18next";
import {
  CardContent,
  CardTitle,
  CardLanguages,
  CardText,
  ButtonsDiv,
} from "../CardProject/CardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import imgsTechnologies from "../../utils/data";
import clipgenLogo from "../../imgs/ProjectsImgs/Clipgen/clipgenlogo.webp";

export const ProjectContent = () => {
  const { t } = useTranslation();
  const technologiesForClipgenai = Object.keys(imgsTechnologies).filter((l) => {
    return l === "html5" || l === "css3" || l === "js";
  });

  return (
    <ContainerProjects>
      <Title>Proyectos</Title>
      <div className="container-projects">
        <CardContent $backgroundimage={clipgenLogo}>
          <div className="title-and-icons">
            <CardTitle>
              <h2>{t("CLIPGENAI")}</h2>
            </CardTitle>
            <CardLanguages>
              <img
                width={40}
                height={40}
                src={"https://img.icons8.com/color/50/html-5--v1.png"}
                alt={"language"}
              />
              <img
                width={40}
                height={40}
                src={"https://img.icons8.com/color/50/css3.png"}
                alt={"language"}
              />
              <img
                width={40}
                height={40}
                src={"https://img.icons8.com/fluency/48/javascript.png"}
                alt={"language"}
              />
            </CardLanguages>
          </div>
          <div className="description-and-links">
            <CardText>
              <p>
                {t(
                  "Refactorizacion de codigo front end de aplicacion destinada a inteligencia artificial de automatizacion de videos desarrollada en Django."
                )}
              </p>
            </CardText>
            <ButtonsDiv>
              <a target="_blank" href="https://www.clipgenai.com">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
              <a
                target="_blank"
                href={"https://github.com/Jonnhyortega/clipgen-frontend"}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </ButtonsDiv>
          </div>
        </CardContent>
        {projects.map((project) => (
          <Card key={project.id} data={project} />
        ))}
      </div>
    </ContainerProjects>
  );
};
export default ProjectContent;
