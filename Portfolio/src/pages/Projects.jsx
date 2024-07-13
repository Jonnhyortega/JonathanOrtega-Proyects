import React from "react";
import styled, { keyframes } from "styled-components";
import STORE_1 from "../imgs/chulos-terrazos.png";
import STORE_2 from "../imgs/grantMovies.png";
import WORK_LIST from "../imgs/to-do-list.jpg";
import LANDING from "../imgs/logo-goa-mma.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
export const iconMap = {
  html5: FaHtml5,
  "css3-alt": FaCss3Alt,
  js: FaJs,
  bootstrap: FaBootstrap,
  react: FaReact,
};

const projects = [
  {
    name: "Store",
    img: STORE_1,
    link: "https://decoracion-chulo.vercel.app/",
    language: ["html5", "css3-alt", "js"],
  },
  {
    name: "Lista de tareas",
    img: WORK_LIST,
    link: "https://lista-de-tareas-topaz.vercel.app/",
    language: ["html5", "css3-alt", "js"],
  },
  {
    name: "Store",
    img: STORE_2,
    link: "https://eccomerce-de-peliculas.vercel.app/",
    language: ["html5", "css3-alt", "js", "bootstrap"],
  },
  {
    name: "Landing",
    img: LANDING,
    link: "https://landing-goa.vercel.app/",
    language: ["html5", "css3-alt", "js", "react"],
  },
];

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px auto auto auto;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: #f39c12;
  border-bottom: 2px solid;
  font-size: 2.5em;
  margin: 0;
  color: #f39c12;
  text-align: justify;

  animation: ${fadeIn} 1s ease-in-out;
`;

const CardGrid = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;

  @media (max-width: 1070px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  max-width: 220px;
  max-height: 170px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2}});
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 10px 5px #f39c12;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  padding: 20px;
  color: #fff;
  opacity: 0;

  transition: opacity 0.3s ease;
  ${Card}:hover & {
    opacity: 1;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #f39c12;
`;

const CardLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-size: 1.2rem;
  display: inline-block;
  transition: color 1s ease, text-decoration 0.3s ease;

  &:hover {
    color: red;
    filter: drop-shadow(1px 2px 5px red);
    text-decoration: underline;
  }
`;

const CardLanguages = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
  color: #f39c12;
  font-size: 1.5rem;

  i {
    transition: color 0.3s ease;
  }

  i:hover {
    color: #f1c40f;
  }
`;

export const Projects = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Projects;
