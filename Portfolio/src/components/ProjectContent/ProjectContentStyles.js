import styled, {keyframes} from "styled-components";

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
  color: #ffffff;
  animation: ${fadeIn} 1s ease-in-out;
  width: 100%;
  background: transparent;
  padding: 20px 0;
`;

export const Title = styled.h2`
  text-align: center;
  color: #f39c12;
  border-bottom: 2px solid;
  font-size: 2.5em;
  color: #f39c12;
  text-align: justify;

  animation: ${fadeIn} 1s ease-in-out;
`;

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;

  // @media (max-width: 1070px) {
  //   display: grid;
  //   grid-template-columns: 1fr 1fr;
  // }

  // @media (max-width: 700px) {
  //   display: flex;
  //   flex-direction: column;
  // }
`;

export const Card = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  width: 220px;
  max-height: 170px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2}});
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 1px 5px 1px black;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

export const CardContent = styled.div`
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

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #f39c12;
`;

export const CardLink = styled.a`
  color: #f39c12;
  text-decoration: none;
  font-size: 1.2rem;
  display: inline-block;
  transition: color 1s ease, text-decoration 0.3s ease;

  &:hover {
    color: #f39c12;
    filter: drop-shadow(1px 2px 5px #f39c12);
    text-decoration: underline;
  }
`;

export const CardLanguages = styled.div`
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