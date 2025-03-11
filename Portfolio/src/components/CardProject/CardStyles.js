import styled from "styled-components";

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 350px;
  border-radius: 2px;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
  border-top: 1px solid grey;
  border-bottom: 1px solid var(--violetFull5);
  position: relative;
  background-image: url(${(props) => props.$backgroundimage});
  background-size: cover;
  background-position: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 0;

  }
  /* 
  * {
    border: 1px solid yellow;
  } */

  @media (max-width: 768px) {
    width: 100%;
    min-width: none;
    min-height: none;
    text-align: center;
    padding: 5px;
  }
  @media (max-width: 568px) {
    grid-template-columns: 1fr;
  }

  &:hover .description-and-links {
    opacity: 1;
    transform: translateY(0);
  }

  .title-and-icons {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    z-index: 1;
  }

  .description-and-links {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(25px) saturate(180%);
    -webkit-backdrop-filter: blur(25px) saturate(180%);
    background-color: rgb(91, 44, 211, 0.2);
    opacity: 0;
    transform: translateY(20px);
    border-radius: 4px;
    font-family: var(--inter);
    transition: opacity 0.5s ease, transform 0.5s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .description {
    z-index: 2;
  }
`;

export const CardTitle = styled.div`
  font-size: 1rem;
  width: 90%;

  margin: 0;
  text-transform: uppercase;
  transition: color 0.3s ease, transform 0.2s ease;
  filter: drop-shadow(1px 1px 3px grey);

  h2 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: var(--greenStyle);
    letter-spacing: 1.2px;
  }
  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const CardText = styled.div`
  font-size: 1.1rem;
  color: var(--silverFull5);
  font-weight: 300;
  line-height: 1;
  padding: 20px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const CardLanguages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 2em;
  border-radius: 5px;
  margin-left: 1rem;
  img {
    filter: drop-shadow(1px 1px 5px rgb(72, 72, 72));
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  justify-content: space-around;

  a {
    color: var(--greenStyle);
    font-size: 2rem;
    transition: color 0.3s ease, transform 0.2s ease;
    padding: 0.8rem;
  }

  a:hover {
    color: var(--violetFull5);
    transform: scale(1.1);
  }
`;
