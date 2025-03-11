import styled, { keyframes } from "styled-components";

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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  background: transparent;

  .container-projects {
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--violetFull5);
  border-bottom: 2px solid;
  font-size: 3.5em;
  width: fit-content;
  margin: 50px auto 10px auto;
  animation: ${fadeIn} 1s ease-in-out;

  @media (max-width: 568px) {
    font-size: 2.8em;
  }
  @media (max-width: 368px) {
    font-size: 2em;
  }
`;
