import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  width: 90%;
  padding: 20px;
  backdrop-filter: blur(5px) saturate(180%);
  -webkit-backdrop-filter: blur(5px) saturate(180%);
  background-color: rgba(4, 4, 4, 0.63);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  margin: 0;
  border: 1px solid var(--violetFull5);
  border-radius: 5px;

  @media (max-width: 768px) {
    border-radius: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  div > div {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`;

export const CardImage = styled.img`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
  transition: transform 0.3s ease;
  border: 2px solid var(--color5);
  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  @media (max-width: 568px) {
    width: 250px;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding: 20px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    padding: 5px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: var(--greenStyle);
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--violetFull5);
  transition: color 0.3s ease, transform 0.2s ease;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const CardText = styled.p`
  font-size: 1.1rem;
  color: var(--silverFull5);
  font-weight: 500;
  line-height: 1;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardLanguages = styled.div`
  display: flex;
  gap: 10px;
  font-size: 2em;
  border-radius: 5px;
  margin-left: 1rem;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: space-around;
`;

export const CardButton = styled.button`
  align-self: center;
  z-index: 1;
  position: relative;
  color: grey;
  font-size: 1.9em;
  border: none;
  border-radius: 5px;
  padding: 0.1em 0.2em;
  overflow: hidden;
  transition: color 0.8s ease-in-out;
  background: transparent;
  width: 50px;
  text-align: center;

  &::before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background-color: var(--greenStyle);
    transform-origin: center;
    transform: translate3d(-50%, -50%, 0) scale3d(0, 0, 0);
    transition: transform 1s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: black;
  }

  &:hover::before {
    transform: translate3d(-50%, -50%, 0) scale3d(15, 15, 15);
  }
`;
