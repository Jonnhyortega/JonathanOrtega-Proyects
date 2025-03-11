import React from "react";
import styled from "styled-components";
import ProjectContent from "../../components/ProjectContent/ProjectContent";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const ProjectWrapper = styled.div`
  width: 100%;
  position: relative;

  .ribbon {
    display: block;
    position: fixed;
    right: -100px;
    top: 0;
    width: 200px;
    height: 200px;
    z-index: 9000;
  }
  .follow-lkd {
    position: absolute;
    display: block;
    width: 200%;
    left: -20%;
    top: -30%;
    z-index: 901;
    cursor: pointer;
    background-color: #026ccf;
    color: #f0f0f0;
    font-size: 13px;
    padding: 0;
    line-height: inherit;
    text-decoration: none;
    font-family: MontSerrat, Tahoma, Arial, sans-serif;
    font-weight: 700;
    box-shadow: -2px 3px 1px rgba(0, 0, 0, 0.23);
    opacity: 1;
    text-transform: uppercase;
    transform: translate3d(0, 0, 0) rotate(45deg);
    transform-origin: 0 0;
    height: 44px;
    line-height: 47px;
    transition: background-color 0.2s ease-out 0s,
      transform 0.7s cubic-bezier(0.7, 0, 0.25, 1) 1s, opacity 0.2s ease-out 1s;
  }
`;
export const Projects = () => {
  return (
    <ProjectWrapper>
      <ProjectContent />
    </ProjectWrapper>
  );
};

export default Projects;
