import styled from "styled-components";
import ProjectContent from "../../components/ProjectContent/ProjectContent";
export const ProjectWrapper = styled.div`
  width: 100%;
`;
export const Projects = () => {
  return (
    <ProjectWrapper>
      <ProjectContent />
    </ProjectWrapper>
  );
};

export default Projects;
