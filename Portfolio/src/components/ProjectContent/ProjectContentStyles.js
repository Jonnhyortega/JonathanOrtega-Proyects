import styled, { keyframes } from "styled-components";
import backgroundHome from "../../imgs/HomeImg/HomeBackground.jpeg";

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

export const ContainerProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  background: transparent;
  padding: 50px 0;
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--violetFull5);
  border-bottom: 2px solid;
  font-size: 3.5em;
  text-align: justify;

  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 568px) {
    font-size: 2.8em;
  }
  @media (max-width: 368px) {
    font-size: 2em;
  }
`;
