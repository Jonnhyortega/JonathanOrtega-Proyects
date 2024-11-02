import React from "react";
import {
  HomeContainer,
  Title,
  Subtitle,
  StyledLink,
} from "./HomeContentStyles";
export const HomeContent = () => {
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

export default HomeContent;
