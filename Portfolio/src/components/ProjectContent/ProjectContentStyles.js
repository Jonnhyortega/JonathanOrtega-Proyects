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
  padding: 20px 0;
  background-image: url(${backgroundHome});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

export const Title = styled.h2`
  text-align: center;
  color: var(--violetFull5);
  border-bottom: 2px solid;
  font-size: 3.5em;
  text-align: justify;
text-shadow:
    -1px -1px 0 var(--greenStyle), 
     1px -1px 0 var(--greenStyle), 
    -1px  1px 0 var(--greenStyle), 
     1px  1px 0 var(--greenStyle); 
}
  animation: ${fadeIn} 1s ease-in-out;
`;
