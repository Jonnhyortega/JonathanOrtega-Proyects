import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-alig: center;
  color: #ffffff;
  padding: 100px 0;

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-size: 3.5rem;
  margin-bottom: 20px;
  color: #f39c12;
  animation: fadeInDown 1s ease-in-out;
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 900px) {
    width: 50%;
    border: 0;
  }
  @media (max-width: 450px) {
    font-size: 2em;
  }
`;

const Subtitle = styled.p`
  padding: 1em;
  font-size: 1.5rem;
  font-weight: 200;
  margin-bottom: 40px;
  animation: fadeInUp 1s ease-in-out;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledLink = styled(Link)`
  padding: 10px 20px;
  font-size: 1.2rem;
  color: #fff;
  background-color: #f39c12;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  text-align: center;
  &:hover {
    background-color: #d17c07;
  }
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Title>Bienvenido a mi portafolio</Title>
      <Subtitle>¡Descubre mis proyectos y ponte en contacto conmigo!</Subtitle>
      <div>
        <StyledLink to="/projects">Ver proyectos</StyledLink>
        <StyledLink to="/contact">Contacto</StyledLink>
      </div>
    </HomeContainer>
  );
};

export default Home;
